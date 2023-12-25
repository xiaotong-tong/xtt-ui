import { xttInputElement } from "../com/input.js";
import style from "./inputfield.css" assert { type: "css" };
import html from "./inputfield.html";

export class xttInputFieldElement extends xttInputElement {
	static templateContent = html;
	static stylesContent = [...super.stylesContent, style];

	// static get observedAttributes() {
	// 	return [...super.observedAttributes];
	// }

	focusableElement = this.#input;

	constructor() {
		super();
	}

	// connectedCallback() {
	// 	super.connectedCallback();
	// }

	// attributeChangedCallback(name, oldValue, newValue) {
	// 	super.attributeChangedCallback?.(name, oldValue, newValue);
	// }

	get #input() {
		return this.shadowRoot.getElementById("input");
	}

	get block() {
		return this.hasAttribute("block");
	}
	set block(value) {
		if (value) {
			this.toggleAttribute("block", true);
		} else {
			this.removeAttribute("block");
		}
	}
}
