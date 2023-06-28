import terser from "@rollup/plugin-terser";
import importAssertions from "rollup-plugin-import-assertions";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import styles from "rollup-plugin-styles";
import discardComments from "postcss-discard-comments";

const minPluginOptions = [
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
	{
		input: "index.js",
		output: {
			file: "dist/xtt-ui.js",
			format: "iife"
		},
		plugins: [commonjs(), importAssertions(), nodeResolve()]
	},
	{
		input: "index.js",
		output: {
			file: "dist/xtt-ui.min.js",
			format: "iife"
		},
		plugins: minPluginOptions
	},

	{
		input: {
			"xtt-icon": "components/xtt-icon.js",
			"xtt-button": "components/xtt-button.js",
			"xtt-link": "components/xtt-link.js",
			"xtt-tooltip": "components/xtt-tooltip.js",
			"xtt-markdown": "components/xtt-markdown.js",
			"plugins/xtt-mouseSnow": "plugins/xtt-mouseSnow.js",
			"_xtt-code": "_internal/components/xtt-code.js",
			"nami/xtt-web-bg": "nami/components/xtt-web-bg.js"
		},
		output: {
			dir: "dist",
			entryFileNames: "[name].js",
			preserveModules: true,
			format: "esm"
		},
		plugins: [importAssertions(), commonjs(), nodeResolve()]
	},

	{
		input: "./nami/nami.js",
		output: {
			file: "dist/nami-ui.min.js",
			format: "iife"
		},
		plugins: minPluginOptions
	}
];
