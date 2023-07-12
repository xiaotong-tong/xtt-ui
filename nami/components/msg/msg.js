import { xttRelectElement } from "../../../components/com/reflect.js";
import html from "./msg.html";
import style from "./msg.css" assert { type: "css" };
import { throttle } from "xtt-utils";
import { replace } from "xtt-msg";

export class xttMsgElement extends xttRelectElement {
	static templateContent = html;
	static stylesContent = [style];

	constructor() {
		super();

		this.#run.addEventListener("click", () => {
			this.#doShowText();
		});

		const doChangeHighlight = throttle(this.#changeHighlight.bind(this), 500);
		this.#left.addEventListener("input", doChangeHighlight);
	}

	connectedCallback() {
		super.connectedCallback();

		this.#left.textContent = this.textContent;

		this.#doShowText();
		this.#changeHighlight();
	}

	_reflectElementAdded() {
		this.#left.textContent = this.textContent;

		this.#doShowText();
		this.#changeHighlight();
	}

	#oldRangeList = [];
	#changeHighlight() {
		if (!CSS.highlights) {
			return;
		}
		const left = this.#left.childNodes;

		const rangeList = [];

		left.forEach((textNode) => {
			for (const match of textNode.nodeValue.matchAll(/!\[[^\]]+\]|-->>/g)) {
				const range = new Range();
				range.setStart(textNode, match.index);
				range.setEnd(textNode, match.index + match[0].length);
				rangeList.push(range);
			}
		});

		let highlight;
		// 因为 CSS.highlights 只存在与 windows 中，所以所有的组件都会共用一个高亮
		// 所以需要先判断是否存在，如果存在则直接使用，否则创建一个新的
		// 如果不进行判断，那么只有最后一个组件会有高亮，先追加的组件的高亮设置会被后追加的组件覆盖
		if (CSS.highlights.has("xtt-highlight")) {
			highlight = CSS.highlights.get("xtt-highlight");

			// 删除上次的高亮，不如每次修改都会追加一大堆重复的高亮
			if (this.#oldRangeList.length) {
				this.#oldRangeList.forEach((range) => highlight.delete(range));
			}

			rangeList.forEach((range) => highlight.add(range));
		} else {
			highlight = new Highlight(...rangeList);
		}
		// 设置高亮
		CSS.highlights.set("xtt-highlight", highlight);

		// 保存当前组件内的高亮，用于下次更新时删除
		this.#oldRangeList = rangeList;
	}

	async #doShowText() {
		const start = Date.now();
		const text = this.#left.value;
		if (!text) {
			return;
		}
		console.time(text);
		this.#right.innerHTML = await replace(text);
		console.timeEnd(text);
		this.#time.textContent = "用时: " + (Date.now() - start) + "ms";
	}

	get #run() {
		return this.shadowRoot.querySelector("#run");
	}
	get #left() {
		return this.shadowRoot.querySelector("#left");
	}
	get #right() {
		return this.shadowRoot.querySelector("#right");
	}
	get #time() {
		return this.shadowRoot.querySelector("#time");
	}
}
