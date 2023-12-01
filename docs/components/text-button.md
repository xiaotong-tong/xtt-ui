<script setup>
import { onMounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-tooltip.js"),
		import("../../dist/xtt-text-button.js"),
	])

	const operate = document.getElementById("operate");

	const gui = new GUI({
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
</script>

# Text-Button 按钮

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
	>long long long long long long long long text with max width is
	200px</xtt-text-button
>
<xtt-text-button disabled>disabled</xtt-text-button>
<xtt-text-button autofocus>autofocus</xtt-text-button>
```

## type 样式

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

<section class="wrap">
	<xtt-text-button block>block</xtt-text-button>
	<xtt-text-button type="primary" block>block</xtt-text-button>
	<xtt-text-button type="danger" block>block</xtt-text-button>
</section>

```html
<xtt-text-button block>block</xtt-text-button>
<xtt-text-button type="primary" block>block</xtt-text-button>
<xtt-text-button type="danger" block>block</xtt-text-button>
```

## line

<section class="wrap">
	<xtt-text-button style="max-width: 200px" line="2">long long long long long long long long text</xtt-text-button>
</section>

```html
<xtt-text-button style="max-width: 200px" line="2"
	>long long long long long long long long text</xtt-text-button
>
```
