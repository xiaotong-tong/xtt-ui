<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-button.js"),
		import("../../dist/xtt-text-edit.js"),
		import("../../dist/xtt-msg.js"),
	])

	const operate = document.getElementById("operate");

	gui = new GUI({
		container: document.querySelector(".operate-wrapper")
	});

	const obj = {
		content: "![随机数]()",
	};

	const valueController = gui.add(obj, "content").onChange((value) => {
		operate.textContent = value;
	});

});

onUnmounted(() => {
	gui.destroy();
});
</script>

# Msg 消息

解析文本

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-msg id="operate">![随机数]()</xtt-msg>
	</div>
</section>

## 基础用法

<section class="wrap">
	<xtt-msg></xtt-msg>
</section>

```html
<xtt-msg></xtt-msg>
```
