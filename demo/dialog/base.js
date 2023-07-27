import "./load.js";

const open = document.getElementById("open");
const dialog = document.getElementById("dialog");

open.addEventListener("click", () => {
	dialog.open();
});
