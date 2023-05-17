import { throttle } from "../../oss/xtt-utils/index.esm.js";
import { mouseSnow } from "../../plugins/xtt-mouseSnow.js";

const redEl = document.querySelector(".red");
const greenEl = document.querySelector(".green");
const blueEl = document.querySelector(".blue");

redEl.addEventListener(
	"mousemove",
	throttle((ev) => {
		new mouseSnow(ev.clientX, ev.clientY, "red");
	}, 30)
);
greenEl.addEventListener(
	"mousemove",
	throttle((ev) => {
		new mouseSnow(ev.clientX, ev.clientY, "green");
	}, 30)
);
blueEl.addEventListener(
	"mousemove",
	throttle((ev) => {
		new mouseSnow(ev.clientX, ev.clientY, "blue");
	}, 30)
);

const char = document.querySelector(".char");
char.addEventListener(
	"mousemove",
	throttle((ev) => {
		mouseSnow.character = "+";
		new mouseSnow(ev.clientX, ev.clientY);
		mouseSnow.character = "*";
	}, 30)
);
