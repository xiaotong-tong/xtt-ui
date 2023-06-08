import { throttle } from "../xtt-utils/index.esm.js";
import { mouseSnow } from "../../dist/plugins/xtt-mouseSnow.js";

const init = (ev) => {
	new mouseSnow(ev.clientX, ev.clientY);
};

const moveEvent = throttle(init, 30);
const touchEvent = throttle((ev) => {
	for (const touch of ev.touches) {
		init(touch);
	}
}, 30);

document.addEventListener("mousemove", moveEvent);
document.addEventListener("touchmove", touchEvent);
