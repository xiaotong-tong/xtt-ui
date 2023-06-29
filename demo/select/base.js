import "./load.js";

const selectEvent = document.querySelector("#selectEvent");

selectEvent.addEventListener("change", (event) => {
	console.log(selectEvent.value);
});

const xttSelect = document.querySelector("#xttSelect");

xttSelect.addEventListener("change", () => {
	console.log(xttSelect.value);
});
