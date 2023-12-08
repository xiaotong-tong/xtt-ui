<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-icon.js")
	])

	const operate = document.getElementById("operate");

	gui = new GUI({
		container: document.querySelector(".operate-wrapper")
	});

	const obj = {
		icon: "power",
	};

	gui.add(obj, "icon", ["power", "chevronDown","plus","minus","close","musicNote"]).onChange((value) => {
		operate.icon = value
	});

});

onUnmounted(() => {
	gui.destroy();
});
</script>

# Icon 图标

图标

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-icon icon="power" id="operate"></xtt-icon>
	</div>
</section>

## 基础用法

<section class="wrap">
	<xtt-icon icon="power"></xtt-icon>
	<xtt-icon>
		<svg viewBox="0 0 24 24">
				<path
					d="M18.73,18C15.4,21.69 9.71,22 6,18.64C2.33,15.31 2.04,9.62 5.37,5.93C6.9,4.25 9,3.2 11.27,3C7.96,6.7 8.27,12.39 12,15.71C13.63,17.19 15.78,18 18,18C18.25,18 18.5,18 18.73,18Z"
				/>
			</svg>
	</xtt-icon>
</section>

```html
<xtt-icon icon="power"></xtt-icon>
<xtt-icon>
	<svg viewBox="0 0 24 24">
		<path
			d="M18.73,18C15.4,21.69 9.71,22 6,18.64C2.33,15.31 2.04,9.62 5.37,5.93C6.9,4.25 9,3.2 11.27,3C7.96,6.7 8.27,12.39 12,15.71C13.63,17.19 15.78,18 18,18C18.25,18 18.5,18 18.73,18Z"
		/>
	</svg>
</xtt-icon>
```

## icon 内置图标种类

内置了一些内部使用的图标，图标来源自 mdi 图标库。

目前仅支持 power、chevronDown、plus、minus、close、musicNote 这几个图标。

<section class="wrap">
	<xtt-icon icon="power"></xtt-icon>
	<xtt-icon icon="chevronDown"></xtt-icon>
	<xtt-icon icon="plus"></xtt-icon>
	<xtt-icon icon="minus"></xtt-icon>
	<xtt-icon icon="close"></xtt-icon>
	<xtt-icon icon="musicNote"></xtt-icon>
</section>

```html
<xtt-icon icon="power"></xtt-icon>
<xtt-icon icon="chevronDown"></xtt-icon>
<xtt-icon icon="plus"></xtt-icon>
<xtt-icon icon="minus"></xtt-icon>
<xtt-icon icon="close"></xtt-icon>
<xtt-icon icon="musicNote"></xtt-icon>
```
