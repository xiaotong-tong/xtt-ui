import { xttFormElementFactory } from "./form.js";

export class xttInputElement extends xttFormElementFactory() {
	static get observedAttributes() {
		return [...super.observedAttributes, "value", "readonly", "maxlength", "minlength", "placeholder"];
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
		} else if (name === "value") {
			this.value = newValue;
		} else if (name === "placeholder") {
			this.placeholder = newValue;
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

		if (this.getAttribute("readonly") !== value) {
			this.toggleAttribute("readonly", value);
		}
	}

	get maxLength() {
		return this.focusableElement.maxLength;
	}
	set maxLength(value) {
		if (value === null) {
			this.focusableElement.removeAttribute("maxlength");
			return;
		}
		this.focusableElement.maxLength = value;

		if (this.getAttribute("maxlength") !== value) {
			this.setAttribute("maxlength", value);
		}
	}

	get minLength() {
		return this.focusableElement.minLength;
	}
	set minLength(value) {
		if (value === null) {
			this.focusableElement.removeAttribute("minlength");
			return;
		}
		this.focusableElement.minLength = value;

		if (this.getAttribute("minlength") !== value) {
			this.setAttribute("minlength", value);
		}
	}

	get placeholder() {
		return this.focusableElement.placeholder;
	}
	set placeholder(value) {
		if (value === null) {
			this.focusableElement.removeAttribute("placeholder");
			return;
		}
		this.focusableElement.placeholder = value;

		if (this.getAttribute("placeholder") !== value) {
			this.setAttribute("placeholder", value);
		}
	}

	// 是否为块级元素
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
