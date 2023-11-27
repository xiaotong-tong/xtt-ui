import { xttFormElementFactory } from "../com/form.js";
import style from "./icon-button.css" assert { type: "css" };
import html from "./icon-button.html";

export class xttIconButtonElement extends xttFormElementFactory() {
	static templateContent = html;
	static stylesContent = [...super.stylesContent, style];

	static get observedAttributes() {
		return [
			...super.observedAttributes,
			"data-xtt-tooltip",
			"data-aria-type"
		];
	}

	#tooltipElement;

	constructor() {
		super();

		this.#tooltipElement = document.createElement("xtt-tooltip");
	}

	connectedCallback() {
		this.role = "button";

		// 如果没有显示设置 tabindex 属性，就设置为 0，让元素可以被聚焦
		if (!this.hasAttribute("tabindex")) {
			this.tabIndex = 0;
		}

		super.connectedCallback();

		this.#appendTooltip();
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
			this.xttTooltip = newValue;
		}

		super.attributeChangedCallback?.(name, oldValue, newValue);
	}

	#appendTooltip() {
		(this.closest("body") || this.getRootNode()).appendChild(
			this.#tooltipElement
		);

		this.#tooltipElement.initTrigger(this);
	}

	get xttTooltip() {
		return this.getAttribute("data-xtt-tooltip");
	}

	set xttTooltip(value) {
		if (value === null) {
			return this.removeAttribute("data-xtt-tooltip");
		}

		if (this.xttTooltip !== value) {
			this.setAttribute("data-xtt-tooltip", value);
		}
		this.#tooltipElement.refreshTooltipContent(this);
	}
}
