<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-tooltip.js"),
		import("../../dist/xtt-button.js"),
	])

	const operate = document.getElementById("operate");

	gui = new GUI({
		container: document.querySelector(".operate-wrapper")
	});

	const obj = {
		content: "default",
		maxWidth: -1,
		type: "default",
		line: 1,
		block: false,
		size: "default",
		disabled: false,
	};

	gui.add(obj, "content").onChange((value) => {
		operate.textContent = value;
	});
	gui.add(obj, "maxWidth", -1).onChange((value) => {
		if (value === -1) {
			operate.style.maxWidth = "";
			return;
		}
		operate.style.maxWidth = value + "px";
	});
	gui.add(obj, "line", 1).onChange((value) => {
		if (value === 1) {
			operate.line = null;
			return;
		}
		operate.line = value;
	});
	gui.add(obj, "block").onChange((value) => {
		operate.block = value;
	});
	gui.add(obj, "size", ["default", "large", "small"]).onChange((value) => {
		if (value === "default") {
			operate.removeAttribute("size");
			return;
		}
		operate.size = value
	});
	gui.add(obj, "type", ["default", "primary", "danger", "success", "warning", "base"]).onChange((value) => {
		if (value === "default") {
			operate.removeAttribute("type");
			return;
		}
		operate.type = value
	});
	gui.add(obj, "disabled").onChange((value) => {
		operate.disabled = value
	});
});

onUnmounted(() => {
	gui.destroy();
});
</script>

# Button 按钮

按钮，用于替代原生的 button 元素，提供更丰富的样式和功能。

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-button id="operate">default</xtt-button>
	</div>
</section>

## 基础用法

<section class="wrap">
	<xtt-button>default</xtt-button>
	<xtt-button style="max-width: 200px">long long long long long long long long text with max width is 200px</xtt-button>
	<xtt-button disabled>disabled</xtt-button>
	<xtt-button autofocus>autofocus</xtt-button>
</section>

<p>
	在内部文字超出最大可显示宽度时, button 内的文字会显示 ...
	省略，同时在鼠标 hover 或者 focus 时, 会显示一个 tooltip,
	tooltip 的内容为全部的文字
</p>

```html
<xtt-button>default</xtt-button>
<xtt-button style="max-width: 200px"
	>long long long long long long long long text with max width is
	200px</xtt-button
>
<xtt-button disabled>disabled</xtt-button>
<xtt-button autofocus>autofocus</xtt-button>
```

## type 样式

type 会更改按钮的显示风格，目前支持 4 种风格，分别为 default、primary、danger、base

<section class="wrap">
	<xtt-button type="primary">primary</xtt-button>
	<xtt-button type="danger">danger</xtt-button>
	<xtt-button type="success">success</xtt-button>
	<xtt-button type="warning">warning</xtt-button>
	<xtt-button type="base">base</xtt-button>
	<xtt-button>default</xtt-button>
</section>

```html
<xtt-button type="primary">primary</xtt-button>
<xtt-button type="danger">danger</xtt-button>
<xtt-button type="success">success</xtt-button>
<xtt-button type="warning">warning</xtt-button>
<xtt-button type="base">base</xtt-button>
<xtt-button>default</xtt-button>
```

## size 尺寸

<section class="wrap">
	<xtt-button size="large">large</xtt-button>
	<xtt-button>default</xtt-button>
	<xtt-button size="small">small</xtt-button>
</section>

```html
<xtt-button size="large">large</xtt-button>
<xtt-button>default</xtt-button>
<xtt-button size="small">large</xtt-button>
```

## block

<section class="wrap">
	<xtt-button block>block</xtt-button>
	<xtt-button type="primary" block>block</xtt-button>
	<xtt-button type="danger" block>block</xtt-button>
</section>

```html
<xtt-button block>block</xtt-button>
<xtt-button type="primary" block>block</xtt-button>
<xtt-button type="danger" block>block</xtt-button>
```

## line

<section class="wrap">
	<xtt-button style="max-width: 200px" line="2">long long long long long long long long text</xtt-button>
</section>

```html
<xtt-button style="max-width: 200px" line="2"
	>long long long long long long long long text</xtt-button
>
```
