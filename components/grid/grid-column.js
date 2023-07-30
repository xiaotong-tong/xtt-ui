import { xttRelectElement } from "../com/reflect.js";
import style from "./grid.css" assert { type: "css" };

export class xttGridColumnElement extends xttRelectElement {
	static templateContent = `<div id="column" part="column"><slot></slot></div>`;
	static stylesContent = [...super.stylesContent, style];
	static observeOptions = { childList: true, subtree: true };

	static get observedAttributes() {
		return [];
	}

	constructor() {
		super();
	}

	connectedCallback() {
		super.connectedCallback();
	}

	disconnectedCallback() {
		super.disconnectedCallback();
	}

	attributeChangedCallback(name, oldValue, newValue) {}

	_reflectElementAdded(node) {}

	get #column() {
		return this.shadowRoot.getElementById("column");
	}

	get name() {
		return this.getAttribute("name");
	}

	get width() {
		const width = this.getAttribute("width");

		if (width === null) {
			return "auto";
		}

		return Number.isNaN(width) ? width : `${width}px`;
	}

	get label() {
		return this.getAttribute("label");
	}
}
