import "./load.js";

const open1 = document.getElementById("open1");
const dialog1 = document.getElementById("dialog1");
dialog1.triggerElement = open1;
open1.addEventListener("click", () => {
	dialog1.open();
});

document.getElementById("open2").addEventListener("click", () => {
	document.getElementById("dialog2").open();
});

document.getElementById("open3").addEventListener("click", () => {
	document.getElementById("dialog3").open();
});

document.getElementById("open4").addEventListener("click", () => {
	document.getElementById("dialog4").open();
});

document.getElementById("open5").addEventListener("click", () => {
	document.getElementById("dialog5").open();
});

document.getElementById("open6").addEventListener("click", () => {
	document.getElementById("dialog6").open();
});
