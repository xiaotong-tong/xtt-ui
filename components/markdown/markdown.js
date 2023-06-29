import style from "./markdown.css" assert { type: "css" };
import highLightStyle from "highlight.js/styles/github.css" assert { type: "css" };
import githubMarkdownStyle from "github-markdown-css" assert { type: "css" };

import { marked } from "marked";
import hljs from "highlight.js/lib/core";
import { gfmHeadingId } from "marked-gfm-heading-id";
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
	mangle: false
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

marked.use(
	gfmHeadingId({
		prefix: "xtt-md-"
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
						if (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE) {
							this.#parseMarkdown(node.textContent);
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

		window.addEventListener("hashchange", this.#hashchangeEventBindThis);
	}

	disconnectedCallback() {
		this.#observer.disconnect();

		// 因为这个事件是绑定在 window 上的，所以在组件销毁时需要手动移除
		window.removeEventListener("hashchange", this.#hashchangeEventBindThis);
	}

	#parseMarkdown(content) {
		this.#body.innerHTML = marked.parse(content);
	}

	get #body() {
		return this.#shadowRoot.getElementById("body");
	}

	#hashchangeEventBindThis = this.#hashchangeEvent.bind(this);
	#hashchangeEvent() {
		// 因为标题元素是在 shadowRoot 中，在改变 hash 时，页面不会自动滚动到对应的标题元素
		// 所以需要手动滚动到对应的标题元素
		// 这里的实现方式是，监听 hashchange 事件， 获取 hash 值，然后在 shadowRoot 中查找对应的元素，获取元素的位置，然后滚动到对应的位置
		const hash = window.location.hash;
		if (hash) {
			const target = this.#body.querySelector(hash);
			if (target) {
				const rect = target.getBoundingClientRect();
				window.scrollTo({
					top: rect.top + window.scrollY - 8,
					behavior: "smooth"
				});
			}
		}
	}

	// 向外部暴露一个 headers 属性，用于获取所有的标题元素
	get headers() {
		return this.#body.querySelectorAll("h1, h2, h3, h4, h5, h6");
	}
}
