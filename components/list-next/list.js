import { xttRelectElement } from "../com/reflect.js";
import style from "./list.css" assert { type: "css" };
import { css } from "xtt-utils";

export class xttListNextElement extends xttRelectElement {
	static templateContent = `
    <div type="container" id="container">
        <ul id="list" part="list"><slot></slot></ul>
    </div>`;
	static stylesContent = [...super.stylesContent, style];
	static observeOptions = { childList: true, subtree: true };

	static get observedAttributes() {
		return ["cols"];
	}

	constructor() {
		super();
	}

	connectedCallback() {
		super.connectedCallback();

		this.querySelectorAll("xtt-list-item").forEach(this.#listItemAdded);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "cols") {
			this.cols = newValue;
		}
	}

	_reflectElementAdded(node) {
		if (node?.tagName === "XTT-LIST-ITEM") {
			this.#listItemAdded(node);
		}
		this.onChildrenAddedCallback(node);
	}

	#listItemAdded = (item) => {
		item.role = "listitem";
	};

	get #list() {
		return this.shadowRoot.querySelector("#list");
	}

	onChildrenAddedCallback = Function.prototype;

	get cols() {
		return this.getAttribute("cols") || Number(css(this.#list, "--default-col-count"));
	}
	set cols(value) {
		if (value === null || value === 0 || value === "") {
			this.removeAttribute("cols");
			return;
		}

		if (this.cols !== value) {
			this.setAttribute("cols", value);
		}

		css(this, "--list-col-count", value);
	}
}
