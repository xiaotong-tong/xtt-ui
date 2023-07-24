import { xttRelectElement } from "../com/reflect.js";
import style from "./list.css" assert { type: "css" };

export class xttListElement extends xttRelectElement {
	static templateContent = `<ul id="list" part="list"><slot></slot></ul>`;
	static stylesContent = [...super.stylesContent, style];
	static observeOptions = { childList: true, subtree: true };

	static get observedAttributes() {
		return ["col-count"];
	}

	#resizeObserver;

	constructor() {
		super();

		this.#resizeObserver = new ResizeObserver((entries) => {
			for (let entry of entries) {
				this.#resize(entry.contentRect);
			}
		});
	}

	connectedCallback() {
		super.connectedCallback();
		if (this.getAttribute("col-count") === null) {
			this.#startResizeObserver();
		}
		this.querySelectorAll("xtt-list-item").forEach(this.#listItemAdded);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.#stopResizeObserver();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "col-count") {
			if (newValue === null) {
				this.#startResizeObserver();
			} else {
				this.style.setProperty("--list-col-count", Number(newValue));
				this.#stopResizeObserver();
			}
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
		let newColCount = this.#getDefaultColCount(rect.width);

		// 向外部暴露 xtt-resize事件
		// 同时暴露了一个 detail 对象，该对象有三个属性：width、now、next
		// width：当前容器的宽度
		// now：当前列数
		// next：如果不取消事件，下一次的列数
		// 外部用户可以修改 next 的值，从而改变列数
		let options = {
			width: rect.width,
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

		newColCount = Number(options.next);

		if (this.#activeColCount === newColCount) {
			return;
		}

		this.#activeColCount = newColCount;
		this.style.setProperty("--list-col-count", newColCount);
	}

	onChildrenAddedCallback = Function.prototype;
}
