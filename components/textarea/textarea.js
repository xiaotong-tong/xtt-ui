import { xttInputElement } from "../com/input.js";
import style from "./textarea.css" assert { type: "css" };
import html from "./textarea.html";
import { css } from "xtt-utils";

export class xttTextareaElement extends xttInputElement {
	static templateContent = html;
	static stylesContent = [...super.stylesContent, style];

	static get observedAttributes() {
		return [...super.observedAttributes, "rows", "autosize"];
	}

	focusableElement = this.#textarea;

	constructor() {
		super();
	}

	#autosizeWhenConnected = false;

	connectedCallback() {
		super.connectedCallback();

		this.value = this.textContent;

		if (this.#autosizeWhenConnected) {
			this.#autoResize(true);
		}
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "rows") {
			this.rows = newValue;
		} else if (name === "autosize") {
			// 如果还没有连接到DOM，那么就先记录下来，等连接到DOM后再执行
			// 因为在没有连接到DOM的时候，无法获取正确获取的 textarea 的一些 css 样式
			// 在计算高度的时候，会出现错误
			if (this.isConnected === false) {
				this.#autosizeWhenConnected = newValue !== null;
				return;
			}
			this.#autoResize(newValue !== null);
		}

		super.attributeChangedCallback?.(name, oldValue, newValue);
	}

	get #textarea() {
		return this.shadowRoot.getElementById("textarea");
	}

	#autoResize = (added) => {
		const autoResizeHandler = () => {
			css(this.#textarea, "height", this.#textAreaHeight() + "px");
		};
		if (added) {
			this.#textarea.removeEventListener("input", autoResizeHandler);
			this.#textarea.addEventListener("input", autoResizeHandler);
			autoResizeHandler();
		} else {
			this.#textarea.removeEventListener("input", autoResizeHandler);
			css(this.#textarea, "height", "");
		}
	};

	#textAreaHeight = () => {
		const textarea = this.#textarea;
		const hiddenTextarea = document.createElement("textarea");

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
			width: textarea.clientWidth + "px",
			"box-sizing": css(textarea, "box-sizing"),

			position: "absolute",
			top: "-9999px",
			left: "-9999px",
			visibility: "hidden",
			height: 0,
			overflow: "hidden"
		});

		this.shadowRoot.appendChild(hiddenTextarea);

		hiddenTextarea.value = textarea.value;

		let borderSize =
			parseInt(css(textarea, "border-block-start-width")) + parseInt(css(textarea, "border-block-end-width"));

		if (isNaN(borderSize)) {
			borderSize = 0;
		}

		let height = hiddenTextarea.scrollHeight + borderSize;

		if (height === 0) {
			hiddenTextarea.value = "1";
			height = hiddenTextarea.scrollHeight + borderSize;
		}

		hiddenTextarea.remove();

		return height;
	};

	get value() {
		return super.value;
	}
	set value(value) {
		super.value = value;

		this.#textarea.textContent = value;
		this.textContent = value;

		if (this.getAttribute("autosize") !== null) {
			this.#autoResize(true);
		}
	}

	get rows() {
		return Number(this.#textarea.rows);
	}
	set rows(value) {
		if (value === null) {
			this.#textarea.removeAttribute("rows");
			this.removeAttribute("rows");
			return;
		}

		value = Number(value);

		if (this.rows !== value) {
			this.#textarea.rows = value;
			this.setAttribute("rows", value);
		}
	}

	get autosize() {
		return this.hasAttribute("autosize");
	}
	set autosize(value) {
		if (value === null || value === false) {
			this.removeAttribute("autosize");
			this.#autoResize(false);
			return;
		}

		if (this.autosize !== value) {
			this.setAttribute("autosize", "");
		}

		// 如果还没有连接到DOM，那么就先记录下来，等连接到DOM后再执行
		// 因为在没有连接到DOM的时候，无法获取正确获取的 textarea 的一些 css 样式
		// 在计算高度的时候，会出现错误
		if (this.isConnected === false) {
			this.#autosizeWhenConnected = newValue !== null;
			return;
		}
		this.#autoResize(true);
	}
}
