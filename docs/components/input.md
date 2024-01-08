<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-input.js"),
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
		disabled: false
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
	
	operate.addEventListener("input", (e) => {
		valueController.setValue(e.target.value);
	});

});

onUnmounted(() => {
	gui.destroy();
});
</script>

# Input 输入框

输入框，用于替代原生的 input 元素，提供丰富的样式和功能。

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-input id="operate" placeholder="placeholder" />
	</div>
</section>

## 基础用法

<section class="wrap">
	<xtt-input />
	<xtt-input placeholder="placeholder" />
	<xtt-input value="input value" />
	<xtt-input value="readonly value" readonly />
	<xtt-input value="disabled value" disabled />
</section>

```html
<xtt-input />
<xtt-input placeholder="placeholder" />
<xtt-input value="input value" />
<xtt-input value="readonly value" readonly />
<xtt-input value="disabled value" disabled />
```

## block

将输入框转换为块级元素。

<section class="wrap">
	<xtt-input block />
</section>

```html
<xtt-input block />
```
