import "./load.js";

const line = document.getElementById("lineBtn");
const setMaxWidth = document.getElementById("setMaxWidth");
const maxWidthValue = document.getElementById("maxWidthValue");

setMaxWidth.addEventListener("click", () => {
	const value = maxWidthValue.value;
	line.style.maxWidth = value + "px";
});

const lineValue = document.getElementById("lineValue");
const setline = document.getElementById("setline");

setline.addEventListener("click", () => {
	const value = lineValue.value;
	line.setAttribute("line", value);
});

const lineContent = document.getElementById("lineContent");
const setLineContent = document.getElementById("setLineContent");

setLineContent.addEventListener("click", () => {
	const value = lineContent.value;
	line.textContent = value;
});
