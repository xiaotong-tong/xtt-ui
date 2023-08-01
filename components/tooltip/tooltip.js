import { xttBaseElement } from "../com/base.js";
import style from "./tooltip.css" assert { type: "css" };
import html from "./tooltip.html";
import { uniqueId, attrValueAppendIds } from "../../utils/xtt-ui-utils.js";
import { displayPopover } from "../../utils/displayPopover.js";

export class xttTooltipElement extends xttBaseElement {
	static templateContent = html;
	static stylesContent = [...super.stylesContent, style];

	/**
	 * 页面的留白边距，tooltip 框不会超出这个距离
	 * @type {number}
	 */
	viewPadding = 8;

	/**
	 * 事件触发到 tooltip 显示之间的等待时间(ms)
	 * @type {number}
	 */
	delay = 600;

	static get observedAttributes() {
		return ["for"];
	}

	connectedCallback() {
		this.role = "tooltip";
		this.textContent = this.textContent.trim();
		uniqueId(this);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "for") {
			this.initTrigger(document.querySelectorAll(newValue));
		}
	}

	get #popover() {
		return this.shadowRoot.getElementById("popover");
	}
	get #content() {
		return this.shadowRoot.getElementById("content");
	}
	get #arrow() {
		return this.shadowRoot.getElementById("arrow");
	}

	#popoverMouseEventAdded = false;
	#mouseOnPopoverOrTrigger = false;

	/** @param {HTMLElement} el */
	#handleEventOfTrigger(el) {
		const hideEvent = (ev, isRe) => {
			if (ev?.type === "mouseleave" && !isRe) {
				// mouseleave 事件需要 setTimeout 延后一下，因为需要确认是否会触发 mouseenter
				// 主要是为了保证从 target 上移动到 tooltip 上时 tooltip 不会关闭
				setTimeout(() => {
					hideEvent(ev, true);
				}, 0);
				return;
			}

			if (ev?.type !== "mouseleave" || !this.#mouseOnPopoverOrTrigger) {
				this.hide();

				// 清除绑定的关闭行为相关的事件，防止多次绑定 以及长期绑定造成多余的绑定浪费
				el.removeEventListener("pointerdown", hideEvent, {
					once: true
				});
				el.removeEventListener("keydown", hideEvent, {
					once: true
				});
				el.removeEventListener("blur", hideEvent, {
					once: true
				});
				document.removeEventListener("scroll", hideEvent, {
					once: true
				});
			}
		};

		const showEvent = (ev) => {
			this.show(ev.currentTarget ?? ev.target);

			el.addEventListener("pointerdown", hideEvent, {
				once: true
			});
			el.addEventListener("keydown", hideEvent, {
				once: true
			});
			el.addEventListener("blur", hideEvent, {
				once: true
			});
			document.addEventListener("scroll", hideEvent, {
				once: true
			});
		};

		el.addEventListener("mouseenter", (ev) => {
			this.#mouseOnPopoverOrTrigger = true;
			showEvent(ev);
		});
		el.addEventListener("mouseleave", (ev) => {
			this.#mouseOnPopoverOrTrigger = false;
			hideEvent(ev);
		});
		el.addEventListener("focus", showEvent);

		if (!this.#popoverMouseEventAdded) {
			this.#popover.addEventListener("mouseenter", () => {
				this.#mouseOnPopoverOrTrigger = true;
			});
			this.#popover.addEventListener("mouseleave", (ev) => {
				this.#mouseOnPopoverOrTrigger = false;
				hideEvent(ev);
			});
			this.#popoverMouseEventAdded = true;
		}
	}

	/** @param {HTMLElement} el */
	#refreshTrigger(el) {
		// 给触发 tooltip 的元素添加 aria 属性，值为 tooltip 的 ID, 供无障碍设备访问 tooltip 的内容
		// 如果元素上有 data-aria-type 属性，且值为 labelledby，那么使用 aria-labelledby 属性，否则使用 aria-describedby 属性
		const referenceType = el.dataset.ariaType === "labelledby" ? "aria-labelledby" : "aria-describedby";
		attrValueAppendIds(el, referenceType, this);

		this.#handleEventOfTrigger(el);
		el.xttTooltipElement = this;
	}
	initTrigger(elements) {
		if (elements instanceof NodeList || Array.isArray(elements)) {
			elements.forEach(this.#refreshTrigger, this);
		} else if (elements?.nodeType === 1) {
			this.#refreshTrigger(elements);
		}
	}

	refreshTooltipContent(el) {
		if (el.dataset.xttTooltip) {
			this.textContent = el.dataset.xttTooltip;
		}
	}

	#showTimer;
	show(toElement) {
		if (this.#popover.hasAttribute("open")) {
			return false;
		}

		// 向外部暴露 xtt-tooltip-show 事件，如果使用者监听事件并调用了 event.preventDefault()，那么直接返回，阻止之后的 show 方法运行。
		const isCancel = toElement.dispatchEvent(
			new CustomEvent("xtt-tooltip-show", {
				detail: {
					tooltip: this
				},
				bubbles: false,
				cancelable: true
			})
		);

		if (!isCancel) {
			return false;
		}

		this.refreshTooltipContent(toElement);

		displayPopover(toElement, this.#popover, ["block-start", "block-end"]);

		this.#showTimer = setTimeout(() => {
			this.#popover.setAttribute("open", true);
		}, this.delay ?? 16);
	}
	hide() {
		if (this.#showTimer) {
			clearTimeout(this.#showTimer);
			this.#showTimer = null;
		}

		this.#popover.removeAttribute("open");
	}

	get textContent() {
		return this.#content.textContent || super.textContent;
	}
	set textContent(value) {
		this.#content.textContent = value;
		this.ariaLabel = value.trim();
	}
}
