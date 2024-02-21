import { xttBaseElement } from "../com/base.js";
import style from "./text.css" assert { type: "css" };

export class xttTextElement extends xttBaseElement {
	static templateContent = `<slot></slot>`;
	static stylesContent = [...super.stylesContent, style];

	static get observedAttributes() {
		return [];
	}

	attributeChangedCallback(name, oldValue, newValue) {}

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
}
