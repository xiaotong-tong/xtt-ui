import { xttBaseElement } from "../com/base.js";
import style from "./icon.css" assert { type: "css" };
import { powerIcon } from "./icons/power.js";
import { chevronDownIcon } from "./icons/chevronDown.js";
import { plusIcon } from "./icons/plus.js";
import { minusIcon } from "./icons/minus.js";
import { closeIcon } from "./icons/close.js";

export class xttIconElement extends xttBaseElement {
	static templateContent = `<slot></slot>`;
	static stylesContent = [...super.stylesContent, style];

	static get observedAttributes() {
		return ["icon"];
	}

	connectedCallback() {
		this.style.setProperty("--icon-size", window.getComputedStyle(this).fontSize || "24px");
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "icon") {
			this.icon = newValue;
		}
	}

	#setIcon(iconName) {
		switch (iconName) {
			case "power":
				this.innerHTML = powerIcon;
				break;
			case "chevronDown":
				this.innerHTML = chevronDownIcon;
				break;
			case "plus":
				this.innerHTML = plusIcon;
				break;
			case "minus":
				this.innerHTML = minusIcon;
				break;
			case "close":
				this.innerHTML = closeIcon;
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
