<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import "./css/com.css"
import GUI from "lil-gui";

let gui;

const delayShow = ref(false);

onMounted(async () => {
	await Promise.all([
		import("../../dist/xtt-msg.js"),
	])

	const operate = document.getElementById("operate");

	gui = new GUI({
		container: document.querySelector(".operate-wrapper")
	});

	const obj = {
		content: "![随机数]()",
	};

	const valueController = gui.add(obj, "content").onChange((value) => {
		operate.textContent = value;
	});


	delayShow.value = true;
});

onUnmounted(() => {
	gui.destroy();
});
</script>

# Msg 文本处理

xtt-msg 为自用字符串解析器。传入一些字符串，会按照书写格式返回解析后的字符串结果。

<section class="operate-wrapper">
	<div class="operate-content">
		<xtt-msg id="operate">![随机数]()</xtt-msg>
	</div>
</section>

## 基础用法

在标签中输入 !\[\*\*\](something) 格式的文本，显示的是解析后的文本

<section class="wrap">
	<xtt-msg>![随机数]()</xtt-msg>
</section>

```html
<xtt-msg>![随机数]()</xtt-msg>
```

## 计算

返回一个 js 计算后的结果，计算过程依赖与 js 的计算规则

`![计算](算式)`

<section class="wrap">
	<xtt-msg>![计算](3+2)</xtt-msg>
	<xtt-msg>![calc](![计算](3+15)-![计算](2*3))</xtt-msg>
</section>

```html
<xtt-msg>![计算](3+2)</xtt-msg>

<xtt-msg>![calc](![计算](3+15)-![计算](2*3))</xtt-msg>
```

## 判断

判断条件是否成立，返回对应的值，如果条件成立返回第一个值，否则返回第二个值

`![判断](条件-->>成立-->>不成立)`

<section class="wrap">
	<xtt-msg>![判断](3>2-->>1-->>0)</xtt-msg>
	<xtt-msg>![judge]('b'>'a'-->>1-->>0)</xtt-msg>
	<xtt-msg>![if](3!==3-->>1-->>0)</xtt-msg>
</section>

```html
<xtt-msg>![判断](3>2-->>1-->>0)</xtt-msg>
<xtt-msg>![judge]('b'>'a'-->>1-->>0)</xtt-msg>
<xtt-msg>![if](3!==3-->>1-->>0)</xtt-msg>
```

## 选择

如果第一个值是数字，返回对应索引的值

如果第一个值是字母，返回以`?<*>`对应命名索引的值

`![选择](数字索引-->>值1-->>值2)`

`![选择](非数字索引-->>?<命名索引名1>值1-->>?<命名索引名2>值2)`

<section class="wrap">
	<xtt-msg>![选择](2-->>a-->>2-->>3)</xtt-msg>
	<xtt-msg>![choice](-1-->>a-->>2-->>3)</xtt-msg>
	<xtt-msg>![choice](b-->>?&lt;a>a-->>?&lt;b>2-->>?&lt;c>3)</xtt-msg>
</section>

```html
<xtt-msg>![选择](2-->>a-->>2-->>3)</xtt-msg>
<xtt-msg>![choice](-1-->>a-->>2-->>3)</xtt-msg>
<xtt-msg>![choice](b-->>?<a>a-->>?<b>2-->>?<c>3)</xtt-msg>
```

## 随机数

返回一个指定范围内的随机数

`![随机数](最小值-->>最大值)`

<section class="wrap">
	<xtt-msg>![随机数]()</xtt-msg>
	<xtt-msg>![random](1-->>10)</xtt-msg>
	<xtt-msg>![r](1-->>10)</xtt-msg>
</section>

```html
<xtt-msg>![随机数]()</xtt-msg>
<xtt-msg>![random](1-->>10)</xtt-msg>
<xtt-msg>![r](1-->>10)</xtt-msg>
```

## 权重随机数

返回一个指定范围内的随机数(带权重)

`![权重随机数](随机范围列表-->>随机范围对应的权重列表)`

<section class="wrap">
	<xtt-msg>![权重随机数](1,2,3,4,5-->>1,1,2,2,1)</xtt-msg>
	<xtt-msg>![weidgeRandom](1,2,3,4,5-->>10,1,2,2,1)</xtt-msg>
	<xtt-msg>![WR](1,2,3,4,5-->>1,1,2,20,1)</xtt-msg>
</section>

