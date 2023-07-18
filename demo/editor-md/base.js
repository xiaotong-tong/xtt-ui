import "./load.js";

const editor = document.querySelector("#editor");

editor.addEventListener("input", (ev) => {
	console.log("inputEvent");
});
editor.addEventListener("change", (ev) => {
	const el = ev.target;
	console.log("value:" + el.value);
	console.log("parsed:" + el.parsed);
});
