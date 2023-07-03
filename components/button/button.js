import { xttRelectElement } from "../com/reflect.js";
import style from "./button.css" assert { type: "css" };
import { updateElementStyle } from "../../utils/xtt-ui-utils.js";
import html from "./button.html";

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

		this.shadowRoot.appendChild(this.#tooltipElement);

		// 如果 button 内部的文本内容超出了 button 的宽度，就显示 tooltip
		// 否则就阻止 tooltip 的显示
		// 如果 button 上显示设置了 data-xtt-tooltip 属性，就不进行阻止判断行为
		this.#button.addEventListener("xtt-tooltip-show", (ev) => {
			if (this.#button.dataset.xttTooltip) {
				return;
			}

			const span = document.createElement("span");

			this.#text
				.querySelector("slot")
				.assignedNodes()
				.forEach((node) => {
					span.appendChild(node.cloneNode(true));
				});

			updateElementStyle(span, {
				position: "absolute",
				top: "-9999px",
				left: "-9999px",
				"font-size": window.getComputedStyle(this.#text).fontSize,
				"max-width": this.#text.offsetWidth + "px"
			});

			this.#button.appendChild(span);

			if (span.offsetHeight <= this.#text.offsetHeight) {
				ev.preventDefault();
			}

			span.remove();
		});
	}

	connectedCallback() {
		super.connectedCallback();

		if (!this.hasAttribute("tabindex")) {
			this.tabIndex = 0;
		}

		this.#contentChanged();

		this.#tooltipElement.initTrigger(this.#button);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "disabled") {
			this.#button.disabled = newValue !== null;
			this.tabIndex = newValue !== null ? -1 : 0;
		} else if (name === "data-xtt-tooltip" || name === "data-aria-type") {
			this.#button.setAttribute(name, newValue);
		} else if (name === "line") {
			this.style.setProperty("--button-line-clamp", Number(newValue));
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
			this.#button.classList.remove("no-icon", "no-text");
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
			this.#button.classList.add("no-icon");
		}
		if (!hasText) {
			this.#button.classList.add("no-text");
		}
		this.#tooltipElement.textContent = this.textContent;
	}

	get #button() {
		return this.shadowRoot.getElementById("button");
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
}