```html
<xtt-msg>![权重随机数](1,2,3,4,5-->>1,1,2,2,1)</xtt-msg>
<xtt-msg>![weidgeRandom](1,2,3,4,5-->>10,1,2,2,1)</xtt-msg>
<xtt-msg>![WR](1,2,3,4,5-->>1,1,2,20,1)</xtt-msg>
```

## 非重随机数

返回一个不会重复的随机数

如果没有传入变量名，会返回一个随机数列表

如果传入变量名，会返回一个随机数，并将后续的随机数存入变量中，之后使用该变量名会返回存入的随机数

`![非重随机数](最小值-->>最大值-->>变量名)`

<section class="wrap">
	<xtt-msg>![非重随机数](1-->>10)</xtt-msg>
	<xtt-msg>![非重随机数](1-->>10-->>a)![变量](a),![变量](a),![变量](a),![变量](a),![变量](a),
![变量](a),![变量](a),![变量](a),![变量](a),![变量](a),![变量](a)</xtt-msg>
</section>

```html
<xtt-msg>![非重随机数](1-->>10)</xtt-msg>
<xtt-msg
	>![非重随机数](1-->>10-->>a)![变量](a),![变量](a),![变量](a),![变量](a),![变量](a),
	![变量](a),![变量](a),![变量](a),![变量](a),![变量](a),![变量](a)</xtt-msg
>
```

## 八进制

如果是数字，返回对应的八进制数，如果是字符，返回对应 unicode 编码的八进制数

`![八进制](字符)`

<section class="wrap">
	<xtt-msg>![八进制](10)</xtt-msg>
	<xtt-msg>![八进制](H)</xtt-msg>
</section>

```html
<xtt-msg>![八进制](10)</xtt-msg>

<xtt-msg>![八进制](H)</xtt-msg>
```

## 十六进制

如果是数字，返回对应的十六进制数，如果是字符，返回对应 unicode 编码的十六进制数

`![十六进制](字符)`

<section class="wrap">
	<xtt-msg>![十六进制](10)</xtt-msg>
	<xtt-msg>![十六进制](H)</xtt-msg>
</section>

```html
<xtt-msg>![十六进制](10)</xtt-msg>

<xtt-msg>![十六进制](H)</xtt-msg>
```

## 十进制

如果是数字，返回对应的十进制数，如果是字符，返回对应 unicode 编码的十进制数

`![十进制](字符)`

<section class="wrap">
	<xtt-msg>![十进制](0xa)</xtt-msg>
	<xtt-msg>![十进制](H)</xtt-msg>
</section>

```html
<xtt-msg>![十六进制](0xa)</xtt-msg>

<xtt-msg>![十六进制](H)</xtt-msg>
```

## 二进制

如果是数字，返回对应的二进制数，如果是字符，返回对应 unicode 编码的二进制数

`![二进制](字符)`

<section class="wrap">
	<xtt-msg>![二进制](0xa)</xtt-msg>
	<xtt-msg>![二进制](H)</xtt-msg>
</section>

```html
<xtt-msg>![二进制](0xa)</xtt-msg>

<xtt-msg>![二进制](H)</xtt-msg>
```

## 文本-反转文本

返回一个反转后的文本

`![文本-反转文本](文本)`

<section class="wrap">
	<xtt-msg>![文本-反转文本](Hello World)</xtt-msg>
	<xtt-msg>![text-reverse](Hello World)</xtt-msg>
</section>

```html
<xtt-msg>![文本-反转文本](Hello World)</xtt-msg>

<xtt-msg>![text-reverse](Hello World)</xtt-msg>
```

## 文本-取文本左

返回匹配规则匹配的字符左侧的文本，匹配规则是正则表达式文本

`![文本-取文本左](文本-->>匹配规则-->>界限)`

<section class="wrap">
	<xtt-msg>![文本-取文本左](Hello World-->>o)</xtt-msg>
	<xtt-msg>![文本-取文本左](Hello World-->>o-->>2)</xtt-msg>
	<xtt-msg>![文本-取文本左](Hello World-->>\W)</xtt-msg>
</section>

```html
<xtt-msg>![文本-取文本左](Hello World-->>o)</xtt-msg>
<xtt-msg>![文本-取文本左](Hello World-->>o-->>2)</xtt-msg>
<xtt-msg>![文本-取文本左](Hello World-->>\W)</xtt-msg>
```

## 文本-取文本右

返回匹配规则匹配的字符右侧的文本，匹配规则是正则表达式文本

`![文本-取文本右](文本-->>匹配规则-->>界限)`

