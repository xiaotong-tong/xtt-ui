import { xttButtonElement } from "../button/button.js";
import style from "./text-button.css" assert { type: "css" };

export class xttTextButtonElement extends xttButtonElement {
	static stylesContent = [...super.stylesContent, style];
}
