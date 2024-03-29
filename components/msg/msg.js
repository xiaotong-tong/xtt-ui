import { xttRelectElement } from "../com/reflect.js";
import html from "./msg.html";
import style from "./msg.css" assert { type: "css" };
import { replace } from "xtt-msg";

export class xttMsgElement extends xttRelectElement {
	static templateContent = html;
	static stylesContent = [...super.stylesContent, style];

	constructor() {
		super();
	}

	connectedCallback() {
		super.connectedCallback();

		this.#doShowText();
	}

	_reflectElementAdded() {
		this.#doShowText();
	}
	_reflectElementRemoved() {
		this.#doShowText();
	}

	async #doShowText() {
		const text = this.textContent;
		if (!text) {
			return;
		}
		this.#body.innerHTML = await replace(text);
	}

	get #body() {
		return this.shadowRoot.getElementById("body");
	}
}
