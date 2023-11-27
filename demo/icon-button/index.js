import "./load.js";
import GUI from "../../_internal/lil-gui.js";

const operate = document.getElementById("operate");

const gui = new GUI({
	container: document.querySelector(".operate-wrapper")
});

const obj = {
	type: "none",
	size: "none",
	"data-xtt-tooltip": ""
};

gui.add(obj, "type", {
	none: "none",
	primary: "primary",
	success: "success",
	warning: "warning",
	danger: "danger",
	base: "base"
}).onChange((value) => {
	if (value === "none") {
		operate.removeAttribute("type");
		return;
	}

	operate.setAttribute("type", value);
});

gui.add(obj, "size", {
	large: "large",
	small: "small",
	none: "none"
}).onChange((value) => {
	if (value === "none") {
		operate.removeAttribute("size");
		return;
	}

	operate.setAttribute("size", value);
});

gui.add(obj, "data-xtt-tooltip").onChange((value) => {
	if (value) {
		operate.setAttribute("data-xtt-tooltip", value);
		return;
	}

	operate.removeAttribute("data-xtt-tooltip");
});
