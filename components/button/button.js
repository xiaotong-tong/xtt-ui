import { xttRelectElement } from "../com/reflect.js";
import style from "./button.css" assert { type: "css" };
import { css } from "xtt-utils";
import html from "./button.html";
import { attrValueAppendIds } from "../../utils/xtt-ui-utils.js";

/**
 * @description button component
 * @slot icon - icon to display
 * @slot - text to display
 * @example <xtt-button>Button</xtt-button>
 */

export class xttButtonElement extends xttRelectElement {
	static templateContent = html;
	static stylesContent = [style];

	static get observedAttributes() {
		return ["disabled", "line", "data-xtt-tooltip", "data-aria-type"];
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
		super.connectedCallback();

		this.role = "button";

		if (!this.hasAttribute("tabindex")) {
			this.tabIndex = 0;
		}

		this.#appendTooltip();

		this.#contentChanged();

		this.#addA11yWithLabel();

		if (this.hasAttribute("autofocus")) {
			this.focus();
		}
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "disabled") {
			this.tabIndex = newValue !== null ? -1 : 0;
		} else if (name === "data-xtt-tooltip") {
			this.#tooltipElement.refreshTooltipContent(this);
		} else if (name === "line") {
			this.style.setProperty("--button-line-clamp", Number(newValue));
		}
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

	#addA11yWithLabel() {
		let labels = Array.from(this.labels);

		if (labels.length) {
			attrValueAppendIds(this, "aria-labelledby", labels);
		}
	}

	_reflectElementAdded() {
		this.#contentChanged();
	}
	_reflectElementRemoved() {
		this.#contentChanged();
	}

	#contentChanged() {
		let hasIcon = false,
			hasText = false;

		if (this.hasChildNodes()) {
			this.classList.remove("no-icon", "no-text");
			const childNodes = this.childNodes;

			if (this.querySelector(':scope > [slot="icon"]')) {
				hasIcon = true;
			} else {
				// 如果元素内部没有 slot="icon" 元素，那就判断第一个元素是否是 xtt-icon 自定义元素或者 具有 xtt-icon 类名的元素
				// 如果是，就将其设置为 slot="icon"
				let el = childNodes[0];

				// 如果第一个元素是空文本节点，就判断第二个元素，因为换行符等空白符也会被解析为文本节点，而这些文本是没有任何意义的
				if (el?.nodeType === Node.TEXT_NODE && !el?.textContent.trim()) {
					el = childNodes[1];
				}

				if (el?.tagName === "XTT-ICON" || el?.classList?.has?.("xtt-icon")) {
					hasIcon = true;
					el.slot = "icon";
				}
			}

			for (const el of childNodes) {
				if (el.slot !== "icon" && el.textContent.trim()) {
					hasText = true;
					break;
				}
			}
		}
		if (!hasIcon) {
			this.classList.add("no-icon");
		}
		if (!hasText) {
			this.classList.add("no-text");
		}
		if (!this.dataset.xttTooltip) {
			this.#tooltipElement.textContent = this.textContent;
		}
	}

	get #icon() {
		return this.shadowRoot.getElementById("icon");
	}
	get #text() {
		return this.shadowRoot.getElementById("text");
	}

	get disabled() {
		return this.hasAttribute("disabled");
	}
	set disabled(value) {
		this.toggleAttribute("disabled", value);
	}
	get labels() {
		if (this.id) {
			// 为了防止误查找，这里只查找和 xtt-button 处于同一个 shadowRoot 下的 label
			return this.getRootNode().querySelectorAll(`label[for="${this.id}"]`);
		} else {
			// 返回一个空的 NodeList
			return document.createElement(null).childNodes;
		}
	}
}
