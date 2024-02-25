<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-text-box-theme-a.js"),
	])

	const operate = document.getElementById("operate");

	gui = new GUI({
		container: document.querySelector(".operate-wrapper")
	});

	const obj = {
		content: "default",
		color: "#00bfff",
		skew: 0
	};

	gui.add(obj, "content").onChange((value) => {
		operate.textContent = value;
	});

	gui.addColor(obj, "color").onChange((value) => {
		operate.style.setProperty("--text-box-color", value);
	});
	
	gui.add(obj, "skew", 0, 100).onChange((value) => {
		operate.skew = value;
	});

});

onUnmounted(() => {
	gui.destroy();
});
</script>

<style scope>
	#skow::part(nextMark) {
		inset-inline-end: 8px;
	}
</style>

# Text Box 文字框

文字外框

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-text-box-theme-a id="operate">default</xtt-text-box-theme-a>
	</div>
</section>

## 基础用法

内部的文本无法滚动，如果想要大量文本，要使用 `xtt-p` 元素包裹，当有多个 `xtt-p` 元素时，左下角的线会转动，如果当前不是最后一个 `xtt-p` 元素，那么会显示一个箭头，代码可以切换到下一个 `xtt-p` 元素。用鼠标左键点击元素就会切换到下一个 `xtt-p` 元素。鼠标右键点击元素就会切换到上一个 `xtt-p` 元素。

<section class="wrap">
	<xtt-text-box-theme-a>a b c <i>d e f</i></xtt-text-box-theme-a>
	<xtt-text-box-theme-a>
		<xtt-p>first</xtt-p>
		<xtt-p>second</xtt-p>
		<xtt-p>third</xtt-p>
	</xtt-text-box-theme-a>
</section>

```html
<xtt-text-box-theme-a>a b c <i>d e f</i></xtt-text-box-theme-a>
<xtt-text-box-theme-a>
	<xtt-p>first</xtt-p>
	<xtt-p>second</xtt-p>
	<xtt-p>third</xtt-p>
</xtt-text-box-theme-a>
```

## skew 倾斜

设置 `skew` 属性可以让文字框倾斜，倾斜的量是 `skew` 的值。不是角度值，是 px 值。

<section class="wrap">
	<xtt-text-box-theme-a id="skow" skew="50">
		<xtt-p>first</xtt-p>
		<xtt-p>second</xtt-p>
		<xtt-p>third</xtt-p>
	</xtt-text-box-theme-a>

</section>

```html
<xtt-text-box-theme-a skew="50">
	<xtt-p>first</xtt-p>
	<xtt-p>second</xtt-p>
	<xtt-p>third</xtt-p>
</xtt-text-box-theme-a>
<style scope>
	#skow::part(nextMark) {
		inset-inline-end: 8px;
	}
</style>
```
