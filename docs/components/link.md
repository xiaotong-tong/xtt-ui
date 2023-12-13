<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-link.js"),
	])

	const operate = document.getElementById("operate");

	gui = new GUI({
		container: document.querySelector(".operate-wrapper")
	});

	const obj = {
		content: "default",
		maxWidth: -1,
		type: "default",
		block: false,
		"inline-block": false
	};

	gui.add(obj, "content").onChange((value) => {
		operate.textContent = value;
	});
	gui.add(obj, "type", ["default", "primary", "danger","success", "warning"]).onChange((value) => {
		if (value === "default") {
			operate.removeAttribute("type");
			return;
		}
		operate.type = value
	});
	gui.add(obj, "inline-block").onChange((value) => {
		operate.inlineBlock = value;
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
	

});

onUnmounted(() => {
	gui.destroy();
});
</script>

# Link 文字链接

链接，用于替代原生的 a 元素，提供丰富的样式和功能。

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-link id="operate" href="#">default</xtt-link>
	</div>
</section>

## 基础用法

<section class="wrap">
	<xtt-link href="#">link</xtt-link>
	<xtt-link href="#" target="_blank">link</xtt-link>
</section>

```html
<xtt-link href="#">link</xtt-link>

<xtt-link href="#" target="_blank">link</xtt-link>
```

## type 样式

type 会更改按钮的显示风格，目前支持 5 种风格，分别为 primary、danger、success、warning、default

<section class="wrap">
	<xtt-link href="#" type="primary">primary</xtt-link>
	<xtt-link href="#" type="danger">danger</xtt-link>
	<xtt-link href="#" type="success">success</xtt-link>
	<xtt-link href="#" type="warning">warning</xtt-link>
	<xtt-link href="#">default</xtt-link>
</section>

```html
<xtt-link href="#" type="primary">primary</xtt-link>
<xtt-link href="#" type="danger">danger</xtt-link>
<xtt-link href="#" type="success">success</xtt-link>
<xtt-link href="#" type="warning">warning</xtt-link>
<xtt-link href="#">default</xtt-link>
```

## inline-block

将链接转换为行内块元素。

<section class="wrap">
	<xtt-link href="#" inline-block>link</xtt-link>
	<xtt-link href="#" inline-block style="max-width: 200px;">long long long long long long long link</xtt-link>
</section>

```html
<xtt-link href="#" inline-block>link</xtt-link>
<xtt-link href="#" inline-block style="max-width: 200px;">long long long long long long long link</xtt-link>
```

## block

将链接转换为块级元素。并在 hover 时显示灰色背景。

<section class="wrap">
	<xtt-link href="#" block>link</xtt-link>
</section>

```html
<xtt-link href="#" block>link</xtt-link>
```
