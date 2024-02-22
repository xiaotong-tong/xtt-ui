import { xttBaseElement } from "../com/base.js";
import style from "./text-box-theme-a.css" assert { type: "css" };
import html from "./index.html";
import { css } from "xtt-utils";

export class xttTextBoxThemeAElement extends xttBaseElement {
	static templateContent = html;
	static stylesContent = [...super.stylesContent, style];

	static get observedAttributes() {
		return ["skew"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "skew") {
			this.skew = newValue;
		}
	}

	connectedCallback() {
		this.#setViewBox();
	}

	get #box() {
		return this.shadowRoot.getElementById("box");
	}
	get #line() {
		return this.shadowRoot.getElementById("line");
	}
	get #oLine() {
		return this.shadowRoot.getElementById("oLine");
	}
	get #lineBack() {
		return this.shadowRoot.getElementById("lineBack");
	}
	get #oLineBack() {
		return this.shadowRoot.getElementById("oLineBack");
	}
	get #leftShape() {
		return this.shadowRoot.getElementById("leftShape");
	}
	get #rightShape() {
		return this.shadowRoot.getElementById("rightShape");
	}

	#setViewBox() {
		const ract = this.getBoundingClientRect();
		this.#box.setAttribute("viewBox", `-2 -2 ${ract.width + 4} ${ract.height + 14}`);

		this.#setLinePoint(ract.width, ract.height);
	}
	#setLinePoint(w, h) {
		if (!this.skew) {
			this.#line.setAttribute("points", `${w * 0.1},${h} 0,${h} 0,0 ${w},0 ${w},${h} ${w * 0.2},${h}`);
			this.#lineBack.setAttribute("points", `${w * 0.1},${h} 0,${h} 0,0 ${w},0 ${w},${h} ${w * 0.2},${h}`);

			this.#oLine.setAttribute("points", `${w * 0.1},${h} ${w * 0.2},${h}`);
			css(this.#oLine, "transform-origin", `${w * 0.15}px calc(100% - 14px)`);

			this.#oLineBack.setAttribute("points", `${w * 0.1},${h} ${w * 0.2},${h}`);
			css(this.#oLineBack, "transform-origin", `${w * 0.15}px calc(100% - 14px)`);
		} else {
			const s = Number(this.skew);
			this.#line.setAttribute(
				"points",
				`${s + w * 0.1},${h} ${s},${h} 0,0 ${w - s},0 ${w},${h} ${s + w * 0.2},${h}`
			);
			this.#lineBack.setAttribute(
				"points",
				`${s + w * 0.1},${h} ${s},${h} 0,0 ${w - s},0 ${w},${h} ${s + w * 0.2},${h}`
			);

			this.#oLine.setAttribute("points", `${s + w * 0.1},${h} ${s + w * 0.2},${h}`);
			css(this.#oLine, "transform-origin", `${s + w * 0.15}px calc(100% - 14px)`);

			this.#oLineBack.setAttribute("points", `${s + w * 0.1},${h} ${s + w * 0.2},${h}`);
			css(this.#oLineBack, "transform-origin", `${s + w * 0.15}px calc(100% - 14px)`);

			css(this.#leftShape, {
				"shape-outside": `polygon(0 0, ${s}px ${h}px, 0 ${h}px)`,
				width: `${s}px`
			});

			css(this.#rightShape, {
				"shape-outside": `polygon(0 0, ${s}px 0, ${s}px ${h}px)`,
				width: `${s}px`
			});
		}
	}

	get skew() {
		return this.getAttribute("skew");
	}
	set skew(value) {
		if (value === null) {
			this.removeAttribute("skew");
			return;
		}

		if (this.skew !== value) {
			this.setAttribute("skew", value);

			const ract = this.getBoundingClientRect();
			this.#setLinePoint(ract.width, ract.height);
		}
	}
}
