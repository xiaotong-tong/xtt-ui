import style from "./link.css" assert { type: "css" };

export class xttLinkElement extends HTMLElement {
	static templateContent = `<a id="link" part="button"><slot></slot></a>`;

	template() {
		const template = document.createElement("template");
		template.innerHTML = xttLinkElement.templateContent;

		return template.content.cloneNode(true);
	}

	static get observedAttributes() {
		return ["href", "target", "download"];
	}

	#shadowRoot;

	constructor() {
		super();

		this.#shadowRoot = this.attachShadow({ mode: "open" });
		this.#shadowRoot.adoptedStyleSheets = [style];
		this.#shadowRoot.appendChild(this.template());
	}

	connectedCallback() {}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "href") {
			this.#link.href = newValue;
		}
	}

	get #link() {
		return this.#shadowRoot.getElementById("link");
	}
}
