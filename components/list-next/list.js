import { xttRelectElement } from "../com/reflect.js";
import style from "./list.css" assert { type: "css" };
import { css } from "xtt-utils";

export class xttListNextElement extends xttRelectElement {
	static templateContent = `
    <div type="container" id="container">
        <ul id="list" part="list"><slot></slot></ul>
    </div>`;
	static stylesContent = [style];
	static observeOptions = { childList: true, subtree: true };

	static get observedAttributes() {
		return ["col-count"];
	}

	constructor() {
		super();
	}

	connectedCallback() {
		super.connectedCallback();

		this.querySelectorAll("xtt-list-item").forEach(this.#listItemAdded);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "col-count") {
			this.colCount = newValue;
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

	get colCount() {
		return Number(css(this, "--list-col-count") || css(this.#list, "--default-col-count"));
	}

	set colCount(value) {
		if (value) {
			css(this, "--list-col-count", Number(value));
		} else {
			css(this, "--list-col-count", null);
		}
	}
}
