<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-loading.js"),
	])

	const operate = document.getElementById("operate");

	gui = new GUI({
		container: document.querySelector(".operate-wrapper")
	});

	const obj = {
		fontSize: 16,
		color: "#3c3c3c",
		'stroke-width': 16,
	};

	gui.add(obj, "fontSize").onChange((val) => {
		operate.style.fontSize = val + "px";
	});

	gui.addColor(obj, "color").onChange((val) => {
		operate.style.color = val;
	});

	gui.add(obj, "stroke-width", 0).onChange((val) => {
		operate.style.setProperty("--loading-stroke-width", val);
	});

});

onUnmounted(() => {
	gui.destroy();
});
</script>

# loading 加载

加载组件

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-loading id="operate"></xtt-loading>
	</div>
</section>

stroke-width 不能设置太大，当值过大会导致圆弧不圆滑，如果想要更大的圆弧，可以自行更改 ::part(path) 的 d 属性。注意 d 属性 safari 不支持。

## 基础用法

加载动画

<section class="wrap">
	<xtt-loading />
	<xtt-loading style="font-size: 24px;"></xtt-loading>
	<xtt-loading style="font-size: 48px;"></xtt-loading>
	<xtt-loading style="font-size: 48px; color: red;"></xtt-loading>
</section>

```html
<xtt-loading />
<xtt-loading style="font-size: 24px;"></xtt-loading>
<xtt-loading style="font-size: 48px;"></xtt-loading>
<xtt-loading style="font-size: 48px; color: red;"></xtt-loading>
```

## slot

<section class="wrap">
	<xtt-loading>loading...</xtt-loading>
	<xtt-loading style="font-size: 24px;">loading...</xtt-loading>
	<xtt-loading style="font-size: 48px;">loading...</xtt-loading>
	<xtt-loading style="font-size: 48px; color: red;">loading...</xtt-loading>
</section>

```html
<xtt-loading>loading...</xtt-loading>
<xtt-loading style="font-size: 24px;">loading...</xtt-loading>
<xtt-loading style="font-size: 48px;">loading...</xtt-loading>
<xtt-loading style="font-size: 48px; color: red;">loading...</xtt-loading>
```
