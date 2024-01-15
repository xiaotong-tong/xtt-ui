<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-textarea.js"),
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
		rows: 3,
		autosize: false,
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
	gui.add(obj, "rows", 1).onChange((value) => {
		operate.rows = value;
	});
	gui.add(obj, "autosize").onChange((value) => {
		operate.autosize = value;
	});
	
	operate.addEventListener("input", (e) => {
		valueController.setValue(e.target.value);
	});

});

onUnmounted(() => {
	gui.destroy();
});
</script>

# Textarea 输入框

输入框，用于替代原生的 textarea 元素，提供丰富的样式和功能。

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-textarea id="operate" placeholder="placeholder"></xtt-textarea>
	</div>
</section>

## 基础用法

<section class="wrap">
	<xtt-textarea>This is textarea</xtt-textarea>
	<xtt-textarea placeholder="placeholder"></xtt-textarea>
	<xtt-textarea value="input value"></xtt-textarea>
	<xtt-textarea readonly></xtt-textarea>
	<xtt-textarea disabled></xtt-textarea>
</section>

```html
<xtt-textarea>This is textarea</xtt-textarea>
```

## block

将输入框转换为块级元素。

<section class="wrap">
	<xtt-textarea block></xtt-textarea>
</section>

```html
<xtt-textarea block></xtt-textarea>
```

## rows

设置输入框的行数。（显示的高度）

<section class="wrap">
	<xtt-textarea rows="1"></xtt-textarea>
	<xtt-textarea rows="5"></xtt-textarea>
</section>

```html
<xtt-textarea rows="1"></xtt-textarea>

<xtt-textarea rows="5"></xtt-textarea>
```

## autosize

自适应内容高度。

<section class="wrap">
	<xtt-textarea autosize></xtt-textarea>
</section>

```html
<xtt-textarea autosize></xtt-textarea>
```
