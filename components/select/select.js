import { xttFormElementFactory } from "../com/form.js";
import style from "./select.css" assert { type: "css" };
import { displayPopover } from "../../utils/displayPopover.js";
import html from "./select.html";

export class xttSelectElement extends xttFormElementFactory("reflect") {
	static templateContent = html;
	static stylesContent = [...super.stylesContent, style];

	// static get observedAttributes() {
	// 	return [...super.observedAttributes];
	// }

	focusableElement = this.#select;

	connectedCallback() {
		super.connectedCallback();

		this.#selectMinWidth();
		this.#refreshSelectTrigger();

		this.#handleEventOfSelect();
	}

	// attributeChangedCallback(name, oldValue, newValue) {
	// 	super.attributeChangedCallback?.(name, oldValue, newValue);
	// }

	_reflectElementNodeAdded(node) {
		this.#elementContentChanged(node);
	}
	_reflectElementNodeRemoved(node) {
		this.#elementContentChanged(node);
	}

	#refreshSelectTrigger() {
		let selectedOption = this.querySelector("option[selected]");

		// 如果没有设置selected属性，则默认选中第一个
		if (!selectedOption) {
			selectedOption = this.querySelector("option");
			selectedOption?.setAttribute("selected", "");
		}

		this.#text.textContent = selectedOption?.getAttribute("label") || selectedOption?.textContent;
	}

	#selectMinWidth() {
		const options = this.querySelectorAll("option");

		if (options.length === 0) {
			return;
		}

		let maxContentOption = options[0];

		options.forEach((option) => {
			const text = option.getAttribute("label") || option.textContent;
			const maxContent = maxContentOption.getAttribute("label") || maxContentOption.textContent;

			if (text.length > maxContent.length) {
				maxContentOption = option;
			}
		});

		this.#text.textContent = maxContentOption.getAttribute("label") || maxContentOption.textContent;

		const w = this.#select.getBoundingClientRect().width;
		this.#select.style.minWidth = `min(${w}px, 100%)`;
	}

	#elementContentChanged(el) {
		if (el.tagName === "OPTION") {
			this.#selectMinWidth();

			if (el.selected) {
				this.#refreshSelectTrigger();
			}
		}
	}

	get #select() {
		return this.shadowRoot.getElementById("select");
	}
	get #text() {
		return this.shadowRoot.getElementById("text");
	}
	get #popover() {
		return this.shadowRoot.getElementById("popover");
	}
	get #popoverContent() {
		return this.shadowRoot.getElementById("popoverContent");
	}

	#handleEventOfSelect() {
		this.#select.addEventListener("click", () => {
			this.#showPopover();
		});

		this.#select.addEventListener("keydown", (ev) => {
			switch (ev.key) {
				case "Enter":
				case " ":
				case "ArrowDown":
				case "ArrowUp":
					this.#showPopover();
					break;
			}
		});
	}

	#showPopover() {
		if (!this.querySelector("option")) {
			return;
		}

		this.#initPopoverElement();

		this.#popover.setAttribute("open", "");
		this.#select.ariaExpanded = true;

		// 将焦点设置到选中的xtt-option上
		this.shadowRoot.querySelector("xtt-option[selected]").focus();

		this.#changePopoverPosition();
	}
	#closePopover() {
		this.#popover.removeAttribute("open");
		this.#popoverContent.innerHTML = "";
		this.#removeEventOfPopover();

		this.#select.focus();
		this.#select.ariaExpanded = false;
	}

	#initPopoverElement() {
		const options = this.querySelectorAll("option");

		options.forEach((option) => {
			const optionElement = document.createElement("xtt-option");

			// 为了更方便的获取原始的option元素
			optionElement._originalOption = option;

			optionElement.tabIndex = 0;
			optionElement.role = "option";
			if (option.hasAttribute("selected")) {
				optionElement.toggleAttribute("selected", true);
				optionElement.ariaSelected = true;
			} else if (!option.hasAttribute("disabled")) {
				optionElement.ariaSelected = false;
			}
			optionElement.toggleAttribute("disabled", option.hasAttribute("disabled"));
			optionElement.setAttribute("value", option.value);

			optionElement.textContent = option.getAttribute("label") || option.textContent;

			this.#popoverContent.appendChild(optionElement);
		});

		this.#handleEventOfPopover();
	}

	#handleEventListOfPopover = {};
	#handleEventOfPopover() {
		const wrapperElement = this.#popoverContent;

		this.#handleEventListOfPopover.click = (ev) => {
			ev.stopPropagation();

			const target = ev.target;
			if (target.tagName === "XTT-OPTION") {
				if (target.hasAttribute("disabled")) {
					return;
				}

				this.#changeEventOfSelect(target._originalOption);
			}

			this.#closePopover();
		};
		this.#handleEventListOfPopover.keydown = (ev) => {
			const target = ev.target;

			if (target.tagName === "XTT-OPTION") {
				const options = this.shadowRoot.querySelectorAll("xtt-option");
				const focusedOption =
					this.shadowRoot.querySelector("xtt-option:focus") || this.shadowRoot.querySelector("xtt-option[selected]");

				switch (ev.key) {
					case "Enter":
					case " ":
						this.#changeEventOfSelect(target._originalOption);
						this.#closePopover();
						ev.preventDefault();
						break;
					case "ArrowDown":
						this.#getNextCanFocusOption("next", options, focusedOption).focus();
						break;
					case "ArrowUp":
						this.#getNextCanFocusOption("prev", options, focusedOption).focus();
						break;
					case "Escape":
					case "Tab":
						this.#closePopover();
				}
			}
		};
		this.#handleEventListOfPopover.docClick = () => {
			this.#closePopover();
		};
		this.#handleEventListOfPopover.docScroll = () => {
			this.#closePopover();
		};

		wrapperElement.addEventListener("click", this.#handleEventListOfPopover.click);
		wrapperElement.addEventListener("keydown", this.#handleEventListOfPopover.keydown);

		document.addEventListener("scroll", this.#handleEventListOfPopover.docScroll);
		// click 的事件需要延迟绑定，否则会导致点击的时候立即触发关闭，因为此时还在冒泡阶段
		setTimeout(() => {
			document.addEventListener("click", this.#handleEventListOfPopover.docClick);
		}, 0);
	}
	#removeEventOfPopover() {
		const wrapperElement = this.#popoverContent;

		wrapperElement.removeEventListener("click", this.#handleEventListOfPopover.click);
		wrapperElement.removeEventListener("keydown", this.#handleEventListOfPopover.keydown);

		document.removeEventListener("click", this.#handleEventListOfPopover.docClick);
		document.removeEventListener("scroll", this.#handleEventListOfPopover.docScroll);
	}

	#getNextCanFocusOption(direction, allOptions, activeOption) {
		let nextEl;

		if (direction === "next") {
			nextEl = activeOption.nextElementSibling;
			if (!nextEl) {
				nextEl = allOptions[0];
			}
		} else if (direction === "prev") {
			nextEl = activeOption.previousElementSibling;
			if (!nextEl) {
				nextEl = allOptions[allOptions.length - 1];
			}
		}

		if (nextEl.hasAttribute("disabled")) {
			return this.#getNextCanFocusOption(direction, allOptions, nextEl);
		}

		return nextEl;
	}

	#changeEventOfSelect(option) {
		const selectedOption = this.querySelector("option[selected]");

		if (selectedOption === option) {
			return;
		}

		selectedOption.removeAttribute("selected");
		option.setAttribute("selected", "");
		this.#refreshSelectTrigger();

		// 触发change事件
		const changeEvent = new Event("change");
		this.dispatchEvent(changeEvent);
	}

	#changePopoverPosition() {
		displayPopover(this.#select, this.#popoverContent, ["block-end", "block-start"]);
	}

	get value() {
		return this.querySelector("option[selected]").value;
	}
	set value(val) {
		const options = Array.from(this.querySelectorAll("option"));

		options.some((option) => {
			if (option.value === val) {
				this.querySelector("option[selected]").removeAttribute("selected");
				option.setAttribute("selected", "");
				this.#refreshSelectTrigger();
				return true;
			}
		});
	}
}
