import style from "./tooltip.css" assert { type: "css" };

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

	static templateContent = `
        <dialog id="dialog" role="presentation" part="dialog">
          <div id="content" part="content"></div>
          <div id="pointer" part="pointer"></div>
        </dialog>`;

	template() {
		const template = document.createElement("template");
		template.innerHTML = xttTooltipElement.templateContent;

		return template.content.cloneNode(true);
	}

	static get observedAttributes() {
		return ["direction", "for"];
	}

	#shadowRoot;

	constructor() {
		super();

		this.#shadowRoot = this.attachShadow({ mode: "open" });
		this.#shadowRoot.adoptedStyleSheets = [style];
		this.#shadowRoot.appendChild(this.template());
	}

	connectedCallback() {
		this.setAttribute("role", "tooltip");
		xttTooltipElement.#uniqueId(this);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "direction") {
			this.#dialog.dataset.direction = newValue;
		} else if (name === "for") {
			this.initTrigger(document.querySelectorAll(newValue));
		}
	}

	get #dialog() {
		return this.#shadowRoot.getElementById("dialog");
	}
	get #content() {
		return this.#shadowRoot.getElementById("content");
	}
	get #pointer() {
		return this.#shadowRoot.getElementById("pointer");
	}

	#handleEventOfTrigger(el) {
		const tooltipDirection = el.dataset.xttTooltipDirection;

		const showEvent = (ev) => {
			this.show(ev.currentTarget ?? ev.target, tooltipDirection);
		};
		const closeEvent = () => {
			this.close();
		};

		el.addEventListener("mouseenter", (ev) => {
			showEvent(ev);
		});
		el.addEventListener("mouseleave", (ev) => {
			closeEvent();
		});
		el.addEventListener("focus", (ev) => {
			showEvent(ev);

			el.addEventListener(
				"blur",
				(ev) => {
					closeEvent();
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
	show(toElement, direction) {
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

		this.#content.textContent =
			toElement.dataset.xttTooltip ?? this.textContent;

		// 因为 dialog.show() 会改变 focus 焦点的位置，所以这里使用添加 open 属性来切换显示与隐藏
		// 而不是使用 this.#dialog.show();
		this.#dialog.toggleAttribute("open", true);
		this.#dialog.style.clipPath = "inset(50% 50% 50% 50%)";

		this.#showTimer = setTimeout(() => {
			this.#dialog.style.clipPath = "";
			this.#changePosition(toElement, direction);
		}, this.delay ?? 0);
	}
	close() {
		if (this.#showTimer) {
			clearTimeout(this.#showTimer);
			this.#showTimer = null;
		}
		if (!this.#dialog.open) {
			return false;
		}
		this.#dialog?.close();
	}

	#changePosition(toElement, direction) {
		const rect = toElement.getBoundingClientRect();
		const dialogRect = this.#dialog.getBoundingClientRect();

		let top;
		let left;

		top = rect.top - dialogRect.height - 8;
		left = rect.left + rect.width / 2 - dialogRect.width / 2;

		const vp = this.viewPadding;
		if (left < vp) {
			left = vp;
		} else if (left + dialogRect.width + vp > visualViewport.width) {
			left = visualViewport.width - vp - dialogRect.width;
		}
		this.#dialog.style.top = top + "px";
		this.#dialog.style.left = left + "px";
	}
}
