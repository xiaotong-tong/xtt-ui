import { xttRelectElement } from "../com/reflect.js";
import style from "./text-box-theme-a.css" assert { type: "css" };
import html from "./index.html";
import { css } from "xtt-utils";

export class xttTextBoxThemeAElement extends xttRelectElement {
	static templateContent = html;
	static stylesContent = [...super.stylesContent, style];

	static get observedAttributes() {
		return ["skew"];
	}

	get childElementTagName() {
		return "XTT-P";
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "skew") {
			this.skew = newValue;
		}
	}

	connectedCallback() {
		super.connectedCallback();

		this.#contentPages();

		this.#setViewBox();
	}

	_reflectElementAdded() {
		this.#contentPages();
	}
	_reflectElementRemoved() {
		this.#contentPages();
	}

	#contentPages() {
		if (this.querySelectorAll(this.childElementTagName)?.length) {
			const childs = this.querySelectorAll(this.childElementTagName);
			let activedChild = this.querySelector(this.childElementTagName + ".active");

			if (!activedChild) {
				activedChild = childs[0];
				activedChild.classList.add("active");
			}

			this.#doLastChild();

			this.#textContent.replaceChildren(...activedChild.cloneNode(true).childNodes);
			this.classList.add("hasChildList");

			this.#handleEventWhenHasChildList();
		} else {
			// 克隆 this 的所有子节点，并将其添加到 textContent 中
			const fragment = document.createDocumentFragment();
			this.childNodes.forEach((node) => {
				fragment.appendChild(node.cloneNode(true));
			});
			this.#textContent.replaceChildren(fragment);
		}
	}

	#doLastChild() {
		if (this.classList.contains("hasChildList")) {
			const childs = this.querySelectorAll(this.childElementTagName);

			const activedIndex = Array.from(childs).findIndex((child) => child.classList.contains("active"));

			if (activedIndex === childs.length - 1) {
				this.classList.add("last");
			}
		}
	}

	#handleEventWhenHasChildList() {
		this.addEventListener("click", (e) => {
			if (this.classList.contains("hasChildList") && !this.classList.contains("last")) {
				const childs = this.querySelectorAll(this.childElementTagName);

				const activedIndex = Array.from(childs).findIndex((child) => child.classList.contains("active"));

				if (activedIndex < childs.length - 1) {
					childs[activedIndex].classList.remove("active");
					childs[activedIndex + 1].classList.add("active");

					this.#textContent.replaceChildren(...childs[activedIndex + 1].cloneNode(true).childNodes);

					this.#doLastChild();
				}
			}
		});

		this.addEventListener("auxclick", (e) => {
			if (this.classList.contains("hasChildList")) {
				const childs = this.querySelectorAll(this.childElementTagName);

				const activedIndex = Array.from(childs).findIndex((child) => child.classList.contains("active"));

				if (activedIndex > 0) {
					childs[activedIndex].classList.remove("active");
					childs[activedIndex - 1].classList.add("active");

					this.#textContent.replaceChildren(...childs[activedIndex - 1].cloneNode(true).childNodes);

					this.#doLastChild();
				}

				this.classList.remove("last");
			}
		});
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
	get #textContent() {
		return this.shadowRoot.getElementById("textContent");
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
