import { xttBaseElement } from "../com/base.js";
import style from "./editor.css" assert { type: "css" };
import editorStyle from "@wangeditor/editor/dist/css/style.css" assert { type: "css" };
import { createEditor, createToolbar, Boot } from "@wangeditor/editor";
import markdownModule from "@wangeditor/plugin-md";

Boot.registerModule(markdownModule);

export class xttEditorElement extends xttBaseElement {
	static templateContent = `
    <div id="editor">
        <div id="toolbar-container"></div>
        <div id="editor-container"></div>
    </div>`;
	static stylesContent = [editorStyle, style];
	static observeOptions = { childList: true, subtree: true };

	static get observedAttributes() {
		return [];
	}

	#editorConfig = {
		placeholder: "Type here...",
		onChange(editor) {
			const html = editor.getHtml();
			console.log("editor content", html);
			// 也可以同步到 <textarea>
		}
	};
	#toolbarConfig = {};

	#editor;
	#toolbar;
	constructor() {
		super();

		this.#editor = createEditor({
			selector: this.#editorContainer,
			html: "<p><br></p>",
			config: this.#editorConfig,
			mode: "default" // or 'simple'
		});

		this.#toolbar = createToolbar({
			editor: this.#editor,
			selector: this.#toolbarContainer,
			config: this.#toolbarConfig,
			mode: "default" // or 'simple'
		});
	}

	get #editorContainer() {
		return this.shadowRoot.querySelector("#editor-container");
	}
	get #toolbarContainer() {
		return this.shadowRoot.querySelector("#toolbar-container");
	}
}
