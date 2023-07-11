import { xttBaseElement } from "../com/base.js";
import style from "./text-edit.css" assert { type: "css" };
import { css } from "xtt-utils";
import spanHtml from "./text-edit-span.html";

export class xttTextEditElement extends xttBaseElement {
	static templateContent = "<slot></slot>";
	static stylesContent = [style];
	static observeOptions = { childList: true };

	static get observedAttributes() {
		return ["readonly", "rows", "autosize", "maxlength", "minlength"];
	}

	constructor() {
		super();
	}

	connectedCallback() {
		this.toggleAttribute("contenteditable", "plaintext-only");
		this.tabIndex = 1;
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "readonly") {
			this.removeAttribute("contenteditable");
		} else if (name === "rows") {
			this.#contentHeight(newValue);
		}
	}

	#contentHeight = (newValue) => {
		const textarea = this;
		const hiddenTextarea = document.createElement("div");
		this.shadowRoot.appendChild(hiddenTextarea);

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

		hiddenTextarea.innerHTML = spanHtml;

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
}
