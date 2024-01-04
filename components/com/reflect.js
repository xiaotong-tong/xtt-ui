import { xttBaseElement } from "./base.js";

export class xttRelectElement extends xttBaseElement {
	observeOptions = { childList: true };
	#observer;

	constructor() {
		super();

		this.#observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.type === "childList") {
					mutation.addedNodes.forEach((node) => {
						this._reflectElementAdded(node);

						if (node.nodeType === Node.ELEMENT_NODE) {
							this._reflectElementNodeAdded(node);
						} else if (node.nodeType === Node.TEXT_NODE) {
							this._reflectElementTextAdded(node);
						}
					});
					mutation.removedNodes.forEach((node) => {
						this._reflectElementRemoved(node);

						if (node.nodeType === Node.ELEMENT_NODE) {
							this._reflectElementNodeRemoved(node);
						} else if (node.nodeType === Node.TEXT_NODE) {
							this._reflectElementTextRemoved(node);
						}
					});
				} else if (mutation.type === "attributes") {
					this._reflectElementAttributeChanged(
						mutation.attributeName,
						mutation.oldValue,
						mutation.target.getAttribute(mutation.attributeName),
						mutation.target
					);
				}
			});
		});
	}

	connectedCallback() {
		this.#observer.observe(this, this.observeOptions);
	}

	disconnectedCallback() {
		this.#observer.disconnect();
	}

	_reflectElementAdded() {}
	_reflectElementRemoved() {}

	_reflectElementNodeAdded() {}
	_reflectElementTextAdded() {}
	_reflectElementNodeRemoved() {}
	_reflectElementTextRemoved() {}

	_reflectElementAttributeChanged() {}
}
