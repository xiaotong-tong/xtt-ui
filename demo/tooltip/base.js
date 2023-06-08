import "../../dist/_xtt-code.js";
import "../../dist/xtt-tooltip.js";

document.getElementById("initTriggerTooltip").initTrigger(document.querySelectorAll(".initTrigger"));

document.querySelector("#preventDefaultBtn").addEventListener("xtt-tooltip-show", (ev) => {
	ev.preventDefault();
});
