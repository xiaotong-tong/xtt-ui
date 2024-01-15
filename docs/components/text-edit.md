<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-text-edit.js"),
	])

	const operate = document.getElementById("operate");

	gui = new GUI({
		container: document.querySelector(".operate-wrapper")
	});

	const obj = {
		value: "",
		maxWidth: -1,
		block: false,
		readOnly: false,
		disabled: false,
		rows: 3,
		autosize: false,
	};

	const valueController = gui.add(obj, "value").onChange((value) => {
		operate.value = value;
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
	gui.add(obj, "rows", 1).onChange((value) => {
		operate.rows = value;
	});
	
	operate.addEventListener("input", (e) => {
		valueController.setValue(e.target.value);
	});

});

onUnmounted(() => {
	gui.destroy();
});
</script>

# Text Edit 输入框

输入框，用于替代原生的 textarea 元素，提供丰富的样式和功能。

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-text-edit id="operate"></xtt-text-edit>
	</div>
</section>

## 基础用法

<section class="wrap">
	<xtt-text-edit>This is text-edit</xtt-text-edit>
	<xtt-text-edit value="input value"></xtt-text-edit>
	<xtt-text-edit readonly></xtt-text-edit>
	<xtt-text-edit disabled></xtt-text-edit>
</section>

```html
<xtt-text-edit>This is textarea</xtt-text-edit>
```

## block

将输入框转换为块级元素。

<section class="wrap">
	<xtt-text-edit block></xtt-text-edit>
</section>

```html
<xtt-text-edit block></xtt-text-edit>
```

## rows

设置输入框的行数。（显示的高度）

<section class="wrap">
	<xtt-text-edit rows="1"></xtt-text-edit>
	<xtt-text-edit rows="5"></xtt-text-edit>
</section>

```html
<xtt-text-edit rows="1"></xtt-text-edit>

<xtt-text-edit rows="5"></xtt-text-edit>
```
