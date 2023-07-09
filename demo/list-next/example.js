import "./load.js";

const resizeElement = document.querySelector("#resize");

window.addEventListener("resize", (ev) => {
	if (visualViewport.width >= 1000) {
		resizeElement.colCount = 4;
	} else {
		resizeElement.colCount = 2;
	}
});
