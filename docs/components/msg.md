<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
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
	<xtt-msg>![随机数]()</xtt-msg>
</section>

```html
<xtt-msg>![随机数]()</xtt-msg>
```

## 随机数

<section class="wrap">
	<xtt-msg>![随机数]()</xtt-msg>
	<xtt-msg>![random](1-->>10)</xtt-msg>
	<xtt-msg>![r](1-->>10)</xtt-msg>
</section>

```html
<xtt-msg>![随机数]()</xtt-msg>
<xtt-msg>![random](1-->>10)</xtt-msg>
<xtt-msg>![r](1-->>10)</xtt-msg>
```

## 计算

<section class="wrap">
	<xtt-msg>![计算](3+2)</xtt-msg>
	<xtt-msg>![calc](![计算](3+15)-![计算](2*3))</xtt-msg>
</section>

```html
<xtt-msg>![计算](3+2)</xtt-msg>

<xtt-msg>![calc](![计算](3+15)-![计算](2*3))</xtt-msg>
```

## 判断

<section class="wrap">
	<xtt-msg>![判断](3>2-->>1-->>0)</xtt-msg>
	<xtt-msg>![judge]('b'>'a'-->>1-->>0)</xtt-msg>
	<xtt-msg>![if](3!==3-->>1-->>0)</xtt-msg>
</section>

```html
<xtt-msg>![判断](3>2-->>1-->>0)</xtt-msg>
<xtt-msg>![judge]('b'>'a'-->>1-->>0)</xtt-msg>
<xtt-msg>![if](3!==3-->>1-->>0)</xtt-msg>
```
