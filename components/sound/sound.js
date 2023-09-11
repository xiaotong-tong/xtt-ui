import { xttBaseElement } from "../com/base.js";
import style from "./sound.css" assert { type: "css" };
import html from "./sound.html";

export class xttSoundElement extends xttBaseElement {
	static templateContent = html;
	static stylesContent = [...super.stylesContent, style];

	static get observedAttributes() {
		return ["src"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "src") {
			this.src = newValue;
		}
	}

	connectedCallback() {
		this.addEventListener("click", () => {
			this.#audio.play();
		});

		// 在可以播放流媒体时，再显示音频图标
		this.style.opacity = 0;

		this.#audio.addEventListener("canplay", () => {
			this.style.opacity = 1;
		});
	}

	get #icon() {
		return this.shadowRoot.getElementById("icon");
	}
	get #audio() {
		return this.shadowRoot.getElementById("audio");
	}

	get src() {
		return this.getAttribute("src");
	}
	set src(value) {
		if (value === null) {
			this.removeAttribute("src");
			return;
		}

		this.#audio.src = value;
	}
}
