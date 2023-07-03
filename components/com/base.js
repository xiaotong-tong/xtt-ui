export class xttBaseElement extends HTMLElement {
	#template() {
		const template = document.createElement("template");
		template.innerHTML = this.constructor.templateContent;

		return template.content.cloneNode(true);
	}

	constructor() {
		super();

		const shadowRoot = this.attachShadow({ mode: "open" });

		if (this.constructor.stylesContent) {
			shadowRoot.adoptedStyleSheets = this.constructor.stylesContent;
		}

		if (this.constructor.templateContent) {
			shadowRoot.appendChild(this.#template());
		}
	}
}
