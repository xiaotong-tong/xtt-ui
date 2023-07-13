import { xttBaseElement } from "../com/base.js";
import style from "./editor-md.css" assert { type: "css" };

export class xttEditorMdElement extends xttBaseElement {
	static templateContent = `
    <div id="editor">
		<xtt-textarea id="editorContainer"></xtt-textarea>
		<xtt-markdown id="showContainer"></xtt-markdown>
    </div>`;
	static stylesContent = [style];

	constructor() {
		super();

		this.#editorContainer.addEventListener("input", (ev) => {
			const text = ev.target.value;
			this.#showContainer.innerHTML = text;
		});
	}

	get #editorContainer() {
		return this.shadowRoot.getElementById("editorContainer");
	}
	get #showContainer() {
		return this.shadowRoot.getElementById("showContainer");
	}
}
