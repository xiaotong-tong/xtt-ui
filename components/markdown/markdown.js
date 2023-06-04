import style from "./markdown.css" assert { type: "css" };
import highLightStyle from "../../oss/highlight/github.min.css" assert { type: "css" };
import githubMarkdownStyle from "../../oss/github-markdown-css/github-markdown.css" assert { type: "css" };
import * as marked from "../../oss/marked/marked.esm.js";
import hljs from "../../oss/highlight/highlight.js";
import { markedHighlight } from "../../oss/marked-highlight/index.esm.js";
import jsLanguage from "../../oss/highlight/languages/javascript.min.js";

hljs.registerLanguage("js", jsLanguage);

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
			return hljs.highlightAuto(code).value;
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
