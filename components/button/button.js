import style from "./button.css" assert { type: "css" };

customElements.define(
	"xtt-button",
	class xttButtonElement extends HTMLElement {
		static templateContent = `
        <button id="button" part="button">
          <span part="icon" id="icon"><slot name="icon"></slot></span>
          <span part="text" id="text">
            <slot></slot>
          </span>
        </button>`;

		static template() {
			const template = document.createElement("template");
			template.innerHTML = this.templateContent;

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
			this.#shadowRoot.appendChild(xttButtonElement.template());
		}

		connectedCallback() {
			if (!this.querySelector("[slot='icon']")) {
				const icon = document.querySelector("xtt-icon");
				if (icon) {
					icon.slot = "icon";
				} else {
					this.#button.classList.add("no-icon");
				}
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
);
