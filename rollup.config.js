import terser from "@rollup/plugin-terser";
import importAssertions from "rollup-plugin-import-assertions";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

// 用于处理 css 文件，将 css 文件中的注释全部删除
// 因为 css 会全部编译成 js 文件，内容会被当做字符串处理，所以 terser 压缩的时候不会删除注释
// 而这些 css 注释是无用的，所以在这里删除，减少文件大小
// ！！！ 如果不在这里删除，使用方是无法通过常规操作删除的
import styles from "rollup-plugin-lib-styles";
import discardComments from "postcss-discard-comments";
import html from "rollup-plugin-html";

// 用于打包 d.ts 文件
import { dts } from "rollup-plugin-dts";

const minPluginOptions = [
	html(),
	commonjs(),
	styles({
		mode: "emit",
		plugins: [
			discardComments({
				removeAll: true
			})
		]
	}),
	importAssertions(),
	terser(),
	nodeResolve()
];

export default [
	// IIFE bundle for browser
	{
		input: "index.js",
		output: {
			file: "dist/index.js",
			format: "iife"
		},
		plugins: [
			html(),
			styles({
				mode: "emit",
				plugins: [
					discardComments({
						removeAll: true
					})
				]
			}),
			commonjs(),
			importAssertions(),
			nodeResolve()
		]
	},
	{
		input: "index.js",
		output: {
			file: "dist/index.min.js",
			format: "iife"
		},
		plugins: minPluginOptions
	},

	// ES Module bundle
	{
		input: {
			"xtt-icon": "components/xtt-icon.js",
			"xtt-button": "components/xtt-button.js",
			"xtt-link": "components/xtt-link.js",
			"xtt-tooltip": "components/xtt-tooltip.js",
			"xtt-dialog": "components/xtt-dialog.js",
			"xtt-select": "components/xtt-select.js",
			"xtt-textarea": "components/xtt-textarea.js",
			"xtt-text-edit": "components/xtt-text-edit.js",
			"xtt-markdown": "components/xtt-markdown.js",
			"xtt-list": "components/xtt-list.js",
			"xtt-page-nav": "components/xtt-page-nav.js",
			"xtt-editor-md": "components/xtt-editor-md.js",
			"xtt-input": "components/xtt-input.js",
			"xtt-number-field": "components/xtt-number-field.js",

			// plugins 目录下的文件，因为不是组件，是鼠标动画效果，所以单独打包到 plugins 目录下
			"plugins/xtt-mouseSnow": "plugins/xtt-mouseSnow.js",

			// 以下为没有打包到 index 中的组件, 想要使用的话需要单独手动引入
			"xtt-web-bg": "components/xtt-web-bg.js",
			"xtt-msg": "components/xtt-msg.js",
			"xtt-list-next": "components/xtt-list-next.js",

			// 未完成的组件，暂时不打包
			"xtt-grid": "components/xtt-grid.js",
			"xtt-grid-column": "components/xtt-grid-column.js"
		},
		output: {
			dir: "dist",
			entryFileNames: "[name].js",
			preserveModules: true,
			format: "esm"
		},
		plugins: [
			html(),
			styles({
				mode: "emit",
				plugins: [
					discardComments({
						removeAll: true
					})
				]
			}),
			importAssertions(),
			commonjs(),
			nodeResolve()
		]
	},

	// 项目内部供demo使用的自定义元素，防止污染 dist 目录，单独打包
	{
		input: "_internal/index.js",
		output: {
			file: "_internal/xtt-index.js",
			format: "iife"
		},
		plugins: [html(), commonjs(), importAssertions(), nodeResolve()]
	},

	// 打包 d.ts 文件
	{
		input: "types/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "es" }],
		plugins: [dts()]
	}
];
