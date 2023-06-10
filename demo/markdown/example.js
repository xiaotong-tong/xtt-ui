import "./load.js";

const code = document.getElementById("code");

fetch("./example.md")
	.then((res) => {
		return res.text();
	})
	.then((text) => {
		code.textContent = text;

		setTimeout(() => {
			console.log(code.headers);
		}, 0);
	});
