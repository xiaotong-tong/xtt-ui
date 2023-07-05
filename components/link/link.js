import { xttBaseElement } from "../com/base.js";
import style from "./link.css" assert { type: "css" };

export class xttLinkElement extends xttBaseElement {
	static templateContent = `<a id="link" part="link"><slot></slot></a>`;
	static stylesContent = [style];

	static get observedAttributes() {
		return ["href", "target", "download"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.#link[name] = newValue;
	}

	get #link() {
		return this.shadowRoot.getElementById("link");
	}

	get href() {
		return this.#link.href;
	}
	set href(value) {
		this.#link.href = value;
		this.setAttribute("href", value);
	}
	get origin() {
		return this.#link.origin;
	}
	get pathname() {
		return this.#link.pathname;
	}
	set pathname(value) {
		this.#link.pathname = value;
	}
	get search() {
		return this.#link.search;
	}
	set search(value) {
		this.#link.search = value;
	}
	toString() {
		return this.#link.toString();
	}
}
