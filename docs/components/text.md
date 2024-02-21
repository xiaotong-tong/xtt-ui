<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-text.js"),
	])

	const operate = document.getElementById("operate");

	gui = new GUI({
		container: document.querySelector(".operate-wrapper")
	});

	const obj = {
		content: "default",
		type: "default",
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
	

});

onUnmounted(() => {
	gui.destroy();
});
</script>

# Text 文字

文字元素，提供丰富的样式和功能。

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-text id="operate">default</xtt-text>
	</div>
</section>

## 基础用法

<section class="wrap">
	<xtt-text>text</xtt-text>
</section>

```html
<xtt-text>text</xtt-text>
```

## type 样式

type 会更改按钮的显示风格，目前支持 5 种风格，分别为 primary、danger、success、warning、default

<section class="wrap">
	<xtt-text type="primary">primary</xtt-text>
	<xtt-text type="danger">danger</xtt-text>
	<xtt-text type="success">success</xtt-text>
	<xtt-text type="warning">warning</xtt-text>
	<xtt-text>default</xtt-text>
</section>

```html
<xtt-text type="primary">primary</xtt-text>
<xtt-text type="danger">danger</xtt-text>
<xtt-text type="success">success</xtt-text>
<xtt-text type="warning">warning</xtt-text>
<xtt-text>default</xtt-text>
```
