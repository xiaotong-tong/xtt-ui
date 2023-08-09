import { xttRelectElement } from "../com/reflect.js";
import style from "./markdown.css" assert { type: "css" };
import highLightStyle from "highlight.js/styles/github.css" assert { type: "css" };
import highLightStyleOfDark from "highlight.js/styles/github-dark.css" assert { type: "css" };
import githubMarkdownStyle from "github-markdown-css" assert { type: "css" };

import { marked } from "marked";
import hljs from "highlight.js/lib/core";
import { gfmHeadingId } from "marked-gfm-heading-id";
import { markedHighlight } from "marked-highlight";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import plaintext from "highlight.js/lib/languages/plaintext";
import diff from "highlight.js/lib/languages/diff";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("js", javascript);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("plaintext", plaintext);
hljs.registerLanguage("diff", diff);

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
			let resCode = hljs.highlight(code, { language });
			// 添加代码块前的行号
			resCode = resCode.value
				.split("\n")
				.map((line, index) => {
					return `<span class="code-line" data-line-num="${index + 1}">${line}</span>`;
				})
				.join("\n");
			return resCode;
		}
	})
);

marked.use(
	gfmHeadingId({
		prefix: "xtt-md-"
	})
);

export class xttMarkdownElement extends xttRelectElement {
	static templateContent = `<div id="body" part="body" class="markdown-body"></div>`;
	static stylesContent = [...super.stylesContent, highLightStyle, githubMarkdownStyle, style];

	static get observedAttributes() {
		return ["dark"];
	}

	#parsed = "";

	connectedCallback() {
		super.connectedCallback();

		this.#parseMarkdown(this.textContent);

		window.addEventListener("hashchange", this.#hashchangeEventBindThis);
	}

	disconnectedCallback() {
		super.disconnectedCallback();

		// 因为这个事件是绑定在 window 上的，所以在组件销毁时需要手动移除
		window.removeEventListener("hashchange", this.#hashchangeEventBindThis);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "dark") {
			if (newValue !== null) {
				this.shadowRoot.adoptedStyleSheets.push(highLightStyleOfDark);
			} else {
				this.shadowRoot.adoptedStyleSheets.pop();
			}
		}
	}

	_reflectElementAdded() {
		this.#parseMarkdown(this.textContent);
	}
	_reflectElementRemoved() {
		this.#parseMarkdown(this.textContent);
	}

	#parseMarkdown(content) {
		this.#parsed = marked.parse(content);
		this.#body.innerHTML = this.#parsed;
	}

	get #body() {
		return this.shadowRoot.getElementById("body");
	}

	#hashchangeEventBindThis = this.#hashchangeEvent.bind(this);
	#hashchangeEvent() {
		// 因为标题元素是在 shadowRoot 中，在改变 hash 时，页面不会自动滚动到对应的标题元素
		// 所以需要手动滚动到对应的标题元素
		// 这里的实现方式是，监听 hashchange 事件， 获取 hash 值，然后在 shadowRoot 中查找对应的元素，然后滚动到对应的位置
		const hash = window.location.hash;
		if (hash) {
			const target = this.#body.querySelector(hash);

			target?.scrollIntoView({
				behavior: "smooth"
			});
		}
	}

	// 向外部暴露一个 headers 属性，用于获取所有的标题元素
	get headers() {
		return this.#body.querySelectorAll("h1, h2, h3, h4, h5, h6");
	}

	get parsed() {
		return this.#parsed;
	}

	get abstract() {
		return this.#body.textContent;
	}
}
