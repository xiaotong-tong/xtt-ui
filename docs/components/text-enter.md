<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-tooltip.js"),
		import("../../dist/xtt-text-enter.js"),
		import("../../dist/xtt-button.js"),
	])

	const operate = document.getElementById("operate");

	gui = new GUI({
		container: document.querySelector(".operate-wrapper")
	});

	const obj = {
		content: "default",
		type: "default",
		interval: 100,
		reload() {
			operate.reload();
		}
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
	gui.add(obj, "interval").onChange((value) => {
		operate.interval = value;
	});
	gui.add(obj, "reload");
	

});

onUnmounted(() => {
	gui.destroy();
});

function reload() {
	document.getElementById("reload").reload();
}
</script>

# Text Enter 文字输入

文字输入动画元素，提供丰富的样式和功能。

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-text-enter id="operate">default</xtt-text-enter>
	</div>
</section>

## 基础用法

<section class="wrap">
	<xtt-text-enter>文字输入动画元素，提供丰富的样式和功能。</xtt-text-enter>
</section>

```html
<xtt-text-enter>文字输入动画元素，提供丰富的样式和功能。</xtt-text-enter>
```

## type 样式

type 会更改按钮的显示风格，目前支持 5 种风格，分别为 primary、danger、success、warning、default

<section class="wrap">
	<xtt-text-enter type="primary">primary</xtt-text-enter>
	<xtt-text-enter type="danger">danger</xtt-text-enter>
	<xtt-text-enter type="success">success</xtt-text-enter>
	<xtt-text-enter type="warning">warning</xtt-text-enter>
	<xtt-text-enter>default</xtt-text-enter>
</section>

```html
<xtt-text-enter type="primary">primary</xtt-text-enter>
<xtt-text-enter type="danger">danger</xtt-text-enter>
<xtt-text-enter type="success">success</xtt-text-enter>
<xtt-text-enter type="warning">warning</xtt-text-enter>
<xtt-text-enter>default</xtt-text-enter>
```

## interval && reload

<section class="wrap">
	<xtt-text-enter interval="1000" id="reload">文字输入动画元素，提供丰富的样式和功能。</xtt-text-enter>
	<xtt-button @click="reload">reload</xtt-button>
</section>

```html
<xtt-text-enter interval="1000" id="reload">文字输入动画元素，提供丰富的样式和功能。</xtt-text-enter>
<xtt-button @click="reload">reload</xtt-button>
<script>
	function reload() {
		document.getElementById("reload").reload();
	}
</script>
```
