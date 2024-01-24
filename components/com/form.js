import { xttBaseElement } from "./base.js";
import { xttRelectElement } from "./reflect.js";
import formStyle from "./form.css" assert { type: "css" };
import { attrValueAppendIds } from "../../utils/xtt-ui-utils.js";

/** @param {"reflect"} [extend] */

export function xttFormElementFactory(extend) {
	return class xttFormElement extends (extend === "reflect" ? xttRelectElement : xttBaseElement) {
		static stylesContent = [...super.stylesContent, formStyle];

		static get observedAttributes() {
			return ["disabled", "autofocus", "rtl"];
		}

		focusableElement = this;

		constructor() {
			super();
		}

		connectedCallback() {
			super.connectedCallback?.();

			this.#labelEventHandlers();
			this._addA11yWithLabel();

			// 如果元素上有设置 autofocus 属性，那么在元素被插入到文档中后，自动聚焦
			if (this.focusableElement.hasAttribute("autofocus")) {
				this.focusableElement.focus();
			}
		}

		disconnectedCallback() {}

		attributeChangedCallback(name, oldValue, newValue) {
			if (name === "disabled") {
				this.disabled = newValue !== null;
			} else if (name === "autofocus") {
				this.autofocus = newValue !== null;
			} else if (name === "rtl") {
				this.rtl = newValue !== null;
			}
		}

		#labelEventHandlers() {
			this.labels?.forEach((label) => {
				label.addEventListener("click", (ev) => {
					this.focusableElement.focus();
				});
			});
		}

		_addA11yWithLabel() {
			let labels = Array.from(this.labels);

			if (labels.length) {
				// 如果聚焦元素就是 this，那么 focus 元素就和 labels 是同一层级，不需要再次处理
				// 如果聚焦元素是 shadowRoot 下的元素，那么 focus 元素就和 labels 不是同一层级，需要再次处理，复制 labels 到 shadowRoot 下
				if (this.focusableElement !== this) {
					labels = labels.map((label) => {
						const copy = label.cloneNode(true);
						copy.hidden = true;
						this.shadowRoot.appendChild(copy);
						return copy;
					});
				}

				attrValueAppendIds(this.focusableElement, "aria-labelledby", labels);
			}
		}

		get labels() {
			if (this.id) {
				// 为了防止误查找，这里只查找和 xtt-button 处于同一个 shadowRoot 下的 label
				return this.getRootNode().querySelectorAll(`label[for="${this.id}"]`);
			} else {
				// 返回一个空的 NodeList
				return document.createElement(null).childNodes;
			}
		}

		get disabled() {
			return this.focusableElement.hasAttribute("disabled");
		}
		set disabled(value) {
			this.focusableElement.toggleAttribute("disabled", value);

			if (this.getAttribute("disabled") !== value) {
				if (value === null) {
					this.focusableElement.removeAttribute("disabled");
					return;
				}

				this.toggleAttribute("disabled", value);
			}
		}

		get autofocus() {
			return this.focusableElement.hasAttribute("autofocus");
		}
		set autofocus(value) {
			this.focusableElement.toggleAttribute("autofocus", value);
		}

		get rtl() {
			return this.focusableElement.hasAttribute("rtl");
		}
		set rtl(value) {
			if (value) {
				if (this.rtl !== true) {
					this.focusableElement.toggleAttribute("rtl", true);
				}
			} else {
				this.focusableElement.removeAttribute("rtl");
			}
		}
	};
}
