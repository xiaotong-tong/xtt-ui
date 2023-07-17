import { xttBaseElement } from "../com/base.js";
import style from "./editor-md.css" assert { type: "css" };

export class xttEditorMdElement extends xttBaseElement {
	static templateContent = `
    <div id="editor">
		<xtt-textarea id="editorContainer" block autosize></xtt-textarea>
		<xtt-markdown id="previewContainer"></xtt-markdown>
    </div>`;
	static stylesContent = [style];

	constructor() {
		super();

		this.#editorContainer.addEventListener("input", (ev) => {
			const text = ev.target.value;
			this.#previewContainer.innerHTML = text;
		});
	}

	get #editorContainer() {
		return this.shadowRoot.getElementById("editorContainer");
	}
	get #previewContainer() {
		return this.shadowRoot.getElementById("previewContainer");
	}
}
