<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-tooltip.js"),
		import("../../dist/xtt-text-button.js"),
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
		size: "default"
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
	gui.add(obj, "type", ["default", "primary", "danger","success", "warning", "base"]).onChange((value) => {
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

# Text Button 按钮

文字按钮

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-text-button id="operate">default</xtt-text-button>
	</div>
</section>

## 基础用法

<section class="wrap">
	<xtt-text-button>default</xtt-text-button>
	<xtt-text-button style="max-width: 200px">long long long long long long long long text with max width is 200px</xtt-text-button>
	<xtt-text-button disabled>disabled</xtt-text-button>
	<xtt-text-button autofocus>autofocus</xtt-text-button>
</section>

<p>
	在内部文字超出最大可显示宽度时, button 内的文字会显示 ...
	省略，同时在鼠标 hover 或者 focus 时, 会显示一个 tooltip,
	tooltip 的内容为全部的文字
</p>

```html
<xtt-text-button>default</xtt-text-button>
<xtt-text-button style="max-width: 200px"
	>long long long long long long long long text with max width is 200px</xtt-text-button
>
<xtt-text-button disabled>disabled</xtt-text-button>
<xtt-text-button autofocus>autofocus</xtt-text-button>
```

## type 样式

type 会更改按钮的显示风格，目前支持 6 种风格，分别为 primary、danger、success、warning、base、default

<section class="wrap">
	<xtt-text-button type="primary">primary</xtt-text-button>
	<xtt-text-button type="danger">danger</xtt-text-button>
	<xtt-text-button type="success">success</xtt-text-button>
	<xtt-text-button type="warning">warning</xtt-text-button>
	<xtt-text-button type="base">base</xtt-text-button>
	<xtt-text-button>default</xtt-text-button>
</section>

```html
<xtt-text-button type="primary">primary</xtt-text-button>
<xtt-text-button type="danger">danger</xtt-text-button>
<xtt-text-button type="success">success</xtt-text-button>
<xtt-text-button type="warning">warning</xtt-text-button>
<xtt-text-button type="base">base</xtt-text-button>
<xtt-text-button>default</xtt-text-button>
```

## size 尺寸

按钮尺寸，目前支持 3 种尺寸，分别为 large、default、small

<section class="wrap">
	<xtt-text-button size="large">large</xtt-text-button>
	<xtt-text-button>default</xtt-text-button>
	<xtt-text-button size="small">small</xtt-text-button>
</section>

```html
<xtt-text-button size="large">large</xtt-text-button>
<xtt-text-button>default</xtt-text-button>
<xtt-text-button size="small">small</xtt-text-button>
```

## block

将按钮转换为块级元素。

<section class="wrap">
	<xtt-text-button block>block</xtt-text-button>
	<xtt-text-button type="primary" block>block</xtt-text-button>
	<xtt-text-button type="danger" block>block</xtt-text-button>
	<xtt-text-button type="success" block>block</xtt-text-button>
	<xtt-text-button type="warning" block>block</xtt-text-button>
	<xtt-text-button type="base" block>block</xtt-text-button>
</section>

```html
<xtt-text-button block>block</xtt-text-button>
<xtt-text-button type="primary" block>block</xtt-text-button>
<xtt-text-button type="danger" block>block</xtt-text-button>
<xtt-text-button type="success" block>block</xtt-text-button>
<xtt-text-button type="warning" block>block</xtt-text-button>
<xtt-text-button type="base" block>block</xtt-text-button>
```

## line

设置按钮内文字的最大行数，当文字超出最大行数时，会显示 ... 省略号。默认为 1

<section class="wrap">
	<xtt-text-button style="max-width: 200px" line="2">long long long long long long long long text</xtt-text-button>
</section>

```html
<xtt-text-button style="max-width: 200px" line="2">long long long long long long long long text</xtt-text-button>
```
