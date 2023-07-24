import { xttFormElementFactory } from "./form.js";

export class xttInputElement extends xttFormElementFactory() {
	static get observedAttributes() {
		return [...super.observedAttributes, "readonly", "maxlength", "minlength"];
	}

	focusableElement = this;

	constructor() {
		super();
	}

	connectedCallback() {
		// 内部的 input 元素触发 change 事件时，需要手动触发外部的 change 事件
		this.focusableElement.addEventListener("change", (ev) => {
			this.dispatchEvent(new Event("change"));
		});

		super.connectedCallback?.();
	}

	disconnectedCallback() {}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "readonly") {
			this.readOnly = newValue !== null;
		} else if (name === "maxlength") {
			this.maxLength = newValue;
		} else if (name === "minlength") {
			this.minLength = newValue;
		}

		super.attributeChangedCallback?.(name, oldValue, newValue);
	}

	get value() {
		return this.focusableElement.value;
	}
	set value(value) {
		this.focusableElement.value = value;
	}

	get readOnly() {
		return this.focusableElement.readOnly;
	}
	set readOnly(value) {
		this.focusableElement.readOnly = value;
	}

	get maxLength() {
		return this.focusableElement.maxLength;
	}
	set maxLength(value) {
		this.focusableElement.maxLength = value;
	}

	get minLength() {
		return this.focusableElement.minLength;
	}
	set minLength(value) {
		this.focusableElement.minLength = value;
	}
}
