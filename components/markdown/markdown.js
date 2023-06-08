import style from "./markdown.css" assert { type: "css" };
import highLightStyle from "highlight.js/styles/github.css" assert { type: "css" };
import githubMarkdownStyle from "github-markdown-css" assert { type: "css" };

import { marked } from "marked";
import hljs from "highlight.js/lib/core";
import { markedHighlight } from "marked-highlight";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import plaintext from "highlight.js/lib/languages/plaintext";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("js", javascript);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("plaintext", plaintext);

marked.setOptions({
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: false,
	smartLists: true,
	smartypants: false,
	mangle: false,
	headerIds: false
});

marked.use(
	markedHighlight({
		langPrefix: "hljs language-",
		highlight(code, lang) {
			const language = hljs.getLanguage(lang) ? lang : "plaintext";
			return hljs.highlight(code, { language }).value;
		}
	})
);

export class xttMarkdownElement extends HTMLElement {
	static templateContent = `<div id="body" part="body" class="markdown-body"></div>`;

	template() {
		const template = document.createElement("template");
		template.innerHTML = xttMarkdownElement.templateContent;

		return template.content.cloneNode(true);
	}

	#shadowRoot;
	#observer;

	constructor() {
		super();

		this.#shadowRoot = this.attachShadow({ mode: "open" });
		this.#shadowRoot.adoptedStyleSheets = [style, highLightStyle, githubMarkdownStyle];
		this.#shadowRoot.appendChild(this.template());

		this.#observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.type === "childList") {
					mutation.addedNodes.forEach((node) => {
						if (node.nodeType === Node.TEXT_NODE) {
							this.#parseMarkdown(node.textContent);
						} else if (node.nodeType === Node.ELEMENT_NODE) {
							this.#parseMarkdown(node.innerHTML);
						}
					});
				}
			});
		});
	}

	connectedCallback() {
		this.#observer.observe(this, {
			childList: true
		});
		this.#parseMarkdown(this.textContent);
	}

	#parseMarkdown(content) {
		this.#body.innerHTML = marked.parse(content);
	}

	get #body() {
		return this.#shadowRoot.getElementById("body");
	}
}
