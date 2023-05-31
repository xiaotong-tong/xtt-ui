import { randomHexColor } from "../oss/xtt-utils/index.esm.js";
import { updateElementStyle } from "../utils/xtt-ui-utils.js";

/**
 * 鼠标雪花
 * @class
 * @example
 * new mouseSnow(100, 100);
 */
export class mouseSnow {
  /**
   * @param {number} x - 鼠标x坐标
   * @param {number} y - 鼠标y坐标
   * @param {object} options - 配置项
   * @param {string} options.color - 颜色, 默认会在 #000000 ~ #ffffff 之间随机生成
   * @param {string} options.character - 雪花字符，默认为 *
   * @param {number} options.lifeSpan - 生命周期，默认为 120 帧
   */
  constructor(x, y, options) {
    this.init(x, y, options);
  }

  /** @type {number} */
  #lifeSpan = 120;
  #originLifeSpan = 120;

  /** @type {HTMLElement} */
  #element;
  #position = {
    x: 0,
    y: 0,
  };

  init(x, y, options) {
    if (x === undefined || y === undefined) {
      console.warn("x or y is not defined, please check your code.");
      return;
    }
    // x, y 初始坐标修正, 使雪花不被鼠标指针遮挡
    this.#position.x = x - 10;
    this.#position.y = y - 20;

    this.#lifeSpan = this.#originLifeSpan = options?.lifeSpan ?? 120;

    this.#element = document.createElement("span");
    this.#element.innerHTML = options?.character ?? "*";
    updateElementStyle(this.#element, {
      position: "fixed",
      top: "0",
      pointerEvents: "none",
      "z-index": "10000000",
      fontSize: "20px",
      "will-change": "transform",
      color: options?.color ?? randomHexColor(),
    });

    this.#update();
    document.body.appendChild(this.#element);
  }

  get #velocity() {
    return {
      x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
      y: 1,
    };
  }

  #update() {
    const velocity = this.#velocity;
    this.#position.x += velocity.x;
    this.#position.y += velocity.y;
    this.#lifeSpan--;

    const scalePercent = this.#lifeSpan / this.#originLifeSpan;

    this.#element.style.transform = `translate(${this.#position.x}px,${
      this.#position.y
    }px) scale(${scalePercent})`;

    // 雪花缩放倍率小于 0.114 时销毁当前实例
    // 0.114 是一个经验值, 可以根据实际情况调整，在值太小时，雪花在视觉上已经不可见，所以这里不设置为 0，减少一些性能开销
    if (scalePercent < 0.114) {
      this.#die();
      return;
    }

    // 递归调用, 雪花动画
    // 这里因为 requestAnimationFrame 中的函数 this 指向 window, 所以需要 bind(this) 传入 this，使 this 指向当前实例
    requestAnimationFrame(this.#update.bind(this));
  }

  #die() {
    this.#element.parentNode?.removeChild(this.#element);
  }
}
