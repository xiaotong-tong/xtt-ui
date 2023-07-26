import { xttInputElement } from "../com/input.js";
import style from "./numberfield.css" assert { type: "css" };
import html from "./numberfield.html";

export class xttNumberFieldElement extends xttInputElement {
	static templateContent = html;
	static stylesContent = [...super.stylesContent, style];

	static get observedAttributes() {
		return [...super.observedAttributes, "min", "max", "step"];
	}

	focusableElement = this.#input;

	constructor() {
		super();
	}

	connectedCallback() {
		super.connectedCallback();

		this.#spinButtonEvent();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "min") {
			this.min = newValue;
		} else if (name === "max") {
			this.max = newValue;
		} else if (name === "step") {
			this.step = newValue;
		}

		super.attributeChangedCallback?.(name, oldValue, newValue);
	}

	#spinButtonEvent() {
		// 加减按钮在聚焦时，让 input 聚焦，而不是加减按钮聚焦
		this.#minus.addEventListener("focus", () => {
			this.#input.focus();
		});
		this.#plus.addEventListener("focus", () => {
			this.#input.focus();
		});

		const spinBtnsMouseEventHandler = (plused, byTouch) => {
			const refreshValue = () => {
				let value = this.value;

				if (plused) {
					const max = this.max;
					if (max !== "" && value >= max) return;

					value += this.step || 1;

					if (max !== "" && value > max) {
						value = max;
					}
				} else {
					const min = this.min;
					if (min !== "" && value <= min) return;

					value -= this.step || 1;

					if (min !== "" && value < min) {
						value = min;
					}
				}

				this.value = value;
				// 在每次刷新值时，触发 input 事件
				this.dispatchEvent(new InputEvent("input"));
			};

			refreshValue();

			const timer = setInterval(() => {
				refreshValue();
			}, 150);

			// 监听鼠标抬起事件，清除定时器，以及触发 change 事件
			document.addEventListener(
				byTouch ? "touchend" : "mouseup",
				() => {
					clearInterval(timer);
					this.dispatchEvent(new Event("change"));
				},
				{
					once: true
				}
			);
		};

		this.#minus.addEventListener("mousedown", () => {
			spinBtnsMouseEventHandler(false);
		});
		this.#plus.addEventListener("mousedown", () => {
			spinBtnsMouseEventHandler(true);
		});

		this.#minus.addEventListener("touchstart", () => {
			spinBtnsMouseEventHandler(false, true);
		});
		this.#plus.addEventListener("touchstart", () => {
			spinBtnsMouseEventHandler(true, true);
		});
	}

	get #input() {
		return this.shadowRoot.getElementById("input");
	}
	get #minus() {
		return this.shadowRoot.getElementById("minus");
	}
	get #plus() {
		return this.shadowRoot.getElementById("plus");
	}

	get value() {
		return super.value === "" ? "" : Number(super.value);
	}
	set value(value) {
		super.value = value;
	}

	get min() {
		return this.#input.min === "" ? "" : Number(this.#input.min);
	}
	set min(value) {
		this.#input.min = value;
	}

	get max() {
		return this.#input.max === "" ? "" : Number(this.#input.max);
	}
	set max(value) {
		this.#input.max = value;
	}

	get step() {
		return this.#input.step === "" ? "" : Number(this.#input.step);
	}
	set step(value) {
		this.#input.step = value;
	}
}
