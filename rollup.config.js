import terser from "@rollup/plugin-terser";
import importAssertions from "rollup-plugin-import-assertions";

export default [
	{
		input: "index.js",
		output: {
			file: "dist/xtt-ui.js",
			format: "iife"
		},
		plugins: [importAssertions()]
	},
	{
		input: "index.js",
		output: {
			file: "dist/xtt-ui.min.js",
			format: "iife"
		},
		plugins: [importAssertions(), terser()]
	}

	// {
	// 	input: {
	// 		"xtt-button": "components/xtt-button.js",
	// 		"xtt-tooltip": "components/xtt-tooltip.js",
	// 		"xtt-markdown": "components/xtt-markdown.js",
	// 		"plugins/xtt-mouseSnow": "plugins/xtt-mouseSnow.js"
	// 	},
	// 	output: {
	// 		dir: "dist",
	// 		entryFileNames: "[name].js",
	// 		preserveModules: true,
	// 		format: "esm"
	// 	},
	// 	plugins: [importAssertions()]
	// }
];
