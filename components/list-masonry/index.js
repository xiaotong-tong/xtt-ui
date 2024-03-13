import { xttRelectElement } from "../com/reflect.js";
import style from "./index.css" assert { type: "css" };
import html from "./index.html";
import { css } from "xtt-utils";

export class xttListMasonryElement extends xttRelectElement {
	static templateContent = html;
	static stylesContent = [...super.stylesContent, style];
	static observeOptions = { childList: true, subtree: true };

	static get observedAttributes() {
		return ["cols"];
	}

	columnGap = 8;
	rowGap = 8;

	colHeights = [];

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

		this.#resizeObserver.observe(this.#list);

		// 启动响应式布局时自动触发一次 resize 函数，以便初始化列数
		this.#resize(this.#list.getBoundingClientRect());

		this.querySelectorAll("xtt-list-item").forEach(this.#listItemAdded);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.#resizeObserver.disconnect();
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
		this.#initItem(item);
	};

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
			return 4;
		} else if (width >= 200) {
			return 2;
		} else {
			return 2;
		}
	}

	#init() {
		const items = this.querySelectorAll("xtt-list-item");
		const colCount = this.#activeColCount || this.cols;
		this.colHeights = Array(colCount).fill(0);

		items.forEach((item) => {
			this.#initItem(item);
		});
	}

	#initItem(item) {
		const rect = this.#list.getBoundingClientRect();
		const inlineSize = rect.inlineSize || rect.width;

		const colCount = this.#activeColCount || this.cols;
		const colHeights = this.colHeights;
		const minIndex = colHeights.indexOf(Math.min(...colHeights));
		const min = colHeights[minIndex];

		const itemWidth = (inlineSize - this.columnGap * (colCount - 1)) / colCount; // (100% - 列间距总和) / 列数
		css(item, {
			width: itemWidth + "px",
			transform: `translateY(${min}px) translateX(${minIndex * (itemWidth + this.columnGap)}px`
		});

		colHeights[minIndex] += item.offsetHeight + this.rowGap;

		this.#list.style.height = colHeights.reduce((a, b) => Math.max(a, b)) + "px";
	}

	#resize(rect) {
		const inlineSize = rect.inlineSize || rect.width;
		let newColCount = this.#getDefaultColCount(inlineSize);

		// 向外部暴露 xtt-resize事件
		// 同时暴露了一个 detail 对象，该对象有三个属性：width、now、next
		// width：当前容器的宽度
		// now：当前列数
		// next：下一次的列数
		// 外部用户可以修改 next 的值，从而改变列数
		let options = {
			width: inlineSize,
			now: this.#activeColCount,
			next: newColCount
		};
		this.dispatchEvent(
			new CustomEvent("xtt-resize", {
				detail: options,
				bubbles: false,
				cancelable: true
			})
		);

		this.#activeColCount = parseInt(options.next);
		this.#init();
	}

	onChildrenAddedCallback = Function.prototype;

	get cols() {
		return this.getAttribute("cols");
	}
	set cols(value) {
		if (value === null || value === 0 || value === "") {
			this.removeAttribute("cols");
			return;
		}

		if (this.cols !== value) {
			this.setAttribute("cols", value);
		}
	}
}
