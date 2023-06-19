import style from "./web-bg.css" assert { type: "css" };
import { fileToB64, b64ToBlob } from "xtt-utils";

export class xttWebBgElement extends HTMLElement {
	static get observedAttributes() {
		return ["src"];
	}

	#saveKey = "xtt-web-bg";

	#shadowRoot;

	constructor() {
		super();

		this.#shadowRoot = this.attachShadow({ mode: "open" });
		this.#shadowRoot.adoptedStyleSheets = [style];
	}

	connectedCallback() {
		this.ariaHidden = true;

		this.#dropEvent();
		this.#initBg();
	}
	disconnectedCallback() {
		this.#removeDropEvent();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "src") {
			this.#updateBgUrl(newValue);
		}
	}

	#updateBgUrl(url) {
		this.style.setProperty("--bg-url", `url(${url})`);
	}

	async #initBg() {
		const localBg = localStorage.getItem(this.#saveKey);
		if (localBg) {
			const blob = await b64ToBlob(localBg);
			this.#updateBgUrl(URL.createObjectURL(blob));
		}
	}

	#dragoverHandler(ev) {
		ev.preventDefault();
	}
	#dropHandlerByThis = this.#dropHandler.bind(this);
	#dropHandler(ev) {
		const file = ev.dataTransfer.files[0];

		this.#updateBgUrl(URL.createObjectURL(file));

		if (file?.type.includes("image")) {
			fileToB64(file).then((b64) => {
				localStorage.setItem(this.#saveKey, b64);
			});
		}
		ev.preventDefault();
	}

	#dropEvent() {
		// 当拖拽到元素上会触发 dragover 事件，此处需要阻止事件的默认行为
		document.addEventListener("dragover", this.#dragoverHandler, false);
		// 当拖拽到元素上并释放时会触发 drop 事件
		document.addEventListener("drop", this.#dropHandlerByThis);
	}
	#removeDropEvent() {
		// 在元素移除时移除事件监听
		document.removeEventListener("dragover", this.#dragoverHandler, false);
		document.removeEventListener("drop", this.#dropHandlerByThis);
	}
}
