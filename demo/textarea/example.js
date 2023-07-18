import "./load.js";

const appendTextarea = document.createElement("xtt-textarea");
appendTextarea.setAttribute("autosize", "");
document.getElementById("autosizeSection").appendChild(appendTextarea);

const operate = document.getElementById("operate");

document.getElementById("setBlock").addEventListener("click", () => {
	operate.toggleAttribute("block", true);
});

document.getElementById("removeBlock").addEventListener("click", () => {
	operate.removeAttribute("block");
});

document.getElementById("setRows").addEventListener("click", () => {
	const rows = document.getElementById("rowsValue").value;
	operate.setAttribute("rows", rows);
});
document.getElementById("removeRows").addEventListener("click", () => {
	operate.removeAttribute("rows");
});

document.getElementById("setAutosize").addEventListener("click", () => {
	operate.setAttribute("autosize", "");
});
document.getElementById("removeAutosize").addEventListener("click", () => {
	operate.removeAttribute("autosize");
});
