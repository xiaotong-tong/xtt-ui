import { randomHexColor } from "../oss/xtt-utils/index.esm.js";

/**
 * 鼠标雪花
 * @class
 * @param {number} x - 鼠标x坐标
 * @param {number} y - 鼠标y坐标
 * @param {string} color - 颜色
 * @example
 * new mouseSnow(100, 100);
 */
export class mouseSnow {
	/**
	 * 雪花字符
	 * @type {string}
	 */
	static character = "*";

	static #updateStyle(el, style) {
		for (const [key, value] of Object.entries(style)) {
			el.style[key] = value;
		}
	}

	/**
	 * @param {number} x - 鼠标x坐标
	 * @param {number} y - 鼠标y坐标
	 * @param {string} [color] - 颜色, 默认会在 #000000 ~ #ffffff 之间随机生成
	 */
	constructor(x, y, color) {
		this.init(x, y, color);
	}

	/**
	 * 雪花生命周期
	 * @type {number}
	 * @private
	 */
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
		if (x === undefined || y === undefined) {
			console.warn("x or y is not defined, please check your code.");
			return;
		}
		// x, y 坐标修正, 使雪花不被鼠标指针遮挡
		this.#position.x = x - 10;
		this.#position.y = y - 20;

		this.#initialStyles.color = color ?? randomHexColor();
		this.#element = document.createElement("span");
		this.#element.innerHTML = mouseSnow.character;
		mouseSnow.#updateStyle(this.#element, this.#initialStyles);
		this.#update();
		document.body.appendChild(this.#element);
	}

	#velocity() {
		return {
			x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
			y: 1
		};
	}

	#update() {
		const velocity = this.#velocity();
		this.#position.x += velocity.x;
		this.#position.y += velocity.y;
		this.#lifeSpan--;
		this.#element.style.transform = `translate(${this.#position.x}px,${
			this.#position.y
		}px) scale(${this.#lifeSpan / 120})`;

		// 雪花生命周期小于 30 时, 移除雪花
		// 30 是一个经验值, 可以根据实际情况调整，在值太小时，雪花在视觉上已经不可见，所以这里不设置为 0，减少一些性能开销
		if (this.#lifeSpan < 30) {
			this.#die();
			return;
		}

		// 递归调用, 使雪花动起来
		// 这里因为 requestAnimationFrame 有自己的 this, 所以需要 bind(this) 传入 this，使 this 指向当前实例
		requestAnimationFrame(this.#update.bind(this));
	}

	#die() {
		this.#element.parentNode?.removeChild(this.#element);
	}
}
