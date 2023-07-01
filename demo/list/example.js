import "./load.js";

document.querySelector("#resize").addEventListener("xtt-resize", (ev) => {
	if (ev.detail.width >= 600) {
		ev.detail.next = 4;
	} else {
		ev.detail.next = 2;
	}
});
