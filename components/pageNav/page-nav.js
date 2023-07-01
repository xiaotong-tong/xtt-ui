import style from "./page-nav.css" assert { type: "css" };

export class xttPageNavElement extends HTMLElement {
	static templateContent = `<nav id="nav" part="nav"><slot></slot></nav>`;

	template() {
		const template = document.createElement("template");
		template.innerHTML = xttPageNavElement.templateContent;

		return template.content.cloneNode(true);
	}

	static get observedAttributes() {
		return [];
	}

	#shadowRoot;

	constructor() {
		super();

		this.#shadowRoot = this.attachShadow({ mode: "open" });
		this.#shadowRoot.adoptedStyleSheets = [style];
		this.#shadowRoot.appendChild(this.template());
	}

	connectedCallback() {}

	attributeChangedCallback(name, oldValue, newValue) {}

	get #nav() {
		return this.#shadowRoot.getElementById("nav");
	}
}
