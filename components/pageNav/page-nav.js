import { xttRelectElement } from "../com/reflect.js";
import style from "./page-nav.css" assert { type: "css" };

export class xttPageNavElement extends xttRelectElement {
	static templateContent = `<nav id="nav" part="nav"><slot></slot></nav>`;
	static stylesContent = [style];
	static observeOptions = { childList: true, subtree: true };

	static get observedAttributes() {
		return [];
	}

	connectedCallback() {
		super.connectedCallback();

		this.querySelectorAll("xtt-list").forEach((el) => {
			this.#contentChange(el);
		});
	}

	attributeChangedCallback(name, oldValue, newValue) {}

	_reflectElementNodeAdded(node) {
		this.#contentChange(node);
	}

	get #nav() {
		return this.shadowRoot.getElementById("nav");
	}

	#contentChange(el) {
		if (el.tagName === "XTT-LIST") {
			el.setAttribute("col-count", "1");

			const parent = el.parentElement.closest("xtt-list,xtt-page-nav");

			if (!parent.dataset.xttLevel) {
				el.dataset.xttLevel = "1";
			} else {
				el.dataset.xttLevel = `${parseInt(parent.dataset.xttLevel) + 1}`;
			}

			// // 猜测是因为 xtt-list-item 是 xtt-list 元素的子元素, 内部样式会被 shadow-root 隔离，所以直接在 xtt-page-nav 中设置样式无法作用在 xtt-list-item 上
			// // 所以这里新建一个 style 元素，将样式写入到 xtt-list 元素的 shadow-root 中，这样就可以作用到 xtt-list-item 上了
			// el.style.setProperty("--xtt-level", el.dataset.xttLevel);
			// const style = document.createElement("style");
			// style.textContent = `
			// 	::slotted(xtt-list-item:hover) {
			// 		background-color: hsl(215, 33%, 95%);
			// 	}
			// 	:host([data-xtt-level]) ::slotted(xtt-list-item) {
			// 		padding-inline-start: calc(var(--xtt-level, 1) * 16px);
			// 	}
			// `;
			// el.shadowRoot.appendChild(style);

			el.onChildrenAddedCallback = (node) => {
				if (node.tagName === "XTT-LIST-ITEM") {
					el.querySelectorAll("xtt-link").forEach((node) => {
						node.style.paddingInlineStart = `${
							parseInt(el.dataset.xttLevel) * 16
						}px`;
					});
				} else if (node.tagName === "XTT-LINK") {
					node.style.paddingInlineStart = `${
						parseInt(el.dataset.xttLevel) * 16
					}px`;
				}
			};

			el.querySelectorAll("xtt-link").forEach((node) => {
				node.style.paddingInlineStart = `${
					parseInt(el.dataset.xttLevel) * 16
				}px`;
			});
		}
	}
}
