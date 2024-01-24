import { xttFormElementFactory } from "../com/form.js";
import style from "./button.css" assert { type: "css" };
import { css } from "xtt-utils";
import html from "./button.html";

export class xttButtonElement extends xttFormElementFactory("reflect") {
	static templateContent = html;
	static stylesContent = [...super.stylesContent, style];

	static get observedAttributes() {
		return [...super.observedAttributes, "type", "line", "size", "block", "data-xtt-tooltip", "data-aria-type"];
	}

	observeOptions = {
		childList: true,
		subtree: true
	};

	#tooltipElement;

	constructor() {
		super();

		this.#tooltipElement = document.createElement("xtt-tooltip");
		this.#tooltipElement.textContent = this.textContent;
	}

	connectedCallback() {
		this.role = "button";

		// 如果没有显示设置 tabindex 属性，就设置为 0，让元素可以被聚焦
		if (!this.hasAttribute("tabindex")) {
			this.tabIndex = 0;
		}

		super.connectedCallback();

		this.#appendTooltip();

		this.#contentChanged();
	}

	disconnectedCallback() {
		super.disconnectedCallback();

		// 在元素被移除时，将 tooltip 也移除
		this.#tooltipElement.remove();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "disabled") {
			this.tabIndex = newValue !== null ? -1 : 0;
		} else if (name === "data-xtt-tooltip") {
			this.#tooltipElement.refreshTooltipContent(this);
		} else if (name === "line") {
			this.line = newValue;
		}

		super.attributeChangedCallback?.(name, oldValue, newValue);
	}

	#appendTooltip() {
		(this.closest("body") || this.getRootNode()).appendChild(this.#tooltipElement);

		// 如果 button 内部的文本内容超出了 button 的宽度，就显示 tooltip
		// 否则就阻止 tooltip 的显示
		// 如果 button 上显示设置了 data-xtt-tooltip 属性，就不进行阻止判断行为
		this.addEventListener("xtt-tooltip-show", (ev) => {
			if (this.dataset.xttTooltip) {
				return;
			}

			const span = document.createElement("span");

			this.#text
				.querySelector("slot")
				.assignedNodes()
				.forEach((node) => {
					span.appendChild(node.cloneNode(true));
				});

			css(span, {
				position: "absolute",
				top: "-9999px",
				left: "-9999px",
				"font-size": css(this.#text, "font-size"),
				"max-width": this.#text.getBoundingClientRect().width + 0.5 + "px",
				"padding-inline-start": css(this.#text, "padding-inline-start"),
				"padding-inline-end": css(this.#text, "padding-inline-end"),
				"padding-block-start": css(this.#text, "padding-block-start"),
				"padding-block-end": css(this.#text, "padding-block-end"),
				"border-inline-start-width": css(this.#text, "border-inline-start-width"),
				"border-inline-end-width": css(this.#text, "border-inline-end-width"),
				"border-block-start-width": css(this.#text, "border-block-start-width"),
				"border-block-end-width": css(this.#text, "border-block-end-width"),
				"box-sizing": "border-box",
				"text-align": "start"
			});

			this.appendChild(span);

			if (span.offsetHeight <= this.#text.offsetHeight) {
				ev.preventDefault();
			}

			span.remove();
		});

		this.#tooltipElement.initTrigger(this);
	}

	_reflectElementAdded() {
		this.#contentChanged();
	}
	_reflectElementRemoved() {
		this.#contentChanged();
	}

	#contentChanged() {
		if (!this.dataset.xttTooltip) {
			this.#tooltipElement.textContent = this.textContent;
		}
	}

	get #text() {
		return this.shadowRoot.getElementById("text");
	}

	get line() {
		return Number(this.getAttribute("line"));
	}
	set line(value) {
		if (value === null) {
			this.removeAttribute("line");
			this.style.removeProperty("--button-line-clamp");
			return;
		}

		value = Number(value);

		if (isNaN(value)) {
			throw new TypeError("line must be a number or null");
		}

		this.style.setProperty("--button-line-clamp", value);

		if (this.line !== value) {
			this.setAttribute("line", value);
		}
	}

	get type() {
		return this.getAttribute("type");
	}
	set type(value) {
		if (value === null) {
			this.removeAttribute("type");
			return;
		}

		if (this.type !== value) {
			this.setAttribute("type", value);
		}
	}

	get size() {
		return this.getAttribute("size");
	}
	set size(value) {
		if (value === null) {
			this.removeAttribute("size");
			return;
		}

		if (this.size !== value) {
			this.setAttribute("size", value);
		}
	}

	get block() {
		return this.hasAttribute("block");
	}
	set block(value) {
		if (value) {
			if (this.block !== true) {
				this.toggleAttribute("block", true);
			}
		} else {
			this.removeAttribute("block");
		}
	}

	get rtl() {
		return super.rtl;
	}
	set rtl(value) {
		if (value) {
			this.#text.dir = "rtl";
		} else {
			this.#text.removeAttribute("dir");
		}

		super.rtl = value;
	}
}
