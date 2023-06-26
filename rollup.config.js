import terser from "@rollup/plugin-terser";
import importAssertions from "rollup-plugin-import-assertions";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default [
	{
		input: "index.js",
		output: {
			file: "dist/xtt-ui.js",
			format: "iife"
		},
		plugins: [importAssertions(), nodeResolve(), commonjs()]
	},
	{
		input: "index.js",
		output: {
			file: "dist/xtt-ui.min.js",
			format: "iife"
		},
		plugins: [importAssertions(), terser(), nodeResolve(), commonjs()]
	},

	{
		input: {
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
		plugins: [importAssertions(), nodeResolve(), commonjs()]
	}
];
