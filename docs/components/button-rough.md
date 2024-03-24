<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-tooltip.js"),
		import("../../dist/xtt-loading.js"),
		import("../../dist/xtt-button-rough.js"),
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
		loading: false,
		block: false,
		size: "default",
		disabled: false,
		rtl: false,
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
	gui.add(obj, "loading").onChange((value) => {
		operate.loading = value;
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
	gui.add(obj, "rtl").onChange(value => {
		operate.rtl = value
	})
});

onUnmounted(() => {
	gui.destroy();
});
</script>

# Button Rough 按钮

同 Button 组件，但是样式有些区别

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-button-rough id="operate">default</xtt-button-rough>
	</div>
</section>

## 基础用法

<section class="wrap">
	<xtt-button-rough>default</xtt-button-rough>
	<xtt-button-rough style="max-width: 200px">long long long long long long long long text with max width is 200px</xtt-button-rough>
	<xtt-button-rough disabled>disabled</xtt-button-rough>
	<xtt-button-rough autofocus>autofocus</xtt-button-rough>
</section>

```html
<xtt-button>default</xtt-button-rough>
<xtt-button-rough style="max-width: 200px">long long long long long long long long text with max width is 200px</xtt-button-rough>
<xtt-button-rough disabled>disabled</xtt-button-rough>
<xtt-button-rough autofocus>autofocus</xtt-button-rough>
```

## type 样式

type 会更改按钮的显示风格，目前支持 6 种风格，分别为 primary、danger、success、warning、base、default

<section class="wrap">
	<xtt-button-rough type="primary">primary</xtt-button-rough>
	<xtt-button-rough type="danger">danger</xtt-button-rough>
	<xtt-button-rough type="success">success</xtt-button-rough>
	<xtt-button-rough type="warning">warning</xtt-button-rough>
	<xtt-button-rough type="base">base</xtt-button-rough>
	<xtt-button-rough>default</xtt-button-rough>
</section>

```html
<xtt-button-rough type="primary">primary</xtt-button-rough>
<xtt-button-rough type="danger">danger</xtt-button-rough>
<xtt-button-rough type="success">success</xtt-button-rough>
<xtt-button-rough type="warning">warning</xtt-button-rough>
<xtt-button-rough type="base">base</xtt-button-rough>
<xtt-button-rough>default</xtt-button-rough>
```

## size 尺寸

按钮尺寸，目前支持 3 种尺寸，分别为 large、default、small

<section class="wrap">
	<xtt-button-rough size="large">large</xtt-button-rough>
	<xtt-button-rough>default</xtt-button-rough>
	<xtt-button-rough size="small">small</xtt-button-rough>
</section>

```html
<xtt-button-rough size="large">large</xtt-button-rough>
<xtt-button-rough>default</xtt-button-rough>
<xtt-button-rough size="small">large</xtt-button-rough>
```

## block

将按钮转换为块级元素。

<section class="wrap">
	<xtt-button-rough block>block</xtt-button-rough>
	<xtt-button-rough type="primary" block>block</xtt-button-rough>
	<xtt-button-rough type="danger" block>block</xtt-button-rough>
	<xtt-button-rough type="success" block>block</xtt-button-rough>
	<xtt-button-rough type="warning" block>block</xtt-button-rough>
	<xtt-button-rough type="base" block>block</xtt-button-rough>
</section>

```html
<xtt-button-rough block>block</xtt-button-rough>
<xtt-button-rough type="primary" block>block</xtt-button-rough>
<xtt-button-rough type="danger" block>block</xtt-button-rough>
<xtt-button-rough type="success" block>block</xtt-button-rough>
<xtt-button-rough type="warning" block>block</xtt-button-rough>
<xtt-button-rough type="base" block>block</xtt-button-rough>
```

## line

设置按钮内文字的最大行数，当文字超出最大行数时，会显示 ... 省略号。默认为 1

<section class="wrap">
	<xtt-button-rough style="max-width: 200px" line="2">long long long long long long long long text</xtt-button-rough>
</section>

```html
<xtt-button-rough style="max-width: 200px" line="2">long long long long long long long long text</xtt-button-rough>
```

## RTL

设置按钮的文字方向为从右到左

<xtt-button-rough style="max-width: 200px" rtl>long long long long long long long long text with max width is 200px</xtt-button-rough>

```html
<xtt-button-rough style="max-width: 200px" rtl
	>long long long long long long long long text with max width is 200px</xtt-button
>
```

## loading

按钮的加载状态

<section class="wrap">
	<xtt-button-rough loading>loading...</xtt-button-rough>
</section>

```html
<xtt-button-rough loading>loading...</xtt-button-rough>
```
