import "./load.js";
import GUI from "../../_internal/lil-gui.js";

const operate = document.getElementById("operate");

const gui = new GUI({
	container: document.querySelector(".operate-wrapper")
});

const obj = {
	content: "default",
	maxWidth: -1,
	line: 1,
	hasIcon: false
};

gui.add(obj, "content").onChange((value) => {
	operate.textContent = value;
});
gui.add(obj, "maxWidth", -1).onChange((value) => {
	if (value === -1) {
		operate.style.maxWidth = "";
		return;
	}
	operate.style.maxWidth = value + "px";
});
gui.add(obj, "line", 1).onChange((value) => {
	if (value === 1) {
		operate.line = null;
		return;
	}
	operate.line = value;
});
gui.add(obj, "hasIcon").onChange((value) => {
	if (value) {
		const icon = document.createElement("xtt-icon");
		icon.setAttribute("icon", "power");
		icon.slot = "icon";
		operate.appendChild(icon);
	} else {
		const icon = operate.querySelector("xtt-icon");
		icon?.remove();
	}
});

const appendBtn = document.createElement("xtt-button");
appendBtn.textContent = "Append";
document
	.querySelectorAll("section")[1]
	.querySelector("p")
	.insertAdjacentElement("beforebegin", appendBtn);

document.getElementById("setPrimary").addEventListener("click", () => {
	operate.setAttribute("type", "primary");
});

document.getElementById("setDanger").addEventListener("click", () => {
	operate.setAttribute("type", "danger");
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
