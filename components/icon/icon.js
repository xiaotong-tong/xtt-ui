import { xttBaseElement } from "../com/base.js";
import style from "./icon.css" assert { type: "css" };
import { powerIcon } from "./icons/power.js";
import { chevronDownIcon } from "./icons/chevronDown.js";

export class xttIconElement extends xttBaseElement {
	static templateContent = `<slot></slot>`;
	static stylesContent = [style];

	static get observedAttributes() {
		return ["icon"];
	}

	connectedCallback() {
		this.style.setProperty("--icon-size", window.getComputedStyle(this).fontSize || "24px");
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "icon") {
			this.#setIcon(newValue);
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
		}
	}
}
