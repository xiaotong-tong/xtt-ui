import { xttRelectElement } from "../com/reflect.js";
import style from "./index.css" assert { type: "css" };
import { uniqueNumber } from "../../utils/xtt-ui-utils.js";

export class xttTextHighLightElement extends xttRelectElement {
	static templateContent = `<slot></slot>`;
	static stylesContent = [...super.stylesContent, style];

	static get observedAttributes() {
		return ["search"];
	}

	hlName;

	connectedCallback() {
		super.connectedCallback();

		this.hlName = "xtt-highlight-" + uniqueNumber();

		const sheet = new CSSStyleSheet();
		sheet.replaceSync(`:host ::highlight(${this.hlName}) { color: var(--hl-highlight-color, #ce9178); }`);
		shadow.adoptedStyleSheets.push(sheet);

		this.#changeHighlight();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "search") {
			this.search = newValue;
		}

		super.attributeChangedCallback?.(name, oldValue, newValue);
	}

	_reflectElementAdded() {
		this.#changeHighlight();
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
}
