import { xttTextElement } from "../text/text";
import style from "./text-enter.css" assert { type: "css" };

export class xttTextEnterElement extends xttTextElement {
	static stylesContent = [...super.stylesContent, style];

	static get observedAttributes() {
		return ["interval"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "interval") {
			this.interval = newValue;
		}

		super.attributeChangedCallback?.(name, oldValue, newValue);
	}

	connectedCallback() {
		super.connectedCallback?.();

		this.#enter();
	}

	#enter() {
		const text = this.textContent;
		this.textContent = "";
		let i = 0;

		const timer = setInterval(() => {
			this.textContent = text.slice(0, i);
			i++;
			if (i > text.length) {
				clearInterval(timer);
			}
		}, this.interval ?? 100);
	}

	get interval() {
		if (this.hasAttribute("interval")) {
			return Number(this.getAttribute("interval"));
		}

		return 100;
	}
	set interval(value) {
		if (value === null) {
			this.removeAttribute("interval");
			return;
		}

		if (this.interval !== Number(value)) {
			this.setAttribute("interval", value);
		}
	}

	reload() {
		this.#enter();
	}
}
