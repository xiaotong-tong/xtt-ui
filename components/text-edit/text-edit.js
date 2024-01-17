import { xttFormElementFactory } from "../com/form.js";
import style from "./text-edit.css" assert { type: "css" };
import { css } from "xtt-utils";

export class xttTextEditElement extends xttFormElementFactory() {
	static templateContent = "<slot></slot>";
	static stylesContent = [...super.stylesContent, style];
	static observeOptions = { childList: true };

	static get observedAttributes() {
		return [...super.observedAttributes, "rows", "autosize", "readonly"];
	}

	focusableElement = this;

	constructor() {
		super();
	}

	connectedCallback() {
		super.connectedCallback();

		if (!(this.hasAttribute("readonly") || this.hasAttribute("disabled"))) {
			this.contentEditable = "plaintext-only";

			// 如果没有设置 tabindex 属性，那么就设置为 1
			if (!this.hasAttribute("tabindex")) {
				this.tabIndex = 1;
			}
		}
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "readonly") {
			if (newValue !== null) {
				this.contentEditable = false;
			} else {
				this.contentEditable = "plaintext-only";
			}
		} else if (name === "rows") {
			this.#contentHeight(newValue);
		}

		super.attributeChangedCallback?.(name, oldValue, newValue);
	}

	#contentHeight = (newValue) => {
		const textarea = this;
		const hiddenTextarea = document.createElement("div");

		css(hiddenTextarea, {
			"letter-spacing": css(textarea, "letter-spacing"),
			"line-height": css(textarea, "line-height"),
			"font-family": css(textarea, "font-family"),
			"font-size": css(textarea, "font-size"),
			"font-weight": css(textarea, "font-weight"),
			"padding-block-start": css(textarea, "padding-block-start"),
			"padding-block-end": css(textarea, "padding-block-end"),
			"padding-inline-start": css(textarea, "padding-inline-start"),
			"padding-inline-end": css(textarea, "padding-inline-end"),
			"border-block-start-width": css(textarea, "border-block-start-width"),
			"border-block-end-width": css(textarea, "border-block-end-width"),
			"white-space": "pre-wrap",

			"box-sizing": css(textarea, "box-sizing"),

			position: "absolute",
			top: "-9999px",
			left: "-9999px",
			visibility: "hidden",
			width: "100px",
			display: "-webkit-box",
			"-webkit-box-orient": "vertical",
			"-webkit-line-clamp": newValue,
			overflow: "hidden"
		});

		this.shadowRoot.appendChild(hiddenTextarea);

		hiddenTextarea.innerHTML = "lorem ipsum".repeat(100);

		const borderSize =
			parseInt(css(textarea, "border-block-start-width")) + parseInt(css(textarea, "border-block-end-width"));

		const height = hiddenTextarea.offsetHeight + borderSize;

		hiddenTextarea.remove();

		this.style.height = height + "px";
	};

	get value() {
		return this.textContent;
	}
	set value(value) {
		this.textContent = value;
	}

	get disabled() {
		return super.disabled;
	}
	set disabled(value) {
		super.disabled = value;
		this.tabIndex = value ? -1 : 1;

		if (value) {
			this.contentEditable = false;
		} else {
			this.contentEditable = "plaintext-only";
		}
	}
}
