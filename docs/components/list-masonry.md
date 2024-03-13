<script setup>
import { ref, onMounted } from 'vue'
import "./css/com.css"
import { randomHexColor } from "xtt-utils"

const lists = ref([]);

const add = (number) => {
	for (let i = 0; i < number; i++) {
		lists.value.push({
			background: randomHexColor(),
			height: Math.floor(Math.random() * 200 + 100) + "px",
			width: "100%"
		});
	}
}

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-list-masonry.js")
	])

	add(30);
});
</script>

# List Masonry 瀑布流

瀑布流布局。

## 基础用法

默认情况下，列数会根据容器宽度自动计算。

默认宽度与列数的对应关系如下：

&gt; 1200px --> 6 列

&gt; 800px --> 4 列

&gt; 500px --> 4 列

&gt; 200px --> 2 列

&gt; 0px --> 2 列

如果想要自定义宽度与列数的对应关系，可以通过监听 `xtt-resize` 事件来实现。

改变 `xtt-resize` 事件的 `event.detail.next` 属性，可以改变列数。

<section class="wrap">
	<xtt-list-masonry style="resize: horizontal">
		<xtt-list-item v-for="(item, index) in lists">
			<div :style="{ background: item.background, height: item.height, width: item.width }">{{index}}</div>
		</xtt-list-item>
	</xtt-list-masonry>
</section>

```html
<xtt-list-masonry style="resize: horizontal">
	<xtt-list-item v-for="(item, index) in lists">
		<div :style="{ background: item.background, height: item.height, width: item.width }">{{index}}</div>
	</xtt-list-item>
</xtt-list-masonry>
```
