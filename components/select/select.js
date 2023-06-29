import style from "./select.css" assert { type: "css" };
import { updateElementStyle } from "../../utils/xtt-ui-utils.js";

export class xttSelectElement extends HTMLElement {
	static templateContent = `
    <xtt-button id="select" type="base" part="select">
        <xtt-icon id="icon" icon="chevronDown" part="icon"></xtt-icon>
        <span id="text" part="text"></span>
    </xtt-button>
    <div id="popover">
        <div id="popoverContent"></div>
    </div>
    `;

	template() {
		const template = document.createElement("template");
		template.innerHTML = xttSelectElement.templateContent;

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

		this.#select.addEventListener("click", () => {
			this.#showPopover();
		});
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

	#showPopover() {
		this.#initPopoverElement();

		this.#popover.setAttribute("open", "");

		this.#changePopoverPosition();
	}
	#closePopover() {
		this.#popover.removeAttribute("open");
		this.#popoverContent.innerHTML = "";
	}

	#initPopoverElement() {
		const options = this.querySelectorAll("option");

		options.forEach((option) => {
			const optionElement = document.createElement("xtt-option");

			// 为了更方便的获取原始的option元素
			optionElement._originalOption = option;

			optionElement.toggleAttribute("selected", option.hasAttribute("selected"));
			optionElement.setAttribute("value", option.value);

			optionElement.textContent = option.getAttribute("label") || option.textContent;

			this.#popoverContent.appendChild(optionElement);
		});

		this.#handleEventOfPopover();
	}

	#handleEventOfPopover() {
		const wrapperElement = this.#popoverContent;

		wrapperElement.addEventListener("click", (ev) => {
			const target = ev.target;
			if (target.tagName === "XTT-OPTION") {
				this.#changeEventOfSelect(target._originalOption);
			}

			this.#closePopover();
		});
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
