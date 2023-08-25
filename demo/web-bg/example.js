import "./load.js";

const webBg = document.getElementById("webBg");
const set = document.getElementById("set");
const remove = document.getElementById("remove");

const light = document.getElementById("light");
const removeLight = document.getElementById("removeLight");

set.addEventListener("click", () => {
	webBg.setAttribute("mask", "");
});
remove.addEventListener("click", () => {
	webBg.removeAttribute("mask");
});

light.addEventListener("click", () => {
	webBg.setAttribute("light", "");
});
removeLight.addEventListener("click", () => {
	webBg.removeAttribute("light");
});

const clean = document.getElementById("clean");
clean.addEventListener("click", () => {
	webBg.clean();
});
