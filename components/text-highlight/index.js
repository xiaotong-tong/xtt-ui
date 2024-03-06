import { xttRelectElement } from "../com/reflect.js";
import style from "./index.css" assert { type: "css" };
import html from "./index.html";
import { uniqueNumber } from "../../utils/xtt-ui-utils.js";

export class xttTextHighLightElement extends xttRelectElement {
	static templateContent = html;
	static stylesContent = [...super.stylesContent, style];

	static get observedAttributes() {
		return ["search", "search-color"];
	}

	hlName = "xtt-highlight-" + uniqueNumber();

	connectedCallback() {
		super.connectedCallback();

		// 如果 style 元素内容为空，则设置默认样式
		if (!this.#style.textContent) {
			this.#style.textContent = `:host ::highlight(${this.hlName}) { color: hsl(45deg 100% 50%); }`;
		}

		this.#changeHighlight();
	}

	disconnectedCallback() {
		// 如果存在高亮，则删除
		if (CSS.highlights.has(this.hlName)) {
			CSS.highlights.delete(this.hlName);
		}
		super.disconnectedCallback();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "search") {
			this.search = newValue;
		} else if (name === "search-color") {
			this.searchColor = newValue;
		}

		super.attributeChangedCallback?.(name, oldValue, newValue);
	}

	_reflectElementAdded() {
		this.#changeHighlight();
	}

	get #style() {
		return this.shadowRoot.querySelector("style");
	}

	#changeHighlight() {
		if (!CSS.highlights) {
			console.error("当前环境不支持 CSS.highlights");
			return;
		}
		const childNodes = this.childNodes;

		const grep = this.#searchRegExp;
		const rangeList = [];

		childNodes.forEach((node) => {
			for (const match of node.nodeValue.matchAll(grep)) {
				const range = new Range();
				range.setStart(node, match.index);
				range.setEnd(node, match.index + match[0].length);
				rangeList.push(range);
			}
		});

		const highlight = new Highlight(...rangeList);

		CSS.highlights.set(this.hlName, highlight);
	}

	get type() {
		return this.getAttribute("type");
	}
	set type(value) {
		if (value === null) {
			this.removeAttribute("type");
			return;
		}

		if (this.type !== value) {
			this.setAttribute("type", value);
		}
	}

	get #searchRegExp() {
		return new RegExp(this.search ?? "", "g");
	}

	get search() {
		return this.getAttribute("search");
	}
	set search(value) {
		if (value === null) {
			this.removeAttribute("search");
			return;
		}

		if (this.search !== value) {
			this.setAttribute("search", value);
			this.#changeHighlight();
		}
	}

	get searchColor() {
		return this.getAttribute("search-color");
	}
	set searchColor(value) {
		if (value === null) {
			this.removeAttribute("search-color");
			return;
		}

		if (this.searchColor !== value) {
			this.setAttribute("search-color", value);
		}

		this.#style.textContent = `:host ::highlight(${this.hlName}) { color: ${value}; }`;
	}
}
