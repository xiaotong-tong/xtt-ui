import { xttBaseElement } from "../com/base.js";
import style from "./dumpling-a.css" assert { type: "css" };
import html from "./index.html";

export class xttDumplingElement extends xttBaseElement {
	static templateContent = html;
	static stylesContent = [...super.stylesContent, style];
}
