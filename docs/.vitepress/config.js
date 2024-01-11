import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "xtt-ui",
	description: "基于web components的ui组件库",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "首页", link: "/" },
			{ text: "组件", link: "/components/button" }
		],

		sidebar: [
			{
				text: "通用组件",
				items: [
					{ text: "Button", link: "/components/button" },
					{
						text: "text-button",
						link: "/components/text-button"
					},
					{
						text: "icon",
						link: "/components/icon"
					},
					{
						text: "icon-button",
						link: "/components/icon-button"
					},
					{
						text: "link",
						link: "/components/link"
					},
					{
						text: "select",
						link: "/components/select"
					},
					{
						text: "input",
						link: "/components/input"
					},
					{
						text: "numberfield",
						link: "/components/numberfield"
					},
					{
						text: "list",
						link: "/components/list"
					},
					{
						text: "list-next",
						link: "/components/list-next"
					}
				]
			}
		],

		socialLinks: [{ icon: "github", link: "https://github.com/xiaotong-tong/xtt-ui" }]
	},
	vue: {
		template: {
			compilerOptions: {
				isCustomElement: (tag) => tag.startsWith("xtt-")
			}
		}
	}
});
