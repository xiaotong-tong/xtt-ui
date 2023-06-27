import style from "./button.css" assert { type: "css" };
import { updateElementStyle } from "../../utils/xtt-ui-utils.js";

/**
 * @description button component
 * @slot icon - icon to display
 * @slot - text to display
 * @example <xtt-button>Button</xtt-button>
 */

export class xttButtonElement extends HTMLElement {
	static templateContent = `
        <button id="button" part="button">
          <span part="icon" id="icon" aria-hidden="true"><slot name="icon"></slot></span>
          <span part="text" id="text">
            <slot></slot>
          </span>
        </button>`;

	template() {
		const template = document.createElement("template");
		template.innerHTML = xttButtonElement.templateContent;

		return template.content.cloneNode(true);
	}

	static get observedAttributes() {
		return ["disabled", "data-xtt-tooltip", "clamp"];
	}

	#shadowRoot;
	#tooltipElement;

	constructor() {
		super();

		this.#shadowRoot = this.attachShadow({ mode: "open" });
		this.#shadowRoot.adoptedStyleSheets = [style];
		this.#shadowRoot.appendChild(this.template());

		this.#tooltipElement = document.createElement("xtt-tooltip");
		this.#tooltipElement.textContent = this.textContent;

		this.#shadowRoot.appendChild(this.#tooltipElement);
		this.#tooltipElement.initTrigger(this.#button);

		// 如果 button 内部的文本内容超出了 button 的宽度，就显示 tooltip
		// 否则就阻止 tooltip 的显示
		// 如果 button 上显示设置了 data-xtt-tooltip 属性，就不进行阻止判断行为
		this.#button.addEventListener("xtt-tooltip-show", (ev) => {
			if (this.#button.dataset.xttTooltip) {
				return;
			}

			const span = document.createElement("span");

			this.#text
				.querySelector("slot")
				.assignedNodes()
				.forEach((node) => {
					span.appendChild(node.cloneNode(true));
				});

			updateElementStyle(span, {
				position: "absolute",
				top: "-9999px",
				left: "-9999px",
				"font-size": window.getComputedStyle(this.#text).fontSize,
				"max-width": this.#text.offsetWidth + "px"
			});

			this.#button.appendChild(span);

			if (span.offsetHeight <= this.#text.offsetHeight) {
				ev.preventDefault();
			}

			span.remove();
		});
	}

	connectedCallback() {
		let hasIcon = false,
			hasText = false;
		if (this.hasChildNodes()) {
			for (const el of this.childNodes) {
				if (el.slot === "icon" || el.classList?.has("xtt-icon") || el.tagName === "XTT-ICON") {
					hasIcon = true;
					el.slot = "icon";
				} else {
					hasText = true;
				}

				if (hasIcon && hasText) {
					break;
				}
			}
		}
		if (!hasIcon) {
			this.#button.classList.add("no-icon");
		}
		if (!hasText) {
			this.#button.classList.add("no-text");
		}
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "disabled") {
			this.#button.disabled = newValue !== null;
		} else if (name === "data-xtt-tooltip") {
			this.#button.dataset.xttTooltip = newValue;
		} else if (name === "clamp") {
			this.style.setProperty("--button-line-clamp", Number(newValue));
		}
	}

	get #button() {
		return this.#shadowRoot.getElementById("button");
	}
	get #icon() {
		return this.#shadowRoot.getElementById("icon");
	}
	get #text() {
		return this.#shadowRoot.getElementById("text");
	}

	get disabled() {
		return this.#button.disabled;
	}
	set disabled(value) {
		if (value) {
			this.setAttribute("disabled", "");
		} else {
			this.removeAttribute("disabled");
		}
	}
}
