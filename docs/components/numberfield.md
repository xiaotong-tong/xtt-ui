<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-icon.js"),
		import("../../dist/xtt-tooltip.js"),
		import("../../dist/xtt-icon-button.js"),
		import("../../dist/xtt-number-field.js"),
	])

	const operate = document.getElementById("operate");

	gui = new GUI({
		container: document.querySelector(".operate-wrapper")
	});

	const obj = {
		value: "",
		placeholder: "placeholder",
		maxWidth: -1,
		block: false,
		readOnly: false,
		disabled: false,
		min: 0,
		max: 10,
		step: 1,
	};

	const valueController = gui.add(obj, "value").onChange((value) => {
		operate.value = value;
	});
	gui.add(obj, "placeholder").onChange((value) => {
		operate.placeholder = value;
	});

	gui.add(obj, "block").onChange((value) => {
		operate.block = value;
	});
	gui.add(obj, "maxWidth", -1).onChange((value) => {
		if (value === -1) {
			operate.style.maxWidth = "";
			return;
		}
		operate.style.maxWidth = value + "px";
	});
	gui.add(obj, "readOnly").onChange((value) => {
		operate.readOnly = value;
	});
	gui.add(obj, "disabled").onChange((value) => {
		operate.disabled = value;
	});

	gui.add(obj, "min").onChange((value) => {
		operate.min = value;
	});

	gui.add(obj, "max").onChange((value) => {
		operate.max = value;
	});

	gui.add(obj, "step").onChange((value) => {
		operate.step = value;
	});
	
	operate.addEventListener("input", (e) => {
		valueController.setValue(e.target.value);
	});

});

onUnmounted(() => {
	gui.destroy();
});
</script>

# NumberField 输入框

数字输入框，用于替代原生的 type="number" input 元素，提供丰富的样式和功能。

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-number-field id="operate" placeholder="placeholder" min="0" max="10" step="1" />
	</div>
</section>

## 基础用法

<section class="wrap">
	<xtt-number-field />
	<xtt-number-field placeholder="placeholder" />
	<xtt-number-field value="1" />
	<xtt-number-field value="0" readonly />
	<xtt-number-field value="0" disabled />
</section>

```html
<xtt-number-field />
<xtt-number-field placeholder="placeholder" />
<xtt-number-field value="1" />
<xtt-number-field value="0" readonly />
<xtt-number-field value="0" disabled />
```

## min & max & step

设置最小值、最大值、步长。

<section class="wrap">
	<xtt-number-field min="0" max="10" step="1" />
	<xtt-number-field min="10" max="20" step="2" />
	<xtt-number-field min="-10" max="10" step="3" />
</section>

```html
<xtt-number-field min="0" max="10" step="1" />
<xtt-number-field min="0" max="10" step="2" />
<xtt-number-field min="0" max="10" step="3" />
```

## block

将输入框转换为块级元素。

<section class="wrap">
	<xtt-number-field block />
</section>

```html
<xtt-number-field block />
```
