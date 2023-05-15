import { throttle, randomHexColor } from "../oss/xtt-utils/index.esm.js";

class mouseSnow {
	static character = "*";

	static #updateStyle(el, style) {
		for (const [key, value] of Object.entries(style)) {
			el.style[key] = value;
		}
	}

	#lifeSpan = 120;
	#initialStyles = {
		position: "fixed",
		top: "0",
		pointerEvents: "none",
		"z-index": "10000000",
		fontSize: "20px",
		"will-change": "transform"
	};
	#element;
	#position = {
		x: 0,
		y: 0
	};

	init(x, y, color) {
		this.#position.x = x - 10;
		this.#position.y = y - 20;

		this.#initialStyles.color = color ?? randomHexColor();
		this.#element = document.createElement("span");
		this.#element.innerHTML = mouseSnow.character;
		mouseSnow.#updateStyle(this.#element, this.#initialStyles);
		this.update();
		document.body.appendChild(this.#element);
	}

	#velocity() {
		return {
			x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
			y: 1
		};
	}

	update() {
		const velocity = this.#velocity();
		this.#position.x += velocity.x;
		this.#position.y += velocity.y;
		this.#lifeSpan--;
		this.#element.style.transform = `translate(${this.#position.x}px,${
			this.#position.y
		}px) scale(${this.#lifeSpan / 120})`;

		if (this.#lifeSpan < 30) {
			this.#die();
			return;
		}

		requestAnimationFrame(this.update.bind(this));
	}

	#die() {
		this.#element.parentNode.removeChild(this.#element);
	}
}

const moveEvent = throttle((ev) => {
	const el = new mouseSnow();
	el.init(ev.clientX, ev.clientY);
}, 30);

document.addEventListener("mousemove", moveEvent);
