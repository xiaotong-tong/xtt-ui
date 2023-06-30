import style from "./select.css" assert { type: "css" };
import { updateElementStyle } from "../../utils/xtt-ui-utils.js";
import html from "./select.html";

export class xttSelectElement extends HTMLElement {
	template() {
		const template = document.createElement("template");
		template.innerHTML = html;

		return template.content.cloneNode(true);
	}

	static get observedAttributes() {
		return ["icon"];
	}

	#shadowRoot;

	constructor() {
		super();

		this.#shadowRoot = this.attachShadow({ mode: "open" });
		this.#shadowRoot.adoptedStyleSheets = [style];
		this.#shadowRoot.appendChild(this.template());
	}

	connectedCallback() {
		this.#refreshSelectTrigger();

		this.#handleEventOfSelect();
	}

	attributeChangedCallback(name, oldValue, newValue) {}

	#refreshSelectTrigger() {
		let selectedOption = this.querySelector("option[selected]");

		// 如果没有设置selected属性，则默认选中第一个
		if (!selectedOption) {
			selectedOption = this.querySelector("option");
			selectedOption.setAttribute("selected", "");
		}

		this.#text.textContent = selectedOption.getAttribute("label") || selectedOption.textContent;
	}

	get #select() {
		return this.#shadowRoot.getElementById("select");
	}
	get #text() {
		return this.#shadowRoot.getElementById("text");
	}
	get #popover() {
		return this.#shadowRoot.getElementById("popover");
	}
	get #popoverContent() {
		return this.#shadowRoot.getElementById("popoverContent");
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
		this.#initPopoverElement();

		this.#popover.setAttribute("open", "");
		this.#select.ariaExpanded = true;

		// 将焦点设置到选中的xtt-option上
		this.#shadowRoot.querySelector("xtt-option[selected]").focus();

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
			optionElement.toggleAttribute("selected", option.hasAttribute("selected"));
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
			const target = ev.target;
			if (target.tagName === "XTT-OPTION") {
				this.#changeEventOfSelect(target._originalOption);
			}

			this.#closePopover();
		};
		this.#handleEventListOfPopover.keydown = (ev) => {
			const target = ev.target;

			if (target.tagName === "XTT-OPTION") {
				switch (ev.key) {
					case "Enter":
					case " ":
						this.#changeEventOfSelect(target._originalOption);
						this.#closePopover();
						ev.preventDefault();
						break;
					case "ArrowDown":
						this.#moveFocusToNextOption("next");
						break;
					case "ArrowUp":
						this.#moveFocusToNextOption("prev");
						break;
					case "Escape":
					case "Tab":
						this.#closePopover();
				}
			}
		};

		wrapperElement.addEventListener("click", this.#handleEventListOfPopover.click);
		wrapperElement.addEventListener("keydown", this.#handleEventListOfPopover.keydown);
	}
	#removeEventOfPopover() {
		const wrapperElement = this.#popoverContent;

		wrapperElement.removeEventListener("click", this.#handleEventListOfPopover.click);
		wrapperElement.removeEventListener("keydown", this.#handleEventListOfPopover.keydown);
	}

	#moveFocusToNextOption(direction) {
		const options = this.#shadowRoot.querySelectorAll("xtt-option");
		const focusedOption =
			this.#shadowRoot.querySelector("xtt-option:focus") ||
			this.#shadowRoot.querySelector("xtt-option[selected]");

		if (direction === "next") {
			const nextElement = focusedOption.nextElementSibling;
			if (nextElement) {
				nextElement.focus();
			} else {
				options[0].focus();
			}
		} else if (direction === "prev") {
			const prevElement = focusedOption.previousElementSibling;
			if (prevElement) {
				prevElement.focus();
			} else {
				options[options.length - 1].focus();
			}
		}
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
		const rect = this.#select.getBoundingClientRect();
		const popRect = this.#popoverContent.getBoundingClientRect();

		let y = rect.bottom + 8;
		let x = rect.left + rect.width / 2 - popRect.width / 2;

		const vp = 8;
		if (x < vp) {
			x = vp;
		} else if (x + popRect.width + vp > visualViewport.width) {
			x = 0 - vp;
		}

		if (y + popRect.height > visualViewport.height - vp * 2) {
			y = rect.top - visualViewport.height - 8;
		}

		updateElementStyle(
			this.#popoverContent,
			Object.assign(
				{
					top: y + "px",
					left: "",
					right: ""
				},
				{
					[x >= 0 ? "left" : "right"]: Math.abs(x) + "px",
					[y >= 0 ? "top" : "bottom"]: Math.abs(y) + "px"
				}
			)
		);
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
