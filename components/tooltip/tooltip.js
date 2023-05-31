import style from "./tooltip.css" assert { type: "css" };
import { updateElementStyle, uniqueId } from "../../utils/xtt-ui-utils.js";

export class xttTooltipElement extends HTMLElement {
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

	static templateContent = `<div id="popover" part="popover"></div>`;

	template() {
		const template = document.createElement("template");
		template.innerHTML = xttTooltipElement.templateContent;

		return template.content.cloneNode(true);
	}

	static get observedAttributes() {
		return ["for"];
	}

	#shadowRoot;

	constructor() {
		super();

		this.#shadowRoot = this.attachShadow({ mode: "open" });
		this.#shadowRoot.adoptedStyleSheets = [style];
		this.#shadowRoot.appendChild(this.template());
	}

	connectedCallback() {
		this.role = "tooltip";
		uniqueId(this);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "for") {
			this.initTrigger(document.querySelectorAll(newValue));
		}
	}

	get #popover() {
		return this.#shadowRoot.getElementById("popover");
	}

	#popoverMouseEventAdded = false;
	#mouseOnPopoverOrTrigger = false;

	#handleEventOfTrigger(el) {
		const showEvent = (ev) => {
			this.show(ev.currentTarget ?? ev.target);

			el.addEventListener(
				"pointerdown",
				() => {
					this.hide();
				},
				{
					once: true
				}
			);
			el.addEventListener(
				"keydown",
				() => {
					this.hide();
				},
				{
					once: true
				}
			);
		};
		const hideEvent = () => {
			setTimeout(() => {
				if (!this.#mouseOnPopoverOrTrigger) {
					this.hide();
				}
			}, 0);
		};

		el.addEventListener("mouseenter", (ev) => {
			this.#mouseOnPopoverOrTrigger = true;
			showEvent(ev);
		});
		el.addEventListener("mouseleave", () => {
			this.#mouseOnPopoverOrTrigger = false;
			hideEvent();
		});
		el.addEventListener("focus", (ev) => {
			showEvent(ev);

			el.addEventListener(
				"blur",
				() => {
					this.hide();
				},
				{
					once: true
				}
			);
		});

		if (!this.#popoverMouseEventAdded) {
			this.#popover.addEventListener("mouseenter", () => {
				this.#mouseOnPopoverOrTrigger = true;
			});
			this.#popover.addEventListener("mouseleave", () => {
				this.#mouseOnPopoverOrTrigger = false;
				hideEvent();
			});
			this.#popoverMouseEventAdded = true;
		}
	}

	#refreshTrigger(el) {
		// 给触发 tooltip 的元素添加 aria-describedby 属性，值为 tooltip 的 ID
		// 供无障碍设备访问 tooltip 的内容
		// TODO aria-describedby 内容可以包含多个 ID，用空格分隔，但是这里只能包含一个，会删除已有的内容，需要改进
		el.setAttribute("aria-describedby", uniqueId(this).id);
		this.#handleEventOfTrigger(el);
	}
	initTrigger(elements) {
		if (elements instanceof NodeList) {
			elements.forEach(this.#refreshTrigger, this);
		} else if (elements?.nodeType === 1) {
			this.#refreshTrigger(elements);
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

		this.#popover.textContent = toElement.dataset.xttTooltip ?? this.textContent;

		this.#changePosition(toElement);

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

	#changePosition(toElement) {
		const rect = toElement.getBoundingClientRect();
		const popRect = this.#popover.getBoundingClientRect();

		let y = rect.top - popRect.height - 8;
		let x = rect.left + rect.width / 2 - popRect.width / 2;

		const vp = this.viewPadding;
		if (x < vp) {
			x = vp;
		} else if (x + popRect.width + vp > visualViewport.width) {
			x = 0 - vp;
		}

		updateElementStyle(
			this.#popover,
			Object.assign(
				{
					top: y + "px",
					left: "",
					right: ""
				},
				{
					[x >= 0 ? "left" : "right"]: Math.abs(x) + "px"
				}
			)
		);
	}
}
