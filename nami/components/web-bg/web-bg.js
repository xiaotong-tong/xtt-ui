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

		// 在元素移除时移除 URL 内存，防止内存泄漏
		if (this.#bgUrl) {
			URL.revokeObjectURL(this.#bgUrl);
		}
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "src") {
			this.#updateBgUrl(newValue);
		}
	}

	#bgUrl;
	#updateBgUrl(url, byCreateObjectURL = false) {
		if (byCreateObjectURL) {
			this.#bgUrl = url;
		}

		this.style.setProperty("--bg-url", `url(${url})`);
	}

	async #initBg() {
		if (indexedDB) {
			let db;
			const request = indexedDB.open("xtt-web-bg-table");
			request.onsuccess = (event) => {
				db = event.target.result;
				const tx = db.transaction("bg", "readonly");
				const store = tx.objectStore("bg");
				const request = store.get(this.#saveKey);
				request.onsuccess = (event) => {
					const file = event.target.result;
					if (file) {
						this.#updateBgUrl(URL.createObjectURL(file), true);
					}
					db.close();
				};
			};
		} else {
			const localBg = localStorage.getItem(this.#saveKey);
			if (localBg) {
				const blob = await b64ToBlob(localBg);
				this.#updateBgUrl(URL.createObjectURL(blob), true);
			}
		}
	}

	#dragoverHandler(ev) {
		ev.preventDefault();
	}
	#dropHandlerByThis = this.#dropHandler.bind(this);
	#dropHandler(ev) {
		const file = ev.dataTransfer.files[0];

		if (file?.type.includes("image")) {
			const oldBg = this.#bgUrl;

			this.#updateBgUrl(URL.createObjectURL(file), true);

			// 如果支持 indexedDB，就将数据保存到 indexedDB 中，否则保存到 localStorage 中
			// 因为 indexedDB 支持保存 file 对象和 blob 对象，而 localStorage 只能保存字符串
			// 所以 indexedDB 中直接保存 file 对象，而 localStorage 中保存 base64 字符串
			if (indexedDB) {
				let db;
				const request = indexedDB.open("xtt-web-bg-table");
				request.onsuccess = (event) => {
					db = event.target.result;
					const tx = db.transaction("bg", "readwrite");
					const store = tx.objectStore("bg");
					store.put(file, this.#saveKey);
					tx.oncomplete = () => {
						db.close();
					};
				};

				request.onupgradeneeded = (event) => {
					db = event.target.result;
					db.createObjectStore("bg");
				};
			} else {
				fileToB64(file).then((b64) => {
					localStorage.setItem(this.#saveKey, b64);
				});
			}

			ev.preventDefault();

			// 在更新 URL 之后，释放旧的 URL 内存，防止内存泄漏
			if (oldBg) {
				URL.revokeObjectURL(oldBg);
			}
		}
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
