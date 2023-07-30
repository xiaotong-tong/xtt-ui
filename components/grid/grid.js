import { xttRelectElement } from "../com/reflect.js";
import style from "./grid.css" assert { type: "css" };
import html from "./grid.html";
import { css } from "xtt-utils";

export class xttGridElement extends xttRelectElement {
	static templateContent = html;
	static stylesContent = [...super.stylesContent, style];
	static observeOptions = { childList: true, subtree: true };

	static get observedAttributes() {
		return [];
	}

	#data = [];
	#columns = [];

	constructor() {
		super();
	}

	connectedCallback() {
		super.connectedCallback();

		let girdTemplateAreas = "";
		let girdTemplateColumns = "";

		this.#columns = [...this.querySelectorAll("xtt-grid-column")];

		this.#columns.map((column) => {
			girdTemplateAreas += column.name + " ";
			girdTemplateColumns += (column.width === "auto" ? "1fr" : column.width) + " ";
		});

		girdTemplateAreas = '"' + girdTemplateAreas.trim() + '"';
		girdTemplateColumns = girdTemplateColumns.trim();

		css(this.#body, "grid-template-areas", girdTemplateAreas);
		css(this.#body, "grid-template-columns", girdTemplateColumns);

		css(this.#header, "grid-template-areas", girdTemplateAreas);
		css(this.#header, "grid-template-columns", girdTemplateColumns);

		this.#header.innerHTML = this.#columns
			.map((column) => `<div class="header-cell">${column.label || column.name}</div>`)
			.join("");
	}

	disconnectedCallback() {
		super.disconnectedCallback();
	}

	attributeChangedCallback(name, oldValue, newValue) {}

	_reflectElementAdded(node) {}

	get #grid() {
		return this.shadowRoot.getElementById("grid");
	}
	get #header() {
		return this.shadowRoot.getElementById("header");
	}
	get #body() {
		return this.shadowRoot.getElementById("body");
	}

	set data(value) {
		this.#data = value;

		this.#render();
	}

	templates = {};

	#render() {
		this.#body.innerHTML = this.#data
			.map((item) => {
				return `${this.#columns
					.map((column) => {
						const template = this.templates?.[column.name];
						if (template) {
							if (typeof template === "function") {
								return template(item);
							} else {
								return template;
							}
						}
						return `<div class="cell">${item[column.name]}</div>`;
					})
					.join("")}`;
			})
			.join("");
	}
}
