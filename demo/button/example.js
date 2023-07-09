import "./load.js";

const operate = document.getElementById("operate");

const content = document.getElementById("content");
document.getElementById("getContent").addEventListener("click", () => {
	content.value = operate.textContent;
});
document.getElementById("setContent").addEventListener("click", () => {
	operate.textContent = content.value;
});

document.getElementById("setMaxWidth").addEventListener("click", () => {
	const value = document.getElementById("maxWidth").value;
	operate.style.maxWidth = value + "px";
});

document.getElementById("setline").addEventListener("click", () => {
	const value = document.getElementById("lineValue").value;
	operate.setAttribute("line", value);
});

document.getElementById("setIcon").addEventListener("click", () => {
	const icon = document.createElement("xtt-icon");
	icon.setAttribute("icon", "power");
	icon.slot = "icon";
	operate.appendChild(icon);
});

document.getElementById("removeIcon").addEventListener("click", () => {
	const icon = operate.querySelector("xtt-icon");
	icon?.remove();
});

document.getElementById("setPrimary").addEventListener("click", () => {
	operate.setAttribute("type", "primary");
});

document.getElementById("setBase").addEventListener("click", () => {
	operate.setAttribute("type", "base");
});

document.getElementById("removeType").addEventListener("click", () => {
	operate.removeAttribute("type");
});

document.getElementById("setText").addEventListener("click", () => {
	operate.toggleAttribute("text", true);
});

document.getElementById("removeText").addEventListener("click", () => {
	operate.removeAttribute("text");
});

document.getElementById("setLargeSize").addEventListener("click", () => {
	operate.setAttribute("size", "large");
});

document.getElementById("removeSize").addEventListener("click", () => {
	operate.removeAttribute("size");
});

document.getElementById("setBlock").addEventListener("click", () => {
	operate.toggleAttribute("block", true);
});

document.getElementById("removeBlock").addEventListener("click", () => {
	operate.removeAttribute("block");
});
