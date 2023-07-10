import { xttBaseElement } from "../com/base.js";
import style from "./textarea.css" assert { type: "css" };
import html from "./textarea.html";
import { css } from "xtt-utils";

export class xttTextareaElement extends xttBaseElement {
	static templateContent = html;
	static stylesContent = [style];
	static observeOptions = { childList: true, subtree: true };

	static get observedAttributes() {
		return ["readonly", "rows", "autosize", "maxlength", "minlength"];
	}

	constructor() {
		super();
	}

	connectedCallback() {
		this.#textarea.value = this.textContent;
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "rows") {
			this.#textarea.rows = newValue;
		} else if (name === "autosize") {
			this.#textarea.removeAttribute("rows");
			this.#autoResize(newValue !== null);
		} else if (name === "readonly") {
			this.#textarea.readOnly = newValue !== null;
		}
	}

	get #textarea() {
		return this.shadowRoot.querySelector("textarea");
	}

	#autoResize = (added) => {
		const autoResizeHandler = () => {
			css(this.#textarea, "height", this.#textAreaHeight() + "px");
		};
		if (added) {
			this.#textarea.addEventListener("input", autoResizeHandler);
			autoResizeHandler();
		} else {
			this.#textarea.removeEventListener("input", autoResizeHandler);
		}
	};

	#textAreaHeight = () => {
		const textarea = this.#textarea;
		const hiddenTextarea = document.createElement("textarea");
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
			width: css(textarea, "width"),
			"box-sizing": css(textarea, "box-sizing"),

			position: "absolute",
			top: "-9999px",
			left: "-9999px",
			visibility: "hidden",
			height: 0
		});

		hiddenTextarea.value = textarea.value;

		const borderSize =
			parseInt(css(textarea, "border-block-start-width")) + parseInt(css(textarea, "border-block-end-width"));

		const height = hiddenTextarea.scrollHeight + borderSize;

		hiddenTextarea.remove();

		return height;
	};
}
