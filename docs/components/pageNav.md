<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-link.js"),
		import("../../dist/xtt-list.js"),
		import("../../dist/xtt-page-nav.js"),
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

});

onUnmounted(() => {
	gui.destroy();
});
</script>

# Page Nav 导航

导航组件

<!-- <section class="operate-wrapper">
	<div class="operate-content">
		<xtt-page-nav id="operate">
			<h2>ABC Group</h2>
			<xtt-list>
				<xtt-list-item>
					<xtt-link href="#a" block>a</xtt-link>
				</xtt-list-item>
				<xtt-list-item>
					<xtt-link href="#b" block>b</xtt-link>
				</xtt-list-item>
				<xtt-list-item>
					<xtt-link href="#c" block>c</xtt-link>
				</xtt-list-item>
			</xtt-list>
			<xtt-list>
				<xtt-list-item>
					<xtt-link href="#x" block>x</xtt-link>
				</xtt-list-item>
				<xtt-list-item>
					<xtt-link href="#y" block>y</xtt-link>
				</xtt-list-item>
				<xtt-list-item>
					<xtt-link href="#z" block>z</xtt-link>
				</xtt-list-item>
			</xtt-list>
		</xtt-page-nav>
	</div>
</section> -->

## 基础用法

<section class="wrap">
	<xtt-page-nav id="operate">
	<h2>ABC Group</h2>
	<xtt-list>
		<xtt-list-item>
			<xtt-link href="#a" block>a</xtt-link>
		</xtt-list-item>
		<xtt-list-item>
			<xtt-link href="#b" block>b</xtt-link>
		</xtt-list-item>
		<xtt-list-item>
			<xtt-link href="#c" block>c</xtt-link>
		</xtt-list-item>
	</xtt-list>
	<xtt-list>
		<xtt-list-item>
			<xtt-link href="#x" block>x</xtt-link>
		</xtt-list-item>
		<xtt-list-item>
			<xtt-link href="#y" block>y</xtt-link>
		</xtt-list-item>
		<xtt-list-item>
			<xtt-link href="#z" block>z</xtt-link>
		</xtt-list-item>
	</xtt-list>
</xtt-page-nav>
</section>

```html
<xtt-page-nav id="operate">
	<h2>ABC Group</h2>
	<xtt-list>
		<xtt-list-item>
			<xtt-link href="#a" block>a</xtt-link>
		</xtt-list-item>
		<xtt-list-item>
			<xtt-link href="#b" block>b</xtt-link>
		</xtt-list-item>
		<xtt-list-item>
			<xtt-link href="#c" block>c</xtt-link>
		</xtt-list-item>
	</xtt-list>
	<xtt-list>
		<xtt-list-item>
			<xtt-link href="#x" block>x</xtt-link>
		</xtt-list-item>
		<xtt-list-item>
			<xtt-link href="#y" block>y</xtt-link>
		</xtt-list-item>
		<xtt-list-item>
			<xtt-link href="#z" block>z</xtt-link>
		</xtt-list-item>
	</xtt-list>
</xtt-page-nav>
```
