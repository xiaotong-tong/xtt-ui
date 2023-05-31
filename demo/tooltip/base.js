import "../../components/xtt-tooltip.js";

document
  .getElementById("initTriggerTooltip")
  .initTrigger(document.querySelectorAll(".initTrigger"));

document
  .querySelector("#preventDefaultBtn")
  .addEventListener("xtt-tooltip-show", (ev) => {
    ev.preventDefault();
  });
