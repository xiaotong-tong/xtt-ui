<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-tooltip.js"),
		import("../../dist/xtt-icon.js"),
		import("../../dist/xtt-icon-button.js"),
	])

	const operate = document.getElementById("operate");

	gui = new GUI({
		container: document.querySelector(".operate-wrapper")
	});

	const obj = {
		type: "default",
		size: "default"
	};

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

# Icon Button 按钮

图标按钮

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-icon-button id="operate">
			<xtt-icon icon="power">power</xtt-icon>
		</xtt-icon-button>
	</div>
</section>

## 基础用法

<section class="wrap">
	<xtt-icon-button><xtt-icon icon="power">power</xtt-icon></xtt-icon-button>
	<xtt-icon-button><xtt-icon icon="close">close</xtt-icon></xtt-icon-button>
	<xtt-icon-button>X</xtt-icon-button>
	<xtt-icon-button disabled><xtt-icon icon="power">power</xtt-icon></xtt-icon-button>
	<xtt-icon-button autofocus><xtt-icon icon="power">power</xtt-icon></xtt-icon-button>
	<xtt-icon-button data-xtt-tooltip="power icon"><xtt-icon icon="power">power</xtt-icon></xtt-icon-button>
</section>

<p>
	添加 data-xtt-tooltip 属性可以显示 tooltip
</p>

```html
<xtt-icon-button><xtt-icon icon="power">power</xtt-icon></xtt-icon-button>
<xtt-icon-button><xtt-icon icon="close">close</xtt-icon></xtt-icon-button>
<xtt-icon-button>X</xtt-icon-button>
<xtt-icon-button disabled
	><xtt-icon icon="power">power</xtt-icon></xtt-icon-button
>
<xtt-icon-button autofocus
	><xtt-icon icon="power">power</xtt-icon></xtt-icon-button
>
<xtt-icon-button data-xtt-tooltip="power icon">
	<xtt-icon icon="power">power</xtt-icon>
</xtt-icon-button>
```

## type 样式

<section class="wrap">
	<xtt-icon-button type="primary"><xtt-icon icon="power">power</xtt-icon></xtt-icon-button>
	<xtt-icon-button type="danger"><xtt-icon icon="power">power</xtt-icon></xtt-icon-button>
	<xtt-icon-button type="success"><xtt-icon icon="power">power</xtt-icon></xtt-icon-button>
	<xtt-icon-button type="warning"><xtt-icon icon="power">power</xtt-icon></xtt-icon-button>
	<xtt-icon-button type="base"><xtt-icon icon="power">power</xtt-icon></xtt-icon-button>
	<xtt-icon-button><xtt-icon icon="power">power</xtt-icon></xtt-icon-button>
</section>

```html
<xtt-icon-button type="primary"
	><xtt-icon icon="power">power</xtt-icon></xtt-icon-button
>
<xtt-icon-button type="danger"
	><xtt-icon icon="power">power</xtt-icon></xtt-icon-button
>
<xtt-icon-button type="success"
	><xtt-icon icon="power">power</xtt-icon></xtt-icon-button
>
<xtt-icon-button type="warning"
	><xtt-icon icon="power">power</xtt-icon></xtt-icon-button
>
<xtt-icon-button type="base"
	><xtt-icon icon="power">power</xtt-icon></xtt-icon-button
>
<xtt-icon-button><xtt-icon icon="power">power</xtt-icon></xtt-icon-button>
```

## size 尺寸

<section class="wrap">
	<xtt-icon-button size="large"><xtt-icon icon="power">power</xtt-icon></xtt-icon-button>
	<xtt-icon-button><xtt-icon icon="power">power</xtt-icon></xtt-icon-button>
	<xtt-icon-button size="small"><xtt-icon icon="power">power</xtt-icon></xtt-icon-button>
</section>

```html
<xtt-icon-button size="large"
	><xtt-icon icon="power">power</xtt-icon></xtt-icon-button
>
<xtt-icon-button><xtt-icon icon="power">power</xtt-icon></xtt-icon-button>
<xtt-icon-button size="small"
	><xtt-icon icon="power">power</xtt-icon></xtt-icon-button
>
```
