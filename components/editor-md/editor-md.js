import { xttBaseElement } from "../com/base.js";
import style from "./editor-md.css" assert { type: "css" };

export class xttEditorMdElement extends xttBaseElement {
	static templateContent = `
		<div id="editor">
			<xtt-textarea id="editorContainer" block autosize></xtt-textarea>
			<xtt-markdown id="previewContainer"></xtt-markdown>
		</div>`;
	static stylesContent = [...super.stylesContent, style];

	constructor() {
		super();

		this.#editorContainer.addEventListener("input", (ev) => {
			const text = ev.target.value;
			this.#previewContainer.textContent = text;
		});
		this.#editorContainer.addEventListener("change", (ev) => {
			this.dispatchEvent(new Event("change"));
		});
	}

	get #editorContainer() {
		return this.shadowRoot.getElementById("editorContainer");
	}
	get #previewContainer() {
		return this.shadowRoot.getElementById("previewContainer");
	}

	get value() {
		return this.#editorContainer.value;
	}
	set value(value) {
		this.#editorContainer.value = value;
		this.#previewContainer.innerHTML = value;
	}

	get textContent() {
		return this.value;
	}
	set textContent(value) {
		this.value = value;
	}

	get parsed() {
		return this.#previewContainer.parsed;
	}

	get abstract() {
		return this.#previewContainer.abstract;
	}
}
