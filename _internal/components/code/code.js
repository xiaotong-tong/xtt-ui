import style from "./code.css" assert { type: "css" };
import highLightStyle from "highlight.js/styles/github.css" assert { type: "css" };

import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import { trimLineStart } from "xtt-utils";

hljs.registerLanguage("html", xml);

export class xttCodeElement extends HTMLElement {
	static templateContent = `
        <figure id="figure" part="figure">
		  <details id="details" part="details">
			<summary id="summary" part="summary">示例代码</summary>
            <pre id="pre"><code id="code" class="language-html" tabindex="0"></code></pre>
		  </details>
        </figure>`;

	template() {
		const template = document.createElement("template");
		template.innerHTML = xttCodeElement.templateContent;

		return template.content.cloneNode(true);
	}

	static get observedAttributes() {
		return ["open"];
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
		}).replaceAll(/\<|\>|=""|script type="none"/g, (char) => {
			switch (char) {
				case "<":
					return "&lt;";
				case ">":
					return "&gt;";
				case '=""': // remove ="" from tag
					return "";
				case 'script type="none"': // remove type="none" from script tag
					return "script";
			}
		});

		this.#code.innerHTML = content;
		this.innerHTML = "";
		hljs.highlightElement(this.#code, { language: "html" });
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "open") {
			this.#details.open = newValue !== null;
		}
	}

	get #code() {
		return this.#shadowRoot.getElementById("code");
	}
	get #details() {
		return this.#shadowRoot.getElementById("details");
	}
}
