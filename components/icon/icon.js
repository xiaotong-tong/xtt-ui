import style from "./icon.css" assert { type: "css" };
import { powerIcon } from "./icons/power.js";

export class xttIconElement extends HTMLElement {
	static templateContent = `<slot></slot>`;

	template() {
		const template = document.createElement("template");
		template.innerHTML = xttIconElement.templateContent;

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
		this.style.setProperty("--icon-size", window.getComputedStyle(this).fontSize || "24px");
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "icon") {
			if (newValue === "power") {
				this.innerHTML = powerIcon;
			}
		}
	}
}
