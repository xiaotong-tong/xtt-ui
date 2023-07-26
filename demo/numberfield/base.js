import "./load.js";

const input = document.querySelector("#input");
input.addEventListener("change", (e) => {
	console.log(e.target.value);
});
document.querySelector("#input").addEventListener("input", () => {
	console.log(input.value);
});
