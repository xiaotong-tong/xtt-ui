import { xttBaseElement } from "../com/base.js";
import style from "./icon.css" assert { type: "css" };
import {
	mdiPower,
	mdiChevronDown,
	mdiPlus,
	mdiMinus,
	mdiClose,
	mdiMusicNote
} from "@mdi/js";

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

		this.style.setProperty(
			"--icon-default-size",
			window.getComputedStyle(this).fontSize || "24px"
		);
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
		switch (iconName) {
			case "power":
				this.innerHTML = this.#getSvg(mdiPower);
				break;
			case "chevronDown":
				this.innerHTML = this.#getSvg(mdiChevronDown);
				break;
			case "plus":
				this.innerHTML = this.#getSvg(mdiPlus);
				break;
			case "minus":
				this.innerHTML = this.#getSvg(mdiMinus);
				break;
			case "close":
				this.innerHTML = this.#getSvg(mdiClose);
				break;
			case "musicNote":
				this.innerHTML = this.#getSvg(mdiMusicNote);
				break;
			default:
				this.innerHTML = "";
		}
	}

	get icon() {
		return this.getAttribute("icon");
	}
	set icon(value) {
		if (value !== this.icon) {
			this.setAttribute("icon", value);
		}

		this.#setIcon(value);
	}
}
