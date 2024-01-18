<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-tooltip.js")
	])

	const operate = document.getElementById("operate");

	gui = new GUI({
		container: document.querySelector(".operate-wrapper")
	});

	const obj = {
		'data-xtt-tooltip': "This is tooltip",
		preventDefault: false,
		'aria-describedby': false,
	};

	gui.add(obj, "data-xtt-tooltip").onChange((value) => {
		operate.setAttribute("data-xtt-tooltip", value);
	});

	operate.addEventListener("xtt-tooltip-show", (ev) => {
		console.log(ev);
		if (obj.preventDefault) {
			ev.preventDefault();
		}
	});
	gui.add(obj, "preventDefault");

	gui.add(obj, "aria-describedby").onChange((value) => {
		if (value) {
			operate.setAttribute("data-aria-type", "labelledby");
		} else {
			operate.removeAttribute("data-aria-type");
		}
	});

	document.getElementById("initTriggerTooltip").initTrigger(document.querySelectorAll(".initTrigger"));

	document.querySelector("#preventDefaultBtn").addEventListener("xtt-tooltip-show", (ev) => {
		console.log(ev);
		ev.preventDefault();
	});
});

onUnmounted(() => {
	gui.destroy();
});
</script>

# Tooltip 提示文本

Tooltip 提示文本组件，用于替代原生的 title 属性。

<section class="operate-wrapper">
	<div class="operate-content">
		<button id="operate">tooltip</button>
		<xtt-tooltip id="tooltipOperate" for="#operate">This is tooltip</xtt-tooltip>
    </div>
</section>

## 基础用法

当鼠标移入元素时，会显示 Tooltip 提示文本。如果元素上有 `data-xtt-tooltip` 属性，则会显示该属性的值。如果元素上没有 `data-xtt-tooltip` 属性，则会显示 `xtt-tooltip` 组件内的默认值。

<section class="wrap">
	<button id="default">default</button>
	<xtt-tooltip for="#default">This is tooltip</xtt-tooltip>
	<button id="defaultWithTooltip" data-xtt-tooltip="This is tooltip With data-xtt-tooltip">
		has data-xtt-tooltip
	</button>
	<xtt-tooltip for="#defaultWithTooltip">default value</xtt-tooltip>
</section>

```html
<button id="default">default</button>
<xtt-tooltip for="#default">This is tooltip</xtt-tooltip>
<button id="defaultWithTooltip" data-xtt-tooltip="This is tooltip With data-xtt-tooltip">has data-xtt-tooltip</button>
<xtt-tooltip for="#defaultWithTooltip">default value</xtt-tooltip>
```

## initTrigger

xtt-tooltip 组件提供了 `initTrigger` 方法，用于初始化 Tooltip 提示文本组件。该方法接收一个参数，该参数为一个选择器字符串或者一个元素数组，用于指定需要初始化的元素。

<section class="wrap">
	<button class="initTrigger" data-xtt-tooltip="This is tooltip by initTrigger - 1">initTrigger1</button>
	<button class="initTrigger" data-xtt-tooltip="This is tooltip by initTrigger - 2">initTrigger2</button>
	<button class="initTrigger" data-xtt-tooltip="This is tooltip by initTrigger - 3">initTrigger3</button>
	<xtt-tooltip id="initTriggerTooltip">default value</xtt-tooltip>
</section>

```html
<button class="initTrigger" data-xtt-tooltip="This is tooltip by initTrigger - 1">initTrigger1</button>
<button class="initTrigger" data-xtt-tooltip="This is tooltip by initTrigger - 2">initTrigger2</button>
<button class="initTrigger" data-xtt-tooltip="This is tooltip by initTrigger - 3">initTrigger3</button>
<xtt-tooltip id="initTriggerTooltip">default value</xtt-tooltip>
```

## xtt-tooltip-show

当 tooltip 显示时，会触发 `xtt-tooltip-show` 事件。如果需要阻止 tooltip 显示，可以在该事件的回调函数中调用 `preventDefault` 方法。

<section class="wrap">
	<button id="preventDefaultBtn" data-xtt-tooltip="This is tooltip by preventDefault">preventDefault</button>
	<xtt-tooltip for="#preventDefaultBtn">default value</xtt-tooltip>
</section>

```html
<button id="preventDefaultBtn" data-xtt-tooltip="This is tooltip by preventDefault">preventDefault</button>
<xtt-tooltip for="#preventDefaultBtn">default value</xtt-tooltip>
<script>
	document.querySelector("#preventDefaultBtn").addEventListener("xtt-tooltip-show", (ev) => {
		console.log(ev);
		ev.preventDefault();
	});
</script>
```

## aria-describedby

默认添加的属性为 aria-describedby, 如果设置了 data-aria-type="labelledby" 后，则会添加 aria-labelledby 属性。

<section class="wrap">
	<button id="null" data-aria-type="labelledby"></button>
	<xtt-tooltip for="#null">This is null button, label by aria-labelledby</xtt-tooltip>
</section>

```html
<button id="null" data-aria-type="labelledby"></button>
<xtt-tooltip for="#null">This is null button, label by aria-labelledby</xtt-tooltip>
```
