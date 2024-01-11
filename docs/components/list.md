<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-list.js")
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
		cols: 3,
		setCols: function() {
			operate.cols = obj.cols === 0 ? null : obj.cols;
		}
	};

	gui.add(obj, 'width', 0, 400).onChange((val) => {
		operate.style.width = `${val}px`;
	});

	gui.add(obj, '0', 0, 10, 1);
	gui.add(obj, '100', 0, 10, 1);
	gui.add(obj, '200', 0, 10, 1);
	gui.add(obj, '300', 0, 10, 1);

	operate.addEventListener("xtt-resize", (ev) => {
		if (ev.detail.width >= 300) {
			ev.detail.next = obj[300];
		} else if (ev.detail.width >= 200) {
			ev.detail.next = obj[200];
		} else if (ev.detail.width >= 100) {
			ev.detail.next = obj[100];
		} else {
			ev.detail.next = obj[0];
		}
	});

	gui.add(obj, 'cols', 0, 10, 1);
	gui.add(obj, 'setCols');
});

onUnmounted(() => {
	gui.destroy();
});
</script>

# List 列表

列表组件，用于展示一系列有序的信息。

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-list id="operate" style="width: 300px">
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
		</xtt-list>
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

如果想要自定义宽度与列数的对应关系，可以通过监听 `xtt-resize` 事件来实现。

改变 `xtt-resize` 事件的 `event.detail.next` 属性，可以改变列数。

<section class="wrap">
	<xtt-list id="operate" style="resize: horizontal">
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
	</xtt-list>
</section>

```html
<xtt-list id="operate" style="resize: horizontal">
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
</xtt-list>
```

## cols

设置固定的列数

<xtt-list id="operate" cols="3" style="resize: horizontal">
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
</xtt-list>

```html
<xtt-list id="operate" cols="3" style="resize: horizontal">
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
</xtt-list>
```
