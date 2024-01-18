<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-markdown.js")
	])

	const operate = document.getElementById("operate");

	gui = new GUI({
		container: document.querySelector(".operate-wrapper")
	});

	const obj = {
		content: "## header",
	};

	gui.add(obj, "content").onChange((value) => {
		operate.textContent = value;
	});

});

onUnmounted(() => {
	gui.destroy();
});
</script>

# Markdown 文本

Markdown 文本组件，支持 Markdown 语法。

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-markdown id="operate"> ## header</xtt-markdown>
	</div>
</section>

## 基础用法

<section class="wrap">
	<xtt-markdown>**Hello World** *Hello World* ~~Hello World~~</xtt-markdown>
</section>

```html
<xtt-markdown> **Hello World** *Hello World* ~~Hello World~~< </xtt-markdown>
```
