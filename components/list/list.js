import { xttRelectElement } from "../com/reflect.js";
import style from "./list.css" assert { type: "css" };

export class xttListElement extends xttRelectElement {
	static templateContent = `<ul id="list" part="list"><slot></slot></ul>`;
	static stylesContent = [...super.stylesContent, style];
	static observeOptions = { childList: true, subtree: true };

	static get observedAttributes() {
		return ["cols"];
	}

	#resizeObserver;

	constructor() {
		super();

		this.#resizeObserver = new ResizeObserver((entries) => {
			for (let entry of entries) {
				this.#resize(entry.borderBoxSize[0]);
			}
		});
	}

	connectedCallback() {
		super.connectedCallback();

		// 如果没有设置 cols 属性，则默认使用响应式布局
		if (this.cols === null) {
			this.#startResizeObserver();
		}
		this.querySelectorAll("xtt-list-item").forEach(this.#listItemAdded);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.#stopResizeObserver();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "cols") {
			this.cols = newValue;
		}
	}

	_reflectElementAdded(node) {
		if (node?.tagName === "XTT-LIST-ITEM") {
			this.#listItemAdded(node);
		}
		this.onChildrenAddedCallback(node);
	}

	#listItemAdded = (item) => {
		item.role = "listitem";
	};

	#resizeObserverStarted = false;
	#startResizeObserver() {
		if (!this.#resizeObserverStarted) {
			this.#resizeObserver.observe(this.#list);
			this.#resizeObserverStarted = true;

			// 启动响应式布局时自动触发一次 resize 函数，以便初始化列数
			this.#resize(this.#list.getBoundingClientRect());
		}
	}
	#stopResizeObserver() {
		if (this.#resizeObserverStarted) {
			this.#resizeObserver.disconnect();
			this.#resizeObserverStarted = false;
		}
	}

	get #list() {
		return this.shadowRoot.getElementById("list");
	}

	#activeColCount = 0;
	#getDefaultColCount(width) {
		if (width >= 1200) {
			return 6;
		} else if (width >= 800) {
			return 4;
		} else if (width >= 500) {
			return 3;
		} else if (width >= 200) {
			return 2;
		} else {
			return 1;
		}
	}

	#resize(rect) {
		const inlineSize = rect.inlineSize || rect.width;
		let newColCount = this.#getDefaultColCount(inlineSize);

		// 向外部暴露 xtt-resize事件
		// 同时暴露了一个 detail 对象，该对象有三个属性：width、now、next
		// width：当前容器的宽度
		// now：当前列数
		// next：如果不取消事件，下一次的列数
		// 外部用户可以修改 next 的值，从而改变列数
		let options = {
			width: inlineSize,
			now: this.#activeColCount,
			next: newColCount
		};
		const isCancel = this.dispatchEvent(
			new CustomEvent("xtt-resize", {
				detail: options,
				bubbles: false,
				cancelable: true
			})
		);

		if (!isCancel) {
			return false;
		}

		newColCount = parseInt(options.next);

		if (this.#activeColCount === newColCount) {
			return;
		}

		this.#activeColCount = newColCount;
		this.style.setProperty("--list-col-count", newColCount);
	}

	onChildrenAddedCallback = Function.prototype;

	get cols() {
		return this.getAttribute("cols");
	}
	set cols(value) {
		if (value === null || value === 0 || value === "") {
			// 如果取消 cols 属性，则使用响应式布局
			this.removeAttribute("cols");
			this.#startResizeObserver();
			return;
		}

		if (this.cols !== value) {
			// 如果设置了 cols 属性，则取消响应式布局，使用 cols 设置的列数
			this.setAttribute("cols", value);
		}

		this.style.setProperty("--list-col-count", value);
		this.#stopResizeObserver();
	}
}
