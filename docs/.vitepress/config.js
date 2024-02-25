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
						text: "Text",
						items: [
							{
								text: "text",
								link: "/components/text"
							},
							{
								text: "text-enter",
								link: "/components/text-enter"
							}
						]
					},
					{
						text: "Text Box",
						items: [
							{
								text: "text-box-theme-a",
								link: "/components/text-box-theme-a"
							}
						]
					},
					{
						text: "dumpling",
						link: "/components/dumpling"
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
						text: "textarea",
						link: "/components/textarea"
					},
					{
						text: "text-edit",
						link: "/components/text-edit"
					},
					{
						text: "list",
						link: "/components/list"
					},
					{
						text: "list-next",
						link: "/components/list-next"
					},
					{
						text: "markdown",
						link: "/components/markdown"
					},
					{
						text: "editor-md",
						link: "/components/editor-md"
					},
					{
						text: "tooltip",
						link: "/components/tooltip"
					},
					{
						text: "pageNav",
						link: "/components/pageNav"
					},
					{
						text: "grid",
						link: "/components/grid"
					},
					{
						text: "sound",
						link: "/components/sound"
					},
					{
						text: "msg",
						link: "/components/msg"
					},
					{
						text: "dialog",
						link: "/components/dialog"
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
