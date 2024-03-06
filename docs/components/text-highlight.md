<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-text-highlight.js"),
	])

	const operate = document.getElementById("operate");

	gui = new GUI({
		container: document.querySelector(".operate-wrapper")
	});

	const obj = {
		content: "default",
		search: "fa",
		searchColor: "yellow"
	};

	gui.add(obj, "content").onChange((value) => {
		operate.textContent = value;
	});
	gui.add(obj, "search").onChange((value) => {
		operate.search = value;
	});
	gui.addColor(obj, "searchColor").onChange((value) => {
		operate.searchColor = value;
	});
	

});

onUnmounted(() => {
	gui.destroy();
});
</script>

# Text Highlight 文字高亮

文字高亮组件，用于高亮文字。

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-text-hl id="operate" search="fa">default</xtt-text-hl>
	</div>
</section>

## 基础用法

使用 `search` 属性来指定需要高亮的文字。使用 `search-color` 属性来指定高亮的颜色。

`search` 属性为正则表达式字符串。

<section class="wrap">
	<xtt-text-hl search="ex">text</xtt-text-hl>
	<xtt-text-hl search="i|l|h" search-color="red">this is the highlight custom element</xtt-text-hl>
</section>

```html
<xtt-text-hl search="ex">text</xtt-text-hl>
<xtt-text-hl search="i|l|h" search-color="red">this is the highlight custom element</xtt-text-hl>
```