<section class="wrap">
	<xtt-msg>![文本-取文本右](Hello World-->>o)</xtt-msg>
	<xtt-msg>![文本-取文本右](Hello World-->>o-->>2)</xtt-msg>
	<xtt-msg>![文本-取文本右](Hello World-->>l-->>-3)</xtt-msg>
	<xtt-msg>![文本-取文本右](Hello World-->>\W)</xtt-msg>
</section>

```html
<xtt-msg>![文本-取文本右](Hello World-->>o)</xtt-msg>
<xtt-msg>![文本-取文本右](Hello World-->>o-->>2)</xtt-msg>
<xtt-msg>![文本-取文本右](Hello World-->>l-->>-3)</xtt-msg>
<xtt-msg>![文本-取文本右](Hello World-->>\W)</xtt-msg>
```

## 文本-取中间

返回匹配规则匹配的字符右侧的文本，匹配规则是正则表达式文本

`![文本-取中间](文本-->>左侧匹配规则-->>右侧匹配规则)`

<section class="wrap">
	<xtt-msg>![文本-取中间](Hello World-->>l-->>r)</xtt-msg>
	<xtt-msg>![文本-取中间](Hello World-->>l(?=l)-->>r)</xtt-msg>
</section>

```html
<xtt-msg>![文本-取中间](Hello World-->>l-->>r)</xtt-msg>

<xtt-msg>![文本-取中间](Hello World-->>l(?=l)-->>r)</xtt-msg>
```

## 文本-取数字

返回文本中的所有数字字符

`![文本-取数字](文本)`

<section class="wrap">
	<xtt-msg>![文本-取数字](H2ell4o 1 Wo3rl5d)</xtt-msg>
</section>

```html
<xtt-msg>![文本-取数字](H2ell4o 1 Wo3rl5d)</xtt-msg>
```

## 文本-替换

返回文本中的所有数字字符

`![文本-替换](文本-->>匹配规则列表-->>替换文本列表)`

<section class="wrap">
	<xtt-msg>![文本-替换](Hello World-->>$-->>!)</xtt-msg>
	<xtt-msg>![文本-替换](helloWorld-->>h,W,$-->>H, W,!)</xtt-msg>
</section>

```html
<xtt-msg>![文本-替换](Hello World-->>$-->>!)</xtt-msg>

<xtt-msg>![文本-替换](helloWorld-->>h,W,$-->>H, W,!)</xtt-msg>
```

## 喵语

将文本转换为喵语

喵语转换依赖于 `nyaLang` 变量，如果没有传入 `nyaLang` 变量， `nyaLang` 变量默认为 `nya,喵,~,!,\u200d,ニャー,にゃ,\u200e`

`![喵语](文本)`

<section class="wrap">
	<xtt-msg>![喵语](Hello World!)</xtt-msg>
	<xtt-msg>![喵语](![变量](nyaLang-->>a,b,c,d,e,f,g,h)Hello World!)![变量](nyaLang-->>nya,喵,~,!,\u200d,ニャー,にゃ,\u200e)</xtt-msg>
</section>

```html
<xtt-msg>![喵语](Hello World!)</xtt-msg>
<xtt-msg
	>![变量](nyaLang-->>a,b,c,d,e,f,g,h)![喵语](Hello
	World!)![变量](nyaLang-->>nya,喵,~,!,\u200d,ニャー,にゃ,\u200e)</xtt-msg
>
```

## 解喵语

将喵语转换为文本

`![解喵语](文本)`

<section class="wrap">
	<xtt-msg v-if="delayShow">![变量](nyaLang-->>nya,喵,~,!,\u200d,ニャー,にゃ,\u200e)![解喵语](喵喵nya‌喵‍ニャー‌喵ニャー‍‌喵ニャー‍‌喵ニャー‎‌‍nya‌喵~‎‌喵ニャー‎‌喵にゃ~‌喵ニャー‍‌喵‍‍‌‍喵.)</xtt-msg>
</section>

```html
<xtt-msg
	>![解喵语](喵喵nya‌喵‍ニャー‌喵ニャー‍‌喵ニャー‍‌喵ニャー‎‌‍nya‌喵~‎‌喵ニャー‎‌喵にゃ~‌喵ニャー‍‌喵‍‍‌‍喵.)</xtt-msg
>
```

## 当前时间

返回当前时间

`![当前时间]()`

<section class="wrap">
	<xtt-msg>![当前时间]()</xtt-msg>
</section>

```html
<xtt-msg>![当前时间]()</xtt-msg>
```

## 返回

如果没有第二个参数，就将当前父级的解析文本更改为第一个参数的值，无论父级的解析值如何，最终返回值都是第一个参数的值，最外层除外。

