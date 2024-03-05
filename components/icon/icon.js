import { xttBaseElement } from "../com/base.js";
import style from "./icon.css" assert { type: "css" };
import { mdiPower, mdiChevronDown, mdiPlus, mdiMinus, mdiClose, mdiMusicNote } from "@mdi/js";

export class xttIconElement extends xttBaseElement {
	static templateContent = `<slot></slot>`;
	static stylesContent = [...super.stylesContent, style];

	static get observedAttributes() {
		return ["icon"];
	}

	connectedCallback() {
		// 如果 xtt-icon 没有设置 role 属性，则设置为 img
		if (!this.hasAttribute("role")) {
			this.role = "img";
		}

		this.style.setProperty("--icon-default-size", window.getComputedStyle(this).fontSize || "24px");
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "icon") {
			this.icon = newValue;
		}
	}

	#getSvg(path) {
		return `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="${path}"></path></svg>`;
	}

	#setIcon(iconName) {
		const iconMap = {
			power: mdiPower,
			chevronDown: mdiChevronDown,
			plus: mdiPlus,
			minus: mdiMinus,
			close: mdiClose,
			musicNote: mdiMusicNote
		};

		if (this.role === "img") {
			// 当 role 为 img 时，设置 aria-label 属性，以便屏幕阅读器读取
			this.setAttribute("aria-label", iconName);
		}

		this.innerHTML = iconMap[iconName] ? this.#getSvg(iconMap[iconName]) : "";
	}

	get icon() {
		return this.getAttribute("icon");
	}
	set icon(value) {
		if (value === null) {
			this.removeAttribute("type");
			this.innerHTML = "";
			return;
		}

		if (value !== this.icon) {
			this.setAttribute("icon", value);
		}

		this.#setIcon(value);
	}
}
