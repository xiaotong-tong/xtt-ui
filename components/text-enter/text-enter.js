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

		this.#originalTextContent = this.textContent;
		this.#enter();
	}

	#originalTextContent;

	#timer;
	#enter() {
		if (this.#timer) {
			clearTimeout(this.#timer);
		}

		const text = this.#originalTextContent;
		this.textContent = "";
		let pushText = "";

		const push = (i) => {
			if (text[i] === "!" && text.slice(i, i + 8) === "![ruby](") {
				const end = text.indexOf(")", i + 8);
				if (end !== -1) {
					const content = text.slice(i + 8, end);
					const rubyText = content.split("@")[0];
					const rtText = content.split("@")[1] || 0;
					const originalText = pushText;

					const pushSel = (j) => {
						if (j <= rtText.length) {
							this.textContent = originalText + rtText.slice(0, j);
							j++;
							this.#timer = setTimeout(() => pushSel(j), this.interval ?? 100);
						} else {
							setTimeout(() => {
								pushText = originalText + rubyText;
								this.textContent = pushText;
								i = end + 1;
								if (i < text.length) {
									this.#timer = setTimeout(() => push(i), this.interval ?? 100);
								}
							}, this.delaySelInterval ?? 300);
						}
					};

					pushSel(0);
				} else {
					pushText += text[i];
					this.textContent = pushText;
					i++;
					if (i < text.length) {
						this.#timer = setTimeout(() => push(i), this.interval ?? 100);
					}
				}

				return;
			}

			pushText += text[i];
			this.textContent = pushText;
			i++;
			if (i < text.length) {
				this.#timer = setTimeout(() => push(i), this.interval ?? 100);
			}
		};

		push(0);
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

	get delaySelInterval() {
		if (this.hasAttribute("delaySelInterval")) {
			return Number(this.getAttribute("delaySelInterval"));
		}

		return 300;
	}
	set delaySelInterval(value) {
		if (value === null) {
			this.removeAttribute("delaySelInterval");
			return;
		}

		if (this.delaySelInterval !== Number(value)) {
			this.setAttribute("delaySelInterval", value);
		}
	}

	refresh() {
		this.#originalTextContent = this.textContent;
		this.#enter();
	}

	reload() {
		this.#enter();
	}
}
