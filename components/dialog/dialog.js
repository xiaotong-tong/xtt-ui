import { xttBaseElement } from "../com/base.js";
import style from "./dialog.css" assert { type: "css" };
import html from "./dialog.html";
import { uniqueId } from "../../utils/xtt-ui-utils.js";

export class xttDialogElement extends xttBaseElement {
	static templateContent = html;
	static stylesContent = [...super.stylesContent, style];

	static get observedAttributes() {
		return ["title"];
	}

	constructor() {
		super();
	}

	connectedCallback() {
		uniqueId(this);
		this.#refreshHeader();
		this.#refreshFooter();

		this.#dialog.addEventListener("click", (event) => {
			if (!this.hasAttribute("modal-close")) {
				return;
			}
			const x = event.clientX;
			const y = event.clientY;
			const rect = this.#dialog.getBoundingClientRect();

			if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
				this.close();
			}
		});
		this.#dialog.addEventListener("keydown", (event) => {
			if (event.key === "Escape") {
				this.close();
				event.preventDefault();
			}
		});
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "title") {
			this.title = newValue;
		}
	}

	#refreshHeader() {
		if (!this.#headerSlot.assignedNodes()?.length) {
			const closeButton = document.createElement("xtt-button");
			closeButton.setAttribute("slot", "header");
			closeButton.setAttribute("text", "");
			closeButton.classList.add("close");

			const closeButtonIcon = document.createElement("xtt-icon");
			closeButtonIcon.setAttribute("icon", "close");
			closeButton.appendChild(closeButtonIcon);

			closeButton.addEventListener("click", () => {
				this.close();
			});
			closeButton.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					this.close();
				}
			});
			this.appendChild(closeButton);

			this.#refreshTitle();
		}
	}
	#titleElement = null;
	#refreshTitle() {
		if (this.#titleElement) {
			this.#titleElement.textContent = this.dataset.xttTitle;
			return;
		}

		const span = document.createElement("span");
		span.setAttribute("slot", "header");
		span.classList.add("title");
		span.textContent = this.dataset.xttTitle;
		this.appendChild(span);
		this.#titleElement = span;
	}
	#refreshFooter() {
		if (!this.#footerSlot.assignedNodes()?.length) {
			const okButton = document.createElement("xtt-button");
			okButton.setAttribute("slot", "footer");
			okButton.setAttribute("type", "primary");
			okButton.textContent = "OK";
			okButton.addEventListener("click", () => {
				const isCancel = this.dispatchEvent(
					new CustomEvent("xtt-submit", {
						bubbles: false,
						cancelable: true
					})
				);
				if (!isCancel) {
					return;
				}

				this.close();
			});
			okButton.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					const isCancel = this.dispatchEvent(
						new CustomEvent("xtt-submit", {
							bubbles: false,
							cancelable: true
						})
					);
					if (!isCancel) {
						return;
					}

					this.close();
				}
			});

			const cancelButton = document.createElement("xtt-button");
			cancelButton.setAttribute("slot", "footer");
			cancelButton.textContent = "Cancel";
			cancelButton.addEventListener("click", () => {
				this.close();
			});
			cancelButton.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					this.close();
				}
			});

			this.appendChild(cancelButton);
			this.appendChild(okButton);
		}
	}

	get #dialog() {
		return this.shadowRoot.getElementById("dialog");
	}
	get #header() {
		return this.shadowRoot.getElementById("header");
	}
	get #content() {
		return this.shadowRoot.getElementById("content");
	}
	get #headerSlot() {
		return this.shadowRoot.getElementById("headerSlot");
	}
	get #footerSlot() {
		return this.shadowRoot.getElementById("footerSlot");
	}

	#triggerElement = null;
	get triggerElement() {
		return this.#triggerElement;
	}
	set triggerElement(el) {
		// 为触发元素设置 aria 属性
		this.#triggerElement = el;
		el.ariaHasPopup = "dialog";
		el.ariaControls = uniqueId(this).id;
		el.ariaExpanded = "false";
	}

	open() {
		// showModal 打开对话框后会默认聚焦第一个可聚焦元素，这里手动改为聚焦对话框
		this.#dialog.showModal();
		this.#dialog.focus();

		if (this.triggerElement) {
			this.triggerElement.ariaExpanded = "true";
		}
	}
	close() {
		if (!this.#dialog.open) {
			return false;
		}

		const isCancel = this.dispatchEvent(
			new CustomEvent("xtt-close", {
				bubbles: false,
				cancelable: true
			})
		);
		if (!isCancel) {
			return;
		}

		this.#dialog?.close();

		if (this.triggerElement) {
			this.triggerElement.ariaExpanded = "false";
		}
	}

	get title() {
		return this.getAttribute("data-xtt-title");
	}
	set title(value) {
		// 使用 data-xtt-title 代替 title 属性，避免浏览器默认行为
		this.setAttribute("data-xtt-title", value);
		this.removeAttribute("title");
	}
}
