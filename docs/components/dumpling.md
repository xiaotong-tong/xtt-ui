<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-dumpling.js"),
	])
});

</script>

# Dumpling 团子

## 基础用法

<section class="wrap">
	<xtt-dumpling-a></xtt-dumpling-a>
	<xtt-dumpling-b></xtt-dumpling-b>
</section>

```html
<xtt-dumpling-a></xtt-dumpling-a>
```
