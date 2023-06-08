import { throttle } from "../utils/xtt-utils.js";
import { mouseSnow } from "../../dist/plugins/xtt-mouseSnow.js";

const redEl = document.querySelector(".red");
const greenEl = document.querySelector(".green");
const blueEl = document.querySelector(".blue");

redEl.addEventListener(
	"mousemove",
	throttle((ev) => {
		new mouseSnow(ev.clientX, ev.clientY, { color: "red" });
	}, 30)
);
greenEl.addEventListener(
	"mousemove",
	throttle((ev) => {
		new mouseSnow(ev.clientX, ev.clientY, { color: "green" });
	}, 30)
);
blueEl.addEventListener(
	"mousemove",
	throttle((ev) => {
		new mouseSnow(ev.clientX, ev.clientY, { color: "blue" });
	}, 30)
);

const char = document.querySelector(".char");
char.addEventListener(
	"mousemove",
	throttle((ev) => {
		new mouseSnow(ev.clientX, ev.clientY, { character: "+" });
	}, 30)
);
