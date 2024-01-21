<script setup>
import { onMounted, onUnmounted } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-tooltip.js"),
		import("../../dist/xtt-icon.js"),
		import("../../dist/xtt-icon-button.js"),
		import("../../dist/xtt-button.js"),
		import("../../dist/xtt-dialog.js"),
	])

	const operate = document.getElementById("operate");
	const open = document.getElementById("open");
	operate.triggerElement = open;
	open.addEventListener("click", () => {
		operate.open();
	});

	gui = new GUI({
		container: document.querySelector(".operate-wrapper")
	});

	const obj = {
		title: "dialog title",
		'modal-close': false,
		'align-center': false
	};

	const valueController = gui.add(obj, "title").onChange((value) => {
		operate.title = value;
	});
	gui.add(obj, "modal-close").onChange((value) => {
		operate.modalClose = value;
	});
	gui.add(obj, "align-center").onChange((value) => {
		operate.alignCenter = value;
	});


	const dialog1 = document.getElementById("dialog1");
	const open1 = document.getElementById("open1");
	dialog1.triggerElement = open1;
	open1.addEventListener("click", () => {
		dialog1.open();
	});

	const dialog2 = document.getElementById("dialog2");
	const open2 = document.getElementById("open2");
	dialog2.triggerElement = open2;
	open2.addEventListener("click", () => {
		dialog2.open();
	});

	const dialog3 = document.getElementById("dialog3");
	const open3 = document.getElementById("open3");
	dialog3.triggerElement = open3;
	open3.addEventListener("click", () => {
		dialog3.open();
	});

	const dialog4 = document.getElementById("dialog4");
	const open4 = document.getElementById("open4");
	dialog4.triggerElement = open4;
	open4.addEventListener("click", () => {
		dialog4.open();
	});

	const dialog5 = document.getElementById("dialog5");
	const open5 = document.getElementById("open5");
	dialog5.triggerElement = open5;
	open5.addEventListener("click", () => {
		dialog5.open();
	});

	const dialog6 = document.getElementById("dialog6");
	const open6 = document.getElementById("open6");
	dialog6.triggerElement = open6;
	open6.addEventListener("click", () => {
		dialog6.open();
	});
});

onUnmounted(() => {
	gui.destroy();
});
</script>

# dialog 弹窗

弹窗

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-button id="open">open</xtt-button>
		<xtt-dialog id="operate" title="dialog title"> This is dialog </xtt-dialog>
	</div>
</section>

## 基础用法

<section class="wrap">
	<xtt-button id="open1">open</xtt-button>
	<xtt-dialog id="dialog1"> This is dialog </xtt-dialog>
</section>

```html
<xtt-button id="open1">open</xtt-button>

<xtt-dialog id="dialog1"> This is dialog </xtt-dialog>
```

## with title

<section class="wrap">
	<xtt-button id="open2">open</xtt-button>
	<xtt-dialog id="dialog2" title="dialog title"> This is dialog </xtt-dialog>
	<xtt-button id="open3">open</xtt-button>
	<xtt-dialog id="dialog3">
		<header slot="header">自定义 header</header>
		This is dialog
	</xtt-dialog>
</section>

```html
<xtt-button id="open2">open</xtt-button>
<xtt-dialog id="operate2" title="dialog title"> This is dialog </xtt-dialog>

<xtt-button id="open3">open</xtt-button>
<xtt-dialog id="dialog3">
	<header slot="header">自定义 header</header>
	This is dialog
</xtt-dialog>
```

## with footer

<section class="wrap">
	<xtt-button id="open4">open</xtt-button>
	<xtt-dialog id="dialog4">
		This is dialog
		<footer slot="footer">自定义 footer</footer>
	</xtt-dialog>
</section>

```html
<xtt-button id="open4">open</xtt-button>
<xtt-dialog id="dialog4">
	This is dialog
	<footer slot="footer">自定义 footer</footer>
</xtt-dialog>
```

## modal-close

<section class="wrap">
	<xtt-button id="open5">open</xtt-button>
	<xtt-dialog id="dialog5" title="dialog title" modal-close>
		This is dialog
	</xtt-dialog>
</section>

```html
<xtt-button id="open5">open</xtt-button>
<xtt-dialog id="dialog5" title="dialog title" modal-close> This is dialog </xtt-dialog>
```

## align-center

<section class="wrap">
	<xtt-button id="open6">open</xtt-button>
	<xtt-dialog id="dialog6" title="dialog title" align-center>
		This is dialog
	</xtt-dialog>
</section>

```html
<xtt-button id="open6">open</xtt-button>
<xtt-dialog id="dialog6" title="dialog title" align-center> This is dialog </xtt-dialog>
```
