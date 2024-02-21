import { xttBaseElement } from "../com/base.js";
import style from "./text-box-theme-a.css" assert { type: "css" };
import html from "./index.html";

export class xttTextBoxThemeAElement extends xttBaseElement {
	static templateContent = html;
	static stylesContent = [...super.stylesContent, style];

	static get observedAttributes() {
		return [];
	}

	attributeChangedCallback(name, oldValue, newValue) {}
}
