import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "xtt-ui",
	description: "基于web components的ui组件库",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "首页", link: "/" },
			{ text: "组件", link: "/components/button" },
			{ text: "外链", items: [{ text: "lil-gui", link: "https://lil-gui.georgealways.com/" }] }
		],

		sidebar: [
			{
				text: "通用组件",
				items: [
					{
						text: "icon",
						link: "/components/icon"
					},
					{
						text: "loading",
						link: "/components/loading"
					},
					{
						text: "msg",
						link: "/components/msg"
					},
					{
						text: "Button",
						items: [
							{
								text: "button",
								link: "/components/button"
							},
							{
								text: "text-button",
								link: "/components/text-button"
							},
							{
								text: "icon-button",
								link: "/components/icon-button"
							}
						]
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
							},
							{
								text: "text-highlight",
								link: "/components/text-highlight"
							}
						]
					},
					{
						text: "link",
						link: "/components/link"
					},
					{
						text: "Text Box",
						items: [
							{
								text: "text-box-theme-a",
								link: "/components/text-box-theme-a"
							},
							{
								text: "text-box-theme-b",
								link: "/components/text-box-theme-b"
							}
						]
					},
					{
						text: "表单元素",
						items: [
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
							}
						]
					},
					{
						text: "dumpling",
						link: "/components/dumpling"
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
						text: "list-masonry",
						link: "/components/list-masonry"
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
