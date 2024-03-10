<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-text-box-theme-b.js"),
	])

	const operate = document.getElementById("operate");

	gui = new GUI({
		container: document.querySelector(".operate-wrapper")
	});

	const obj = {
		content: "default",
		color: "#000",
	};

	gui.add(obj, "content").onChange((value) => {
		operate.textContent = value;
	});

	gui.addColor(obj, "color").onChange((value) => {
		operate.style.setProperty("--text-box-border-color", value);
	});
	
});

onUnmounted(() => {
	gui.destroy();
});
</script>

# Text Box 文字框

文字外框

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-text-box-theme-b id="operate">default</xtt-text-box-theme-b>
	</div>
</section>

## 基础用法

<section class="wrap">
	<xtt-text-box-theme-b>a b c <i>d e f</i></xtt-text-box-theme-b>
</section>

```html
<xtt-text-box-theme-b>a b c <i>d e f</i></xtt-text-box-theme-b>
```
