<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-tooltip.js"),
		import("../../dist/xtt-icon.js"),
		import("../../dist/xtt-button.js"),
		import("../../dist/xtt-select.js"),
	])

	const operate = document.getElementById("operate");

	gui = new GUI({
		container: document.querySelector(".operate-wrapper")
	});

	const obj = {
		value: operate.value,
		options: "option2",
		disabled: false,
		option1: {
			value: "option1",
			disabled: false,
		},
		option2: {
			value: "option2",
			disabled: false,
		},
		option3: {
			value: "option3",
			disabled: false,
		},
	};

	const valueController = gui.add(obj, "value")

	operate.addEventListener("change", (e) => {
		valueController.setValue(e.target.value);
	});

	gui.add(obj, "options", ["option1", "option2", "option3" ]).onChange((v) => {
		valueController.setValue(obj[v].value);
		operate.value = v;
	});

	gui.add(obj, "disabled").onChange((v) => {
		operate.disabled = v;
	});


	const option1 = gui.addFolder("option1");
	option1.add(obj.option1, "value").onChange((v) => {
		operate.querySelector("option").value = v;
	});
});

onUnmounted(() => {
	gui.destroy();
});
</script>

# Select 选择框

选择框，用来代替原生的 select 元素，提供丰富的样式和功能

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-select id="operate">
			<option>option1</option>
			<option selected>option2</option>
			<option>option3</option>
		</xtt-select>
	</div>
</section>

## 基础用法

<section class="wrap">
	<xtt-select id="operate">
		<option>option1</option>
		<option selected>option2</option>
		<option>option3</option>
	</xtt-select>
</section>

```html
<xtt-select id="operate">
	<option>option1</option>
	<option selected>option2</option>
	<option>option3</option>
</xtt-select>
```
