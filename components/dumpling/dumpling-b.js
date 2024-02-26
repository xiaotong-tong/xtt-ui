import { xttBaseElement } from "../com/base.js";
import style from "./dumpling-b.css" assert { type: "css" };
import html from "./index.html";

export class xttDumplingBElement extends xttBaseElement {
	static templateContent = html;
	static stylesContent = [...super.stylesContent, style];
}
