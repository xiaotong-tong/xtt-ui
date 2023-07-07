import style from "./body.css" assert { type: "css" };
export class xttBodyElement extends HTMLBodyElement {
	static templateContent = `<slot name="nav"></slot>
    <slot name="main"></slot>
    <slot></slot>`;

	template() {
		const template = document.createElement("template");
		template.innerHTML = xttBodyElement.templateContent;

		return template.content.cloneNode(true);
	}

	#shadowRoot;
	#observer;

	constructor() {
		super();

		this.#shadowRoot = this.attachShadow({ mode: "open" });
		this.#shadowRoot.adoptedStyleSheets = [style];
		this.#shadowRoot.appendChild(this.template());

		this.#observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.type === "childList") {
					mutation.addedNodes.forEach((node) => {
						if (node.nodeType === 1) {
							this.#setDefaultSlot(node);
						}
					});
				}
			});
		});
	}

	connectedCallback() {
		this.#observer.observe(this, {
			childList: true
		});
	}

	#setDefaultSlot(el) {
		if (el.getAttribute("slot")) {
			return;
		}
		if (el.tagName.toLowerCase() === "xtt-page-nav") {
			el.slot = "nav";
		} else if (el.tagName.toLowerCase() === "main") {
			el.slot = "main";
		}
	}
}
