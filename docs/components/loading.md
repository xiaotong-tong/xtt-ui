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
		src: "",
	};

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
