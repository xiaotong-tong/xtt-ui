import baseStyle from "./base.css" assert { type: "css" };

export class xttBaseElement extends HTMLElement {
	static stylesContent = [baseStyle];

	#template() {
		const template = document.createElement("template");
		template.innerHTML = this.constructor.templateContent;

		return template.content.cloneNode(true);
	}

	constructor() {
		super();

		const shadowRoot = this.attachShadow({ mode: "open" });

		shadowRoot.adoptedStyleSheets = this.constructor.stylesContent;

		if (this.constructor.templateContent) {
			shadowRoot.appendChild(this.#template());
		}
	}
}
