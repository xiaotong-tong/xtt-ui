<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-list-next.js")
	])

	const operate = document.getElementById("operate");

	gui = new GUI({
		container: document.querySelector(".operate-wrapper")
	});

	const obj = {
		width: 300,
		0: 1,
		100: 2,
		200: 4,
		300: 6,
	};

	const refresh = () => {
		if (obj.width >= 300) {
			operate.cols = obj[300];
		} else if (obj.width >= 200) {
			operate.cols = obj[200];
		} else if (obj.width >= 100) {
			operate.cols = obj[100];
		} else {
			operate.cols = obj[0];
		}
	}

	gui.add(obj, 'width', 0, 400).onChange((val) => {
		operate.style.width = `${val}px`;
		refresh();
	});
	
	refresh();

	gui.add(obj, '0', 0, 10, 1);
	gui.add(obj, '100', 0, 10, 1);
	gui.add(obj, '200', 0, 10, 1);
	gui.add(obj, '300', 0, 10, 1);
});

onUnmounted(() => {
	gui.destroy();
});
</script>

# List Next 列表

列表组件，用于展示一系列有序的信息。与 List 组件不同的是，List Next 组件基于 CSS 容器查询实现，List 组件基于 resizeObserver 实现。

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-list-next id="operate" style="width: 300px">
			<xtt-list-item>Item 1</xtt-list-item>
			<xtt-list-item>Item 2</xtt-list-item>
			<xtt-list-item>Item 3</xtt-list-item>
			<xtt-list-item>Item 4</xtt-list-item>
			<xtt-list-item>Item 5</xtt-list-item>
			<xtt-list-item>Item 6</xtt-list-item>
			<xtt-list-item>Item 7</xtt-list-item>
			<xtt-list-item>Item 8</xtt-list-item>
			<xtt-list-item>Item 9</xtt-list-item>
			<xtt-list-item>Item 10</xtt-list-item>
			<xtt-list-item>Item 11</xtt-list-item>
			<xtt-list-item>Item 12</xtt-list-item>
		</xtt-list-next>
	</div>
</section>

## 基础用法

默认情况下，列数会根据容器宽度自动计算。

默认宽度与列数的对应关系如下：

&gt; 1200px --> 6 列

&gt; 800px --> 4 列

&gt; 500px --> 3 列

&gt; 200px --> 2 列

&gt; 0px --> 1 列

如果想要自定义宽度与列数的对应关系，可以通过监听宽度变化然后更改 `cols` 属性来实现。

> 注意：list-next 没有 `xtt-resize` 事件。

<section class="wrap">
	<xtt-list-next style="resize: horizontal">
		<xtt-list-item>Item 1</xtt-list-item>
		<xtt-list-item>Item 2</xtt-list-item>
		<xtt-list-item>Item 3</xtt-list-item>
		<xtt-list-item>Item 4</xtt-list-item>
		<xtt-list-item>Item 5</xtt-list-item>
		<xtt-list-item>Item 6</xtt-list-item>
		<xtt-list-item>Item 7</xtt-list-item>
		<xtt-list-item>Item 8</xtt-list-item>
		<xtt-list-item>Item 9</xtt-list-item>
		<xtt-list-item>Item 10</xtt-list-item>
		<xtt-list-item>Item 11</xtt-list-item>
		<xtt-list-item>Item 12</xtt-list-item>
	</xtt-list-next>
</section>

```html
<xtt-list-next style="resize: horizontal">
	<xtt-list-item>Item 1</xtt-list-item>
	<xtt-list-item>Item 2</xtt-list-item>
	<xtt-list-item>Item 3</xtt-list-item>
	<xtt-list-item>Item 4</xtt-list-item>
	<xtt-list-item>Item 5</xtt-list-item>
	<xtt-list-item>Item 6</xtt-list-item>
	<xtt-list-item>Item 7</xtt-list-item>
	<xtt-list-item>Item 8</xtt-list-item>
	<xtt-list-item>Item 9</xtt-list-item>
	<xtt-list-item>Item 10</xtt-list-item>
	<xtt-list-item>Item 11</xtt-list-item>
	<xtt-list-item>Item 12</xtt-list-item>
</xtt-list-next>
```

## cols

设置固定的列数

<xtt-list-next cols="3" style="resize: horizontal">
	<xtt-list-item>Item 1</xtt-list-item>
	<xtt-list-item>Item 2</xtt-list-item>
	<xtt-list-item>Item 3</xtt-list-item>
	<xtt-list-item>Item 4</xtt-list-item>
	<xtt-list-item>Item 5</xtt-list-item>
	<xtt-list-item>Item 6</xtt-list-item>
	<xtt-list-item>Item 7</xtt-list-item>
	<xtt-list-item>Item 8</xtt-list-item>
	<xtt-list-item>Item 9</xtt-list-item>
	<xtt-list-item>Item 10</xtt-list-item>
	<xtt-list-item>Item 11</xtt-list-item>
	<xtt-list-item>Item 12</xtt-list-item>
</xtt-list-next>

```html
<xtt-list-next cols="3" style="resize: horizontal">
	<xtt-list-item>Item 1</xtt-list-item>
	<xtt-list-item>Item 2</xtt-list-item>
	<xtt-list-item>Item 3</xtt-list-item>
	<xtt-list-item>Item 4</xtt-list-item>
	<xtt-list-item>Item 5</xtt-list-item>
	<xtt-list-item>Item 6</xtt-list-item>
	<xtt-list-item>Item 7</xtt-list-item>
	<xtt-list-item>Item 8</xtt-list-item>
	<xtt-list-item>Item 9</xtt-list-item>
	<xtt-list-item>Item 10</xtt-list-item>
	<xtt-list-item>Item 11</xtt-list-item>
	<xtt-list-item>Item 12</xtt-list-item>
</xtt-list-next>
```
