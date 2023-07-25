import "./load.js";

const operate = document.getElementById("operate");

document.getElementById("setBlock").addEventListener("click", () => {
	operate.toggleAttribute("block", true);
});

document.getElementById("removeBlock").addEventListener("click", () => {
	operate.removeAttribute("block");
});
