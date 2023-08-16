import { xttFormElementFactory } from "../com/form.js";
import style from "./button.css" assert { type: "css" };
import { css } from "xtt-utils";
import html from "./button.html";

/**
 * @description button component
 * @slot icon - icon to display
 * @slot - text to display
 * @example <xtt-button>Button</xtt-button>
 */

export class xttButtonElement extends xttFormElementFactory("reflect") {
	static templateContent = html;
	static stylesContent = [...super.stylesContent, style];

	static get observedAttributes() {
		return [...super.observedAttributes, "line", "data-xtt-tooltip", "data-aria-type"];
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
			this.style.setProperty("--button-line-clamp", Number(newValue));
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
		let hasIcon = false;

		if (this.#iconSlot.assignedNodes()?.length) {
			this.classList.remove("no-icon");
			hasIcon = true;
		} else {
			this.classList.add("no-icon");
		}

		const testSlotChildNodes = this.#textSlot.assignedNodes();
		if (testSlotChildNodes?.length) {
			// 如果元素内部没有 slot="icon" 元素，那就判断第一个元素是否是 xtt-icon 自定义元素或者 具有 xtt-icon 类名的元素
			// 如果是，就将其设置为 slot="icon"
			if (!hasIcon) {
				let firedEl = testSlotChildNodes[0];

				// 如果第一个元素是空文本节点，就判断第二个元素，因为换行符等空白符也会被解析为文本节点，而这些文本是没有任何意义的
				if (firedEl?.nodeType === Node.TEXT_NODE && !firedEl?.textContent.trim()) {
					firedEl = testSlotChildNodes[1];
					testSlotChildNodes.shift();
				}

				if (firedEl?.tagName === "XTT-ICON" || firedEl?.classList?.has?.("xtt-icon")) {
					firedEl.slot = "icon";
					this.classList.remove("no-icon");
					testSlotChildNodes.shift();
				}
			}

			// 如果元素内部只有空白符，就当作没有内容处理
			if (testSlotChildNodes.some((el) => !!el.textContent.trim())) {
				this.classList.remove("no-text");
			} else {
				this.classList.add("no-text");
			}
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
	get #iconSlot() {
		return this.shadowRoot.getElementById("iconSlot");
	}
	get #textSlot() {
		return this.shadowRoot.getElementById("textSlot");
	}
}
