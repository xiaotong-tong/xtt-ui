import style from "./code.css" assert { type: "css" };
import highlight from "../../../oss/highlight/highlight.js";
import highLightStyle from "../../../oss/highlight/github.min.css" assert { type: "css" };
import html from "../../../oss/highlight/languages/xml.min.js";
import { trimLineStart } from "../../../oss/xtt-utils/index.esm.js";

highlight.registerLanguage("html", html);

export class xttCodeElement extends HTMLElement {
	static templateContent = `
        <figure id="figure" part="figure">
          <pre id="pre"><code id="code" class="language-html"></code></pre>
        </figure>`;

	template() {
		const template = document.createElement("template");
		template.innerHTML = xttCodeElement.templateContent;

		return template.content.cloneNode(true);
	}

	#shadowRoot;

	constructor() {
		super();

		this.#shadowRoot = this.attachShadow({ mode: "open" });
		this.#shadowRoot.adoptedStyleSheets = [style, highLightStyle];
		this.#shadowRoot.appendChild(this.template());
	}

	connectedCallback() {
		const content = trimLineStart(this.innerHTML, {
			removeFirstEmptyLine: true,
			removeLastEmptyLine: true
		}).replaceAll(/\<|\>|script type="none"/g, (char) => {
			switch (char) {
				case "<":
					return "&lt;";
				case ">":
					return "&gt;";
				case 'script type="none"': // remove type="none" from script tag
					return "script";
			}
		});

		this.#code.innerHTML = content;
		this.innerHTML = "";
		highlight.highlightElement(this.#code);
		this.style.display = "block";
	}

	get #code() {
		return this.#shadowRoot.getElementById("code");
	}
}
