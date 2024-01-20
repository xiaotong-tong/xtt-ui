<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-icon.js"),
		import("../../dist/xtt-sound.js"),
	])

	const operate = document.getElementById("operate");

	gui = new GUI({
		container: document.querySelector(".operate-wrapper")
	});

	const obj = {
		src: "https://xtt.moe/sounds/jp/word/猫かぶり.wav",
	};

	const valueController = gui.add(obj, "src").onChange((value) => {
		operate.src = value;
	});

});

onUnmounted(() => {
	gui.destroy();
});
</script>

# Page Nav 导航

导航组件

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-sound id="operate" src="https://xtt.moe/sounds/jp/word/猫かぶり.wav"></xtt-sound>
	</div>
</section>

## 基础用法

点击图标播放音频

<section class="wrap">
	<xtt-sound src="https://xtt.moe/sounds/jp/word/猫かぶり.wav"></xtt-sound>
</section>

```html
<xtt-sound src="https://xtt.moe/sounds/jp/word/猫かぶり.wav"></xtt-sound>
```
