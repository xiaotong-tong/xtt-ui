import { xttBaseElement } from "../com/base.js";
import style from "./input.css" assert { type: "css" };
import html from "./input.html";

export class xttInputElement extends xttBaseElement {
	static templateContent = html;
	static stylesContent = [style];

	static get observedAttributes() {
		return ["readonly", "maxlength", "minlength"];
	}

	constructor() {
		super();
	}

	connectedCallback() {}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "readonly") {
			this.#input.readOnly = newValue !== null;
		}
	}

	get #input() {
		return this.shadowRoot.getElementById("input");
	}

	get value() {
		return this.#input.value;
	}
	set value(value) {
		this.#input.value = value;
	}
}
