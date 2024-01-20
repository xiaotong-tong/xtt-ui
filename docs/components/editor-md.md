<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-markdown.js"),
		import("../../dist/xtt-textarea.js"),
		import("../../dist/xtt-editor-md.js"),
	])

	const operate = document.getElementById("operate");

	gui = new GUI({
		container: document.querySelector(".operate-wrapper")
	});

	const obj = {
		content: "",
	};

	const valueController = gui.add(obj, "content").onChange((value) => {
		operate.textContent = value;
	});

	operate.addEventListener("input", (e) => {
		valueController.setValue(e.target.textContent);
	});

});

onUnmounted(() => {
	gui.destroy();
});
</script>

# Editor Md 编辑器

Markdown 文本编辑器

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-editor-md id="operate"></xtt-editor-md>
	</div>
</section>

## 基础用法

<section class="wrap">
	<xtt-editor-md></xtt-editor-md>
</section>

```html
<xtt-editor-md></xtt-editor-md>
```
