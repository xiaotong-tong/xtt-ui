import { xttBaseElement } from "../com/base.js";
import style from "./link.css" assert { type: "css" };

export class xttLinkElement extends xttBaseElement {
	static templateContent = `<a id="link" part="button"><slot></slot></a>`;
	static stylesContent = [style];

	static get observedAttributes() {
		return ["href", "target", "download"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "href") {
			this.#link.href = newValue;
		}
	}

	get #link() {
		return this.shadowRoot.getElementById("link");
	}
}
