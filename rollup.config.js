import terser from "@rollup/plugin-terser";
import importAssertions from "rollup-plugin-import-assertions";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import styles from "rollup-plugin-lib-styles";
import discardComments from "postcss-discard-comments";
import html from "rollup-plugin-html";

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
			file: "dist/xtt-ui.js",
			format: "iife"
		},
		plugins: [html(), commonjs(), importAssertions(), nodeResolve()]
	},
	{
		input: "index.js",
		output: {
			file: "dist/xtt-ui.min.js",
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
			"xtt-select": "components/xtt-select.js",
			"xtt-textarea": "components/xtt-textarea.js",
			"xtt-text-edit": "components/xtt-text-edit.js",
			"xtt-markdown": "components/xtt-markdown.js",
			"xtt-list": "components/xtt-list.js",
			"xtt-list-next": "components/xtt-list-next.js",
			"xtt-page-nav": "components/xtt-page-nav.js",
			"xtt-editor": "components/xtt-editor.js",
			"plugins/xtt-mouseSnow": "plugins/xtt-mouseSnow.js",
			"_xtt-code": "_internal/components/xtt-code.js",
			"_xtt-body": "_internal/components/xtt-body.js",
			"nami/xtt-web-bg": "nami/components/xtt-web-bg.js",
			"nami/xtt-msg": "nami/components/xtt-msg.js"
		},
		output: {
			dir: "dist",
			entryFileNames: "[name].js",
			preserveModules: true,
			format: "esm"
		},
		plugins: [html(), importAssertions(), commonjs(), nodeResolve()]
	},

	// IIFE bundles for Nami
	{
		input: "./nami/nami.js",
		output: {
			file: "dist/nami-ui.min.js",
			format: "iife"
		},
		plugins: minPluginOptions
	},
	{
		input: "./nami/xtt-utils-page.js",
		output: {
			file: "dist/xtt-utils-page.min.js",
			format: "iife"
		},
		plugins: minPluginOptions
	}
];
