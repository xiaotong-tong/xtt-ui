import { xttInputElement } from "../com/input.js";
import style from "./numberfield.css" assert { type: "css" };
import html from "./numberfield.html";

export class xttNumberFieldElement extends xttInputElement {
	static templateContent = html;
	static stylesContent = [...super.stylesContent, style];

	static get observedAttributes() {
		return [...super.observedAttributes, "min", "max", "step"];
	}

	focusableElement = this.#input;

	constructor() {
		super();
	}

	connectedCallback() {
		super.connectedCallback();

		this.#spinButtonEvent();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "min") {
			this.min = newValue;
		} else if (name === "max") {
			this.max = newValue;
		} else if (name === "step") {
			this.step = newValue;
		}

		super.attributeChangedCallback?.(name, oldValue, newValue);
	}

	#spinButtonEvent() {
		// 加减按钮在聚焦时，让 input 聚焦，而不是加减按钮聚焦
		this.#minus.addEventListener("focus", () => {
			this.#input.focus();
		});
		this.#plus.addEventListener("focus", () => {
			this.#input.focus();
		});

		this.#minus.addEventListener("click", () => {
			let value = this.value;
			value -= this.step || 1;

			if (value < this.min) {
				value = this.min;
			}
			this.value = value;
		});

		this.#plus.addEventListener("click", () => {
			let value = this.value;
			value += this.step || 1;

			if (value > this.max) {
				value = this.max;
			}
			this.value = value;
		});
	}

	get #input() {
		return this.shadowRoot.getElementById("input");
	}
	get #minus() {
		return this.shadowRoot.getElementById("minus");
	}
	get #plus() {
		return this.shadowRoot.getElementById("plus");
	}

	get value() {
		return Number(super.value);
	}
	set value(value) {
		super.value = value;
	}

	get min() {
		return Number(this.#input.min);
	}
	set min(value) {
		this.#input.min = value;
	}

	get max() {
		return Number(this.#input.max);
	}
	set max(value) {
		this.#input.max = value;
	}

	get step() {
		return Number(this.#input.step);
	}
	set step(value) {
		this.#input.step = value;
	}
}
