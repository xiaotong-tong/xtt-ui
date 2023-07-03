import { xttRelectElement } from "../com/reflect.js";
import style from "./page-nav.css" assert { type: "css" };

export class xttPageNavElement extends xttRelectElement {
	static templateContent = `<nav id="nav" part="nav"><slot></slot></nav>`;
	static stylesContent = [style];

	static get observedAttributes() {
		return [];
	}

	connectedCallback() {
		super.connectedCallback();

		if (this.querySelector("xtt-list") !== null) {
			this.#contentChange(this.querySelector("xtt-list"));
		}
	}

	attributeChangedCallback(name, oldValue, newValue) {}

	_reflectElementNodeAdded(node) {
		this.#contentChange(node);
	}

	get #nav() {
		return this.shadowRoot.getElementById("nav");
	}

	#contentChange(el) {
		if (el.tagName === "XTT-LIST") {
			el.setAttribute("col-count", "1");
		}
	}
}
