import "./load.js";

// 要在设置 data 之前设置
// 名称要与 xtt-grid-column 的 name 属性一致
document.getElementById("grid").templates.isOld = function (row) {
	return `<span>${row.age >= 20 ? "大于20岁" : "小于20岁"}</span>`;
};

document.getElementById("grid").data = [
	{
		id: 1,
		name: "a",
		age: 18,
		email: "example@example.com"
	},
	{
		id: 2,
		name: "b",
		age: 21,
		email: "example@example.com"
	}
];
