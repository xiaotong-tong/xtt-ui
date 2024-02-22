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
		type: "default",
	};

	gui.add(obj, "content").onChange((value) => {
		operate.textContent = value;
	});
	gui.add(obj, "type", ["default", "primary", "danger","success", "warning"]).onChange((value) => {
		if (value === "default") {
			operate.removeAttribute("type");
			return;
		}
		operate.type = value
	});
	

});

onUnmounted(() => {
	gui.destroy();
});
</script>

# Text Box 文字框

文字外框

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-text-box-theme-a id="operate">default</xtt-text-box-theme-a>
	</div>
</section>

## 基础用法

<section class="wrap">
	<xtt-text-box-theme-a>a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z</xtt-text-box-theme-a>
	<xtt-text-box-theme-a style="width:300px;height:200px;">a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z</xtt-text-box-theme-a>
	<xtt-text-box-theme-a skew="50" style="width:300px;height:200px;">a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z</xtt-text-box-theme-a>
</section>

```html
<xtt-text-box-theme-a>text</xtt-text-box-theme-a>
```
