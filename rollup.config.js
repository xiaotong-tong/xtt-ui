import terser from "@rollup/plugin-terser";
import css from "rollup-plugin-import-css";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import html from "rollup-plugin-html";

// 用于打包 d.ts 文件
import { dts } from "rollup-plugin-dts";

const minPluginOptions = [
	html(),
	commonjs(),
	css({
		minify: true
	}),
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
			commonjs(),
			css({
				minify: true
			}),
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
			"xtt-loading": "components/xtt-loading.js",
			"xtt-text": "components/xtt-text.js",
			"xtt-text-enter": "components/xtt-text-enter.js",
			"xtt-text-box-theme-a": "components/xtt-text-box-theme-a.js",
			"xtt-text-box-theme-b": "components/xtt-text-box-theme-b.js",
			"xtt-text-highlight": "components/xtt-text-highlight.js",
			"xtt-button": "components/xtt-button.js",
			"xtt-button-rough": "components/xtt-button-rough.js",
			"xtt-text-button": "components/xtt-text-button.js",
			"xtt-icon-button": "components/xtt-icon-button.js",
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
			"xtt-sound": "components/xtt-sound.js",

			"xtt-dumpling": "components/xtt-dumpling.js",

			"xtt-msg": "components/xtt-msg.js",
			"xtt-list-masonry": "components/xtt-list-masonry.js",

			// 以下为没有打包到 index 中的组件, 想要使用的话需要单独手动引入
			"xtt-web-bg": "components/xtt-web-bg.js",
			"xtt-list-next": "components/xtt-list-next.js",

			// 未完成的组件，暂时不打包
			"xtt-grid": "components/xtt-grid.js",
			"xtt-grid-column": "components/xtt-grid-column.js"
		},
		output: {
			// manualChunks: {
			// 	xttMsg: ["xtt-msg"]
			// },
			dir: "dist",
			entryFileNames: "[name].js",
			preserveModules: true,
			format: "esm"
		},
		plugins: [
			html(),
			css({
				minify: true
			}),
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
		plugins: [html(), commonjs(), css(), nodeResolve()]
	},

	// 将 lil-gui 打包到 _internal 目录下
	{
		input: "node_modules/lil-gui",
		output: {
			file: "_internal/lil-gui.js",
			format: "esm"
		},
		plugins: [commonjs(), nodeResolve()]
	},

	// 打包 d.ts 文件
	{
		input: "types/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "es" }],
		plugins: [dts()]
	}
];
