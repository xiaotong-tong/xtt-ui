import "../../components/xtt-button.js";
import "../../_internal/components/xtt-code.js";

const defaultBtn = document.getElementById("default");
const event = document.querySelector(".event");

const appendEvent = (text) => {
	const span = document.createElement("span");
	span.innerText = text;
	event.appendChild(span);
};
defaultBtn.addEventListener("click", () => {
	appendEvent("click");
});
defaultBtn.addEventListener("focus", () => {
	appendEvent("focus");
});
defaultBtn.addEventListener("blur", () => {
	appendEvent("blur");
});
defaultBtn.addEventListener("keydown", () => {
	appendEvent("keydown");
});
