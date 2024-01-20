<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-grid-column.js"),
		import("../../dist/xtt-grid.js"),
	])

	// const operate = document.getElementById("operate");

	// gui = new GUI({
	// 	container: document.querySelector(".operate-wrapper")
	// });

	// const obj = {
	// 	content: "",
	// };

	// const valueController = gui.add(obj, "content").onChange((value) => {
	// 	operate.textContent = value;
	// });

	// operate.addEventListener("input", (e) => {
	// 	valueController.setValue(e.target.textContent);
	// });

	// 要在设置 data 之前设置
	// 名称要与 xtt-grid-column 的 name 属性一致
	document.getElementById("grid").templates.isOld = function (row) {
		return `<span>${row.age >= 20 ? "大于20岁" : "小于20岁"}</span>`;
	};

	document.getElementById("grid").data = [
		{
			id: 1,
			name: "a",
			age: 18,
			email: "example@example.com"
		},
		{
			id: 2,
			name: "b",
			age: 21,
			email: "example@example.com"
		}
	];

});

onUnmounted(() => {
	// gui.destroy();
});
</script>

# Grid 表格

表格组件

<!-- <section class="operate-wrapper">
	<div class="operate-content">
		<xtt-grid id="operate">
			<xtt-grid-column name="name"></xtt-grid-column>
			<xtt-grid-column name="age" width="80"></xtt-grid-column>
			<xtt-grid-column name="email"></xtt-grid-column>
			<xtt-grid-column name="isOld"></xtt-grid-column>
		</xtt-grid>
	</div>
</section> -->

## 基础用法

<section class="wrap">
	<xtt-grid id="grid">
		<xtt-grid-column name="name"></xtt-grid-column>
		<xtt-grid-column name="age" width="80"></xtt-grid-column>
		<xtt-grid-column name="email"></xtt-grid-column>
		<xtt-grid-column name="isOld"></xtt-grid-column>
	</xtt-grid>
</section>

```html
<xtt-grid id="grid">
	<xtt-grid-column name="name"></xtt-grid-column>
	<xtt-grid-column name="age" width="80"></xtt-grid-column>
	<xtt-grid-column name="email"></xtt-grid-column>
	<xtt-grid-column name="isOld"></xtt-grid-column>
</xtt-grid>

<script>
	// 要在设置 data 之前设置
	// 名称要与 xtt-grid-column 的 name 属性一致
	document.getElementById("grid").templates.isOld = function (row) {
		return `<span>${row.age >= 20 ? "大于20岁" : "小于20岁"}</span>`;
	};

	document.getElementById("grid").data = [
		{
			id: 1,
			name: "a",
			age: 18,
			email: "example@example.com"
		},
		{
			id: 2,
			name: "b",
			age: 21,
			email: "example@example.com"
		}
	];
</script>
```
