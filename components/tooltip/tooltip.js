import style from "./tooltip.css" assert { type: "css" };
import { updateElementStyle } from "../../utils/xtt-ui-utils.js";

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

	// 给 tooltip 添加唯一 ID 值，供无障碍使用
	// 触发 tooltip 的元素需要添加 aria-describedby 属性，值为 tooltip 的 ID
	// 不添加的话无障碍设备无法访问到 tooltip 的内容，仅为视觉显示，不符合无障碍要求
	// TODO 在组件完善之后应该有一个统一管理 id 的代码分配函数，而不是交由各个组件单独管理
	/** @type {number} */
	static #uId = 0;
	/** @param {HTMLElement} element */
	static #uniqueId(element) {
		if (!element.id) {
			element.id = "xttTooltipId" + ++this.#uId;
		}
		return element;
	}

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
		xttTooltipElement.#uniqueId(this);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "for") {
			this.initTrigger(document.querySelectorAll(newValue));
		}
	}

	get #popover() {
		return this.#shadowRoot.getElementById("popover");
	}

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
			this.hide();
		};

		el.addEventListener("mouseenter", (ev) => {
			showEvent(ev);
		});
		el.addEventListener("mouseleave", () => {
			hideEvent();
		});
		el.addEventListener("focus", (ev) => {
			showEvent(ev);

			el.addEventListener(
				"blur",
				() => {
					hideEvent();
				},
				{
					once: true
				}
			);
		});
	}

	#refreshTrigger(el) {
		el.setAttribute("aria-describedby", xttTooltipElement.#uniqueId(this).id);
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
