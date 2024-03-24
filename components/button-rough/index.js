import { xttButtonElement } from "../button/button.js";
import style from "./index.css" assert { type: "css" };
import html from "./index.html";
import rough from "roughjs/bundled/rough.esm.js";

export class xttButtonRoughElement extends xttButtonElement {
	static templateContent = html;
	static stylesContent = [...super.stylesContent, style];

	#resizeObserver;

	constructor() {
		super();

		// 当元素尺寸发生变化时，重新设置 svg 内容
		this.#resizeObserver = new ResizeObserver((entries) => {
			for (let entry of entries) {
				this.#setSvgContent();
			}
		});
	}

	connectedCallback() {
		super.connectedCallback();

		this.#setSvgContent();
		this.#resizeObserver.observe(this);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.#resizeObserver.disconnect();
	}

	get #svg() {
		return this.shadowRoot.getElementById("svg");
	}

	#setSvgContent() {
		const ract = this.getBoundingClientRect();
		this.#svg.setAttribute("viewBox", `0 0 ${ract.width} ${ract.height}`);

		const rc = rough.svg(this.#svg);
		let path = rc.rectangle(0, 0, ract.width, ract.height, {
			stroke: "var(--button-border-color)",
			strokeWidth: "var(--button-border-width)"
		});
		this.#svg.replaceChildren(path);
	}

	// get block() {
	// 	return super.block;
	// }
	// set block(value) {
	// 	super.block = value;

	// 	// 当 block 属性发生变化时，重新设置 svg 内容
	// 	this.#setSvgContent();
	// }
}
