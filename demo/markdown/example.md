# xttUtils

## test

```js
let fn = () =&gt; {};

let fn = () =\&gt; {};
```

## random Methods

### random

返回一个介于 min 和 max 之间的整数 (包含 min 和 max)。

#### note

如果 max 大于 Number.MAX_SAFE_INTEGER，会返回一个介于 min 和 Number.MAX_SAFE_INTEGER 之间的整数

如果 min 小于 Number.MIN_SAFE_INTEGER，会返回一个介于 Number.MIN_SAFE_INTEGER 和 max 之间的整数

> Number.MAX_SAFE_INTEGER = 9007199254740991 = 2^53 - 1
>
> Number.MIN_SAFE_INTEGER = -9007199254740991 = -(2^53 - 1)

#### params

- [min=1] (number) (可选)：最小值
- [max=100] (number) (可选)：最大值

如果不传递参数，返回一个介于 1 和 100 之间的整数 (包含 0 和 100)。

如果包含一个参数，则返回一个介于 1 和参数之间的整数 (包含 1 和 max)。

如果包含两个参数，则返回一个介于 min 和 max 之间的整数 (包含 min 和 max)。

#### returns

- (number)：介于 min 和 max 之间的随机整数 (包含 min 和 max)。

#### example

```js
random(1, 10); // 1 - 10
random(10); // 1 - 10
random(); // 1 - 100
random(-Infinity, Infinity); // -9007199254740991 - 9007199254740991
```

### randomList

生成一个随机数列表

#### params

- [min=1] (number)：最小值
- [max=10] (number)：最大值
- [number|option] (object)：配置项, 如果是数字，则表示列表个数
  - [option.count=max-min+1] (number)：列表个数
  - [option.unique=false] (boolean)：列表中的数是否唯一

min 和 max 参数与 [random](./random.md) 方法一致。(默认值除外)

#### returns

- (number[])：每项均介于 min 和 max 之间的 length 为 count 的随机数列表

#### example

```js
randomList(1, 10, 5); // [8, 9, 10, 8, 10]
randomList(1, 10, 10); // [3, 5, 4, 1, 10, 7, 6, 9, 4, 10]
randomList(1, 10, {
	unique: false
}); // [10, 6, 4, 1, 3, 1, 9, 6, 4, 1]

randomList(1, 10, {
	count: 5,
	unique: true
}); // [ 1, 6, 9, 2, 8 ]
randomList(1, 10, {
	count: 10,
	unique: true
}); // [2, 10, 6, 4, 7, 9,  5, 8, 1, 3]
randomList(1, 10, {
	unique: true
}); // [4, 8, 10, 6, 1,5, 2,  7, 9, 3]
```

## string Methods

### getTermLeft

Get the string to the left of the matching item in the string

#### params

- str (string)：The string to get

- searchTerm (string | RegExp)：The string or regular expression to match

- [beforeWhichTimes=1] (number)：Stop after matching several times, the default is 1, if the number is greater than the number of matches, the string to the left of the last match is returned

#### returns

- (string)：Returns the string to the left of the matching item

#### example

```js
getTermLeft("abcde", "c"); // "ab"
getTermLeft("abcde", "c", 2); // "ab"
getTermLeft("abcdec", "c", 2); // "abcde"
getTermLeft("abc1de2", /\d/); // "abc"
getTermLeft("abc1de2", /\d/, 2); // "abc1de"
getTermLeft("abc1de2", /\d/, 3); // "abc1de"
```

### getTermRight

获取字符串中匹配项右侧的字符串

#### params

- str (string)：要获取的字符串

- searchTerm (string | RegExp)：要匹配的字符串或正则表达式

- [beforeWhichTimes=1] (number)：匹配到几次后停止，默认为 1, 如果数字大于匹配到的次数，则返回最后一个匹配项右侧的字符串，如果想取右侧开始第一个匹配项，可以传入 -1

#### returns

- (string)：返回匹配项右侧的字符串

#### example

```js
getTermRight("abcde", "c"); // "de"
getTermRight("abcde", "c", 2); // "de"
getTermRight("abcdec", "c", 2); // ""
getTermRight("abc1de2", /\d/); // "de2"
getTermRight("abc1de2", /\d/, 2); // ""
getTermRight("abc1de2", /\d/, 3); // ""
```

### getRangeByTerm

获取字符串中某个范围内的字符串

#### params

- str (string)：要处理的字符串
- term ([string | RegExp, string | RegExp])：要匹配的字符串或正则表达式范围

#### returns

- (string)：返回匹配范围内的字符串

#### example

```js
getRangeByTerm("abcde", ["b", "d"]); // "c"
getRangeByTerm("abcde", ["d", "b"]); // "c"
getRangeByTerm("a1bcd2e", [/\d/, /\d/]); // "bcd"
```

### charToCodePoint

返回一个字符串的 Unicode 编码点。

#### params