如果有第二个参数，且为 0，那么就会将当前层级的解析文本更改为第一个参数的值，无论其它同级的解析值如何，最终父级的解析值都是第一个参数的值。

`![返回](文本-->>0)`

<section class="wrap">
	<xtt-msg>![文本-反转文本](Hello World!![返回](hi))</xtt-msg>
	<xtt-msg>![文本-反转文本](Hello World!![返回](hi-->>0))</xtt-msg>
	<xtt-msg>![文本-反转文本](Hello World!)![返回](hi)</xtt-msg>
	<xtt-msg>![文本-反转文本](Hello World!)![返回](hi-->>0)</xtt-msg>
</section>

```html
<xtt-msg>![文本-反转文本](Hello World!![返回](hi))</xtt-msg>
<xtt-msg>![文本-反转文本](Hello World!![返回](hi-->>0))</xtt-msg>
```

## 变量

设置或获取变量

`![变量](变量名)`
`![变量](变量名-->>值)`

<section class="wrap">
	<xtt-msg>![变量](a-->>1)![变量](a)</xtt-msg>
</section>

```html
<xtt-msg>![变量](a-->>1)![变量](a)</xtt-msg>
```

## 文本-注音

会解析成 ruby 标签

`![文本-注音](文本-->>注音)`

<section class="wrap">
	<xtt-msg>![文本-注音](你好-->>nihao)</xtt-msg>
</section>

```html
<xtt-msg>![文本-注音](你好-->>nihao)</xtt-msg>
```

## 文本-文字颜色

会在 style 属性中添加 color 属性

`![文本-文字颜色](文本-->>颜色)`

<section class="wrap">
	<xtt-msg>![文本-文字颜色](你好-->>red)</xtt-msg>
</section>

```html
<xtt-msg>![文本-文字颜色](你好-->>red)</xtt-msg>
```

## 文本-黑幕

会设置一个黑幕 class，用于隐藏文本，在鼠标悬浮时显示

`![文本-黑幕](文本)`

<section class="wrap">
	<xtt-msg>![文本-黑幕](你好)</xtt-msg>
</section>

```html
<xtt-msg>![文本-黑幕](你好)</xtt-msg>
```

## 换行

会转化为 br 标签

`![换行]()`

<section class="wrap">
	<xtt-msg>a![换行]()b</xtt-msg>
</section>

```html
<xtt-msg>a![换行]()b</xtt-msg>
```

## 空格

会转化为 \&nbsp; 字符

`![空格]()`

<section class="wrap">
	<xtt-msg>a![空格]()b</xtt-msg>
</section>

```html
<xtt-msg>a![空格]()b</xtt-msg>
```

## JSON

解析 JSON 字符串

`![JSON](JSON 字符串-->>键名)`

<section class="wrap">
	<xtt-msg>![JSON]({"message":"a", "value": { "message": "b", "value": "2" }}-->>[message])</xtt-msg>
	<xtt-msg>![JSON]({"message":"a", "value": { "message": "b", "value": "2" }}-->>[value][message])</xtt-msg>
</section>

```html
<xtt-msg>![JSON]({"message":"a", "value": { "message": "b", "value": "2" }}-->>[message])</xtt-msg>
<xtt-msg>![JSON]({"message":"a", "value": { "message": "b", "value": "2" }}-->>[value][message])</xtt-msg>
```

## 循环 & 循环变量

循环解析文本，会按照切分标记切分文本，然后将切分后的每一块作为循环体的值替换到循环文本中，在循环体中可以使用循环变量，共有两个循环变量，一个是值，一个是次数，使用 `![循环变量](值)` 和 `![循环变量](次数)` 来获取

> 循环变量只是别名，也可以使用 `![变量](循环变量值)` 和 `![变量](循环变量次数)` 来获取

`![循环](循环文本-->>切分标记-->>循环体)`

`![循环变量](循环变量名)`

:::warning
循环本身没有任何返回值，只是将循环体的值替换到循环文本中，如果想要获取循环体的值，可以在循环体中使用变量来存储想要的结果
:::

<section class="wrap">
	<xtt-msg>![变量](abc-->>![空格]())![循环](a1b2c3d4e-->>\d-->>![变量](abc-->>![变量](abc)![循环变量](值),)) ![变量](abc)</xtt-msg>
</section>

```html
<xtt-msg
	>![变量](abc-->>![空格]())![循环](a1b2c3d4e-->>\d-->>![变量](abc-->>![变量](abc)![循环变量](值),))
	![变量](abc)</xtt-msg
>
```
