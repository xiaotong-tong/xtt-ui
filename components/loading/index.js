import { xttBaseElement } from "../com/base.js";
import style from "./index.css" assert { type: "css" };
import html from "./index.html";

export class xttLoadingElement extends xttBaseElement {
	static templateContent = html;
	static stylesContent = [...super.stylesContent, style];

	static get observedAttributes() {
		return [];
	}

	attributeChangedCallback(name, oldValue, newValue) {}

	connectedCallback() {
		// 如果 xtt-loading 没有设置 role 属性，则设置为 img
		if (!this.hasAttribute("role")) {
			this.role = "img";
			// 当 role 为 img 时，设置 aria-label 属性，以便屏幕阅读器读取
			this.setAttribute("aria-label", "loading");
		}

		this.style.setProperty("--loading-default-size", window.getComputedStyle(this).fontSize || "16px");
	}

	reload() {
		// 调用 reload 时，自动根据当前的 fontSize 重新设置大小
		this.style.setProperty("--loading-default-size", window.getComputedStyle(this).fontSize || "16px");
	}
}
