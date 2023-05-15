/**
 * @description button component
 * @slot icon - icon to display
 * @slot - text to display
 * @example <xtt-button>Button</xtt-button>
 */

import style from "./button.css" assert { type: "css" };

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
		return ["disabled"];
	}

	#shadowRoot;

	constructor() {
		super();

		this.#shadowRoot = this.attachShadow({ mode: "open" });
		this.#shadowRoot.adoptedStyleSheets = [style];
		this.#shadowRoot.appendChild(this.template());
	}

	connectedCallback() {
		let hasIcon = false,
			hasText = false;
		if (this.hasChildNodes()) {
			for (const el of this.childNodes) {
				if (
					el.slot === "icon" ||
					el.classList?.has("xtt-icon") ||
					el.tagName === "XTT-ICON"
				) {
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