- str (string)：要转换的字符串
- [options] (Object)：可选参数
  - [separator=""] (string)：分隔符
  - [base=16] (2 | 8 | 10 | 16)：进制

#### returns

- (string)：Unicode 编码点

#### example

```js
charToCodePoint("Hello"); // "0x480x650x6c0x6c0x6f"
charToCodePoint("Hello World!", { separator: " " }); // "0x48 0x65 0x6c 0x6c 0x6f 0x20 0x57 0x6f 0x72 0x6c 0x64 0x21"
charToCodePoint("Hello World!", { base: 2, separator: " " }); // "0b1001000 0b1100101 0b1101100 0b1101100 0b1101111 0b100000 0b1010111 0b1101111 0b1110010 0b1101100 0b1100100 0b100001"
```

## function Methods

### fori

循环执行函数。

#### params

- collection (\*): 要循环的目标。
- iteratee (Iteratee): 在循环的每次迭代上执行的函数。
- options (object): 循环的选项。
- options.thisArg (object): iteratee 函数中的 this 的值。
- options.asyncIterator (boolean): 目标是否为异步迭代器。

Iteratee:

- iterator (\*): 当前迭代的值。
- i (number): 当前迭代的索引。
- target (\_): 当前迭代的目标。如果目标是对象，则此值为 Object.entries(\_)。

#### returns

- (Array | Promise\<Array>): 返回循环的结果。如果目标是异步迭代器，则返回值是 Promise。

### throttle

节流函数, 在调用函数时, 如果处于空闲状态, 则立即执行函数, 并进入等待状态,
在等待时间内, 如果再次调用函数, 则保存当前调用值, 直到等待时间结束,
如果多次调用函数,最后一次调用值会覆盖前面的调用值,
等待时间结束后, 如果有保存的调用值, 则执行函数, 并进入等待状态，如果没有保存的调用值, 则进入空闲状态，等待下一次调用。

#### params

- func (function)：要节流的函数
- delay (number)：等待时间

#### returns

- (function)：节流后的函数

#### example

```js
// 1 2 3 4 5 6 7 8 9 10
throttle((a) => console.log(a), 3000);
// 假如每隔 0.9 秒触发一次
// 1 4 7 10
// 0.9 秒时触发1, 立即执行;
// 1.8 秒后触发 2, 等待;
// 2.7 秒后触发 3, 等待;
// 3.6 秒后触发 4, 等待;
// 3.9 秒时等待时间结束，运行最后一次的调用，输出 4;
// 4.5 秒后触发 5, 等待
// ...
```

## date Methods

### formatDate

格式化日期

#### params

- date (Date|string|number): 日期
- format (string|object): 格式化字符串或者格式化选项
  - format (string): 格式化字符串, 默认为 'YYYY-MM-DD hh:mm:ss'，可选值参考下方 format 列表
  - lang (string): 语言，默认为 'en'

#### returns

- (string|Function): 格式化后的日期

如果仅传入 date 参数，返回日期固定的偏函数，后续可以传入 format 参数，可以用于多次格式化同一个日期，
如果初次调用时已经传入了 format 参数，则直接返回格式化后的日期

#### example

```js
formatDate("2023-01-01", "YYYY-MM-DD hh:mm:ss"); // => '2023-01-01 00:00:00'
formatDate("2023-01-01")("[YYYYMD]YYYY-M-D h:m:s"); // => 'YYYYMD2023-1-1 0:0:0'
formatDate("2023-01-01", "dddd"); // => 'Sunday'
formatDate("2023-01-01", { format: "dddd", lang: "zh-CN" }); // => '星期日'
```

##### format

支持的格式化占位符选项：

| 占位符 | 输出          | 详情                   |
| ------ | ------------- | ---------------------- |
| YY     | 23            | 两位数的年份           |
| YYYY   | 2023          | 四位数的年份           |
| M      | 1-12          | 月份                   |
| MM     | 01-12         | 月份，会格式化为两位数 |
| D      | 1-31          | 日期                   |
| DD     | 01-31         | 日期，会格式化为两位数 |
| h      | 0-23          | 小时                   |
| hh     | 00-23         | 小时，会格式化为两位数 |
| m      | 0-59          | 分钟                   |
| mm     | 00-59         | 分钟，会格式化为两位数 |
| s      | 0-59          | 秒                     |
| ss     | 00-59         | 秒，会格式化为两位数   |
| SSS    | 000-999       | 毫秒，会格式化为三位数 |
| d      | 0-6           | 星期几，0 代表星期日   |
| dd     | 日-六         | 星期几，最短写法       |
| ddd    | 周日-周六     | 星期几，短写法         |
| dddd   | 星期日-星期六 | 星期几，长写法         |

> dd, ddd, dddd 选项需要传入 lang 参数才能生效, 默认为 'en'
> 取值为 Intl.DateTimeFormat 中的 [weekday](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters) 选项
> dd -> narrow, ddd -> short, dddd -> long

#### references

- MDN [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)
