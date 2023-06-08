/**
 * xttUtils v0.1.1
 * (c) 2023, xtt. (MIT License)
 * https://github.com/xiaotong-tong/xtt-utils
 */

/**
 * 获取一个整形数字
 * @param {any} value
 * @param {object} [option] 配置项
 * @param {boolean} [option.NaNFormat] - If true, the NaN value will be converted to 0.
 * @param {boolean} [option.int] - If true, the value will be converted to an integer.
 * @returns {number}
 */

const toNumber = (value, option) => {
	value = Number(value);

	if (Number.isNaN(value)) {
		return option?.NaNFormat ? 0 : NaN;
	}

	if (value > Number.MAX_SAFE_INTEGER) {
		value = Number.MAX_SAFE_INTEGER;
	} else if (value < Number.MIN_SAFE_INTEGER) {
		value = Number.MIN_SAFE_INTEGER;
	}

	if (option?.int) {
		value = parseInt(value);
	}

	return value;
};

/**
 * 获取一个整数的最大值和最小值
 * @param {number} min
 * @param {number} max
 * @returns {[number, number]} [min, max] 保证min <= max 且min和max都是js 中安全的整数范围内的整数
 * @private
 * @example
 * getMinAndMaxOfInt(1, 10) // [1, 10]
 * getMinAndMaxOfInt(10, 1) // [1, 10]
 * getMinAndMaxOfInt(1.5, 10.9) // [2, 10]
 * getMinAndMaxOfInt(-Infinity, Infinity) // [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]
 */

const getMinAndMaxOfInt = (min, max) => {
	if (min > max) {
		const temp = min;
		min = max;
		max = temp;
	}
	max = Math.floor(toNumber(max, { NaNFormat: true }));
	min = Math.ceil(toNumber(min, { NaNFormat: true }));

	return [min, max];
};

/**
 * 生成一个随机数
 * @param {number} [min = 1] 最小值
 * @param {number} [max = 100] 最大值
 * @returns {number} 返回一个介于 min 和 max 之间的随机整数(包含 min 和 max)
 * @example
 * random(1, 10) // 1 ~ 10
 * random(10) // 1 ~ 10
 * random() // 1 ~ 100
 * random(1, 10.5) // 1 ~ 10
 * random(1, Number.MAX_SAFE_INTEGER) // 1 ~ Number.MAX_SAFE_INTEGER
 */

const random = (min, max) => {
	if (min === undefined && max === undefined) {
		min = 1;
		max = 100;
	}
	if (max === undefined) {
		max = min;
		min = 1;
	}
	if (isNaN(min) || isNaN(max)) {
		return NaN;
	}
	[min, max] = getMinAndMaxOfInt(min, max);

	return min + Math.floor(Math.random() * (max - min + 1));
};

/**
 * 乱序数组
 * @param {any[]} list 需要打乱的数组
 * @returns {any[]} 乱序后的数组
 * @example
 * shuffle([1, 2, 3, 4, 5]) // [2, 4, 1, 5, 3]
 */

const shuffle = (list) => {
	if (!list?.length) {
		return [];
	}

	// 复制原数组，防止修改直接影响原数组的值
	const copy = [...list];

	for (let i = copy.length - 1; i > 0; i--) {
		const randomIndex = random(0, i);
		const temp = copy[randomIndex];
		copy[randomIndex] = copy[i];
		copy[i] = temp;
	}

	return copy;
};

/**
 * Converts a base64 string to a Blob object.
 * @param {string} b64Data base64 string
 * @returns {Promise<Blob>} promise of Blob object
 * @example
 * b64ToBlob("data:image/png;base64,...")
 */

const b64ToBlob = async (b64Data) => {
	return (await fetch(b64Data)).blob();
};

/**
 * @support only support browser, because FileReader is not supported in nodejs
 * @description Convert file to base64
 * @param {File} file File Object
 * @returns {Promise<string>} promise of base64 string
 */

const fileToB64 = async (file) => {
	if (typeof FileReader === "undefined") {
		return Promise.reject(new Error("FileReader is not supported"));
	}

	if (!file) {
		return "";
	}

	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
};

/**
 * 节流函数
 * @param { Function } func  要节流的函数
 * @param { number} delay 延迟时间
 * @return { Function } 节流后的函数
 */

const throttle = (func, delay) => {
	let lastArgs = null;
	let isWaiting = false;

	const res = (...args) => {
		if (!isWaiting) {
			isWaiting = true;
			func(...args);
			setTimeout(() => {
				isWaiting = false;
				if (lastArgs !== null) {
					const lastArgsCopy = lastArgs;
					lastArgs = null;
					res(...lastArgsCopy);
				}
			}, delay);
		} else {
			lastArgs = args;
		}
	};

	return res;
};

/**
 * 开启链式调用，必须调用 value 方法获取最终的值
 * @param {object} [self=this] 调用链式调用的对象,默认为 this
 * @param {*} [initValue] 初始值, 在下一次调用链式调用的方法时会作为第一个参数传入
 *
 * 如果仅传入一个参数, 且该参数不是对象, 则该参数会作为 initValue 值，如果传入的是对象，则该对象会作为 self 值
 * @returns {Proxy} 代理对象
 * @example
 * chain(xttUtils, "Hello World!").reverse().reverse().getTermRight(" ").endsWith("World").value() // true
 */

function chain(self, initValue) {
	if (typeof initValue === "undefined" && typeof self !== "object") {
		initValue = self;
		self = undefined;
	}

	if (typeof self === "undefined") {
		self = this;
	}

	let value = initValue;

	const proxyed = new Proxy(self, {
		get: (target, prop) => {
			if (prop === "value") {
				return () => value;
			}
			if (typeof target[prop] === "function") {
				return (...args) => {
					value = target[prop](value, ...args);
					return proxyed;
				};
			}
			return proxyed;
		}
	});

	return proxyed;
}

/**
 * 函数柯里化
 * @param {Function} fn 要柯里化的函数
 * @param  {...any} [args] 初始化的参数
 * @returns {Function | any} 柯里化后的函数,如果参数已经足够,则返回函数执行结果
 * @example
 * const add = (a, b, c) => a + b + c;
 * const curriedAdd = curry(add);
 * const _ = curry.placeholder;
 * curriedAdd(1, 2, 3); // 6
 * curriedAdd(1)(2, 3); // 6
 * curriedAdd(1, 2)(3); // 6
 * curriedAdd(1)(2)(3); // 6
 * curriedAdd(_, 2)(1)(3); // 6
 * curriedAdd(_, 2, 3)(1); // 6
 * curriedAdd(_, _, 3)(_, 2)(1); // 6
 * curry(add, 10, 20, 30, 4); // 60
 */

const curry = (fn, ...args) => {
	if (args.filter((arg) => arg === curry.placeholder).length === 0 && args.length >= fn.length) {
		return fn(...args);
	}
	return (...nextArgs) => {
		const allArgs = args.map((arg) => (arg === curry.placeholder ? nextArgs.shift() ?? curry.placeholder : arg));
		return curry(fn, ...allArgs, ...nextArgs);
	};
};

curry.placeholder = Symbol("placeholder");

/**
 * 组合函数 从右到左依次执行函数组合
 * @param  {...Function} fns 所有要组合的函数必须是单参数函数，最后一个函数可以是多参数函数
 * @returns 组合函数的执行结果
 * @example
 * const _ = xttUtils.curry.placeholder;
 * const isEndsWith = xttUtils.curry(xttUtils.endsWith, _, "World!", undefined);
 * const getTermRight = xttUtils.curry(xttUtils.getTermRight, _, " ", 1);
 * compose(isEndsWith, getTermRight)("Hello World!") // true
 */

const compose = (...fns) => {
	return fns.reduceRight((v, fn) => (...args) => {
		return fn(v(...args));
	});
};

/**
 * 将数字转换为指定进制的字符串
 * @param {number} num 需要转换的数字
 * @param {2 | 8 | 10 | 16} [base=10] 转换的进制
 * @returns {string} 返回指定进制的数字字符串, 除了十进制外, 其他进制会添加字符串前缀 0x, 0o, 0b
 * @example
 * conversionBase(10, 2) // "0b1010"
 * conversionBase(10, 8) // "0o12"
 * conversionBase(10, 16) // "0xa"
 * conversionBase(0xa) // "10"
 */

const conversionBase = (num, base) => {
	if (typeof base === "undefined" || Number.isNaN(Number(base))) {
		base = 10;
	}
	// 根据进制选择前缀
	const basePrefix = base === 16 ? "0x" : base === 8 ? "0o" : base === 2 ? "0b" : "";
	return basePrefix + num.toString(base);
};

/**
 * 将数字转换为千分位
 * @param {number} num 需要转换的数字
 * @param {number} [maximumFractionDigits=20] 最大小数位数
 * @returns {string} 返回一个千分位的字符串
 * @example
 * thousandth(1000000) // "1,000,000"
 * thousandth(1000000.1234) // "1,000,000.1234"
 */

const thousandth = (num, maximumFractionDigits) => {
	if (typeof maximumFractionDigits === "undefined") {
		maximumFractionDigits = 20;
	}
	const numberFormat = new Intl.NumberFormat("en-US", {
		maximumFractionDigits: maximumFractionDigits
	});
	return numberFormat.format(num);
};

/**
 * 生成一个随机数列表
 * @param {number} [min=1] 最小值
 * @param {number} [max=10] 最大值
 * @param {number | object} [option] 配置项, 如果是数字，则表示列表个数
 * @param {number} [option.count=max-min+1] 列表个数
 * @param {boolean} [option.unique=false] 列表中的数是否唯一
 * @returns {number[]} 每项均介于 min 和 max 之间的 length 为 count 的随机数列表(包含 min 和 max)
 * @see ./random.js
 * @example
 * random(1, 10) // [1 ~ 10]
 * random(1, 10, 5) // [1 ~ 10, ...*4]
 */

const randomList = (min, max, option) => {
	if (min === undefined) {
		min = 1;
	}
	if (max === undefined) {
		max = 10;
	}
	[min, max] = getMinAndMaxOfInt(min, max);

	if (min === max) {
		return [max];
	}

	/**
	 * @type {number}
	 */
	let count;
	if (typeof option === "number") {
		count = option;
	} else if (typeof option === "object") {
		count = option.count ?? max - min + 1;
	} else {
		count = max - min + 1;
	}

	if (count <= 0) {
		return [];
	}

	/**
	 * @type {boolean}
	 */
	let unique = option?.unique ?? false;

	if (!unique) {
		const list = [];
		for (let i = 0; i < count; i++) {
			list.push(random(min, max));
		}
		return list;
	} else {
		// 如果 count 大于 (max - min) / 2，那么就直接生成一个随机数组，然后打乱顺序，再截取 count 个数
		// 否则就生成一个集合，然后不断随机生成一个数，直到集合的长度达到 count
		if (count > (max - min) / 2) {
			let randomArr = Array.from({ length: max - min + 1 }, (_, i) => i + min);

			randomArr = shuffle(randomArr);
			if (count === undefined) {
				return randomArr;
			} else {
				return randomArr.slice(0, count);
			}
		} else {
			const randomSet = new Set();
			while (randomSet.size < count) {
				randomSet.add(random(min, max));
			}
			return Array.from(randomSet);
		}
	}
};

const getListSum = (list) => {
	return list.reduce((a, b) => a + b);
};

/**
 * 获取权重随机数
 * @param {any[] | Object<string,number>} randomList 随机数列表
 * 当 randomList 为 Object 时，权重列表将被忽略，Object 的 key 为随机数列表，value 为权重列表
 * @param {number[]} [weightedList] 权重列表
 * @returns {any} 随机数列表中的某一项
 * @example
 * weightedRandom([1, 2, 3], [4, 5, 6]) // 4/15 的概率返回 1，5/15 的概率返回 2，6/15 的概率返回 3
 * weightedRandom({ 1: 4, 2: 5, 3: 6 }) // 同上
 */

function weightedRandom(randomList, weightedList) {
	if (!Array.isArray(randomList) && randomList instanceof Object) {
		weightedList = Object.values(randomList);
		randomList = Object.keys(randomList);
	}

	let sum = 0;

	if (Array.isArray(randomList) && Array.isArray(weightedList)) {
		if (weightedList.length > randomList.length) {
			weightedList.length = randomList.length;
		} else {
			randomList.length = weightedList.length;
		}
		const r = random(1, getListSum(weightedList));
		for (let i = 0; i < randomList.length; i++) {
			sum += weightedList[i];
			if (r <= sum) {
				return randomList[i];
			}
		}
	}

	return randomList[0];
}

/**
 * 生成一个随机的十六进制颜色值
 * @returns {string} 返回一个随机的十六进制颜色值
 * @example
 * randomHexColor() // #e672ac
 */

const randomHexColor = () => {
	return `#${Math.floor(Math.random() * 0xffffff)
		.toString(16)
		.padStart(6, "0")}`;
};

/**
 * @description 反转字符串
 * @param {string} text
 * @returns {string} reverse text
 * @example
 * reverse("hello") // olleh
 * reverse("hello world!") // !dlrow olleh
 */

const reverse = (text) => {
	if (!text?.length) {
		return "";
	}
	let resText = "";

	for (let i = text.length - 1; i >= 0; i--) {
		resText += text[i];
	}
	return resText;
};

/**
 * @description 将字符串转换为数字
 * @param {string} str
 * @returns {number} 返回一个数字
 * @example
 * strToNum("123") // 123
 * strToNum("123.456") // 123.456
 * strToNum("123.456.789") // 123.456789
 */

const strToNum = (str) => {
	if (str === undefined || str === "" || Number.isNaN(str)) {
		return NaN;
	}

	if (!Number.isNaN(Number(str))) {
		return Number(str);
	}

	// If the string contains no numbers, return NaN.
	if (!~str.search(/\d/)) {
		return NaN;
	}

	const removeNaNChar = (str) => {
		return str.replace(/\D/g, "");
	};

	// If the string starts with a -, it means the number is negative. Set sign to -1.
	let sign = 1;
	if (str.startsWith("-")) {
		sign = -1;
	}

	const pointIndex = str.indexOf(".");
	if (~pointIndex) {
		return (
			sign * parseFloat(`${removeNaNChar(str.slice(0, pointIndex))}.${removeNaNChar(str.slice(pointIndex + 1))}`)
		);
	} else {
		return sign * parseInt(removeNaNChar(str));
	}
};

/**
 * 返回一个字符串的 Unicode 编码点。
 * @param {string} str 需要转换的字符串
 * @param {Object} [options] 配置项
 * @param {string} [options.separator=""]  分隔符, 默认值为 ""
 * @param {2 | 8 | 10 | 16} [options.base=16] 转换的基数, 默认值为 16
 * @returns {string} Unicode 编码点
 * @example
 * charToCodePoint("Hello"); // "0x480x650x6c0x6c0x6f"
 * charToCodePoint("Hello World!", { separator: " "}) // "0x48 0x65 0x6c 0x6c 0x6f 0x20 0x57 0x6f 0x72 0x6c 0x64 0x21"
 * charToCodePoint("Hello World!", { base: 2, separator: " " }) // "0b1001000 0b1100101 0b1101100 0b1101100 0b1101111 0b100000 0b1010111 0b1101111 0b1110010 0b1101100 0b1100100 0b100001"
 */

const charToCodePoint = (str, options) => {
	if (!str) {
		return "";
	}

	if (!options) {
		options = {};
	}
	if (!options.separator) {
		options.separator = "";
	}
	if (!options.base) {
		options.base = 16;
	}

	return [...str].map((char) => conversionBase(char.codePointAt(0), options?.base)).join(options.separator);
};

/**
 * 判断字符串是否以指定的字符串或正则表达式匹配的字符串开头
 * @param {string} str 要判断的字符串
 * @param {string | RegExp} prefix 指定的字符串或正则表达式
 * @param {number} [position] 开始判断的位置
 * @returns {boolean} 如果字符串以指定的字符串或正则表达式匹配的字符串开头则返回 true，否则返回 false
 * @example
 * startsWith("abc", "a"); // true
 * startsWith("abc", "b"); // false
 * startsWith("abc", "b", 1); // true
 * startsWith("abc", /^a/); // true
 * startsWith("abc", /^b/); // false
 * startsWith("abc", /^b/, 1); // true
 */

const startsWith = (str, prefix, position) => {
	if (typeof str !== "string") {
		return false;
	}

	if (typeof prefix === "string") {
		return str.startsWith(prefix, position);
	}

	if (prefix instanceof RegExp) {
		const newStr = str.slice(position);

		if (prefix.source.startsWith("^")) {
			return prefix.test(newStr);
		} else {
			return new RegExp("^" + prefix.source, prefix.flags).test(newStr);
		}
	}

	return false;
};

/**
 * 判断字符串是否以指定的字符串或正则表达式匹配的字符串结尾
 * @param {string} str 要判断的字符串
 * @param {string | RegExp} suffix 指定的字符串或正则表达式
 * @param {number} [endPosition] 结束判断的位置
 * @returns {boolean} 如果字符串以指定的字符串或正则表达式匹配的字符串结尾则返回 true，否则返回 false
 * @example
 * endsWith("abc", "c"); // true
 * endsWith("abc", "b"); // false
 * endsWith("abc", "b", 2); // true
 * endsWith("abc", /c$/); // true
 * endsWith("abc", /b$/); // false
 * endsWith("abc", /b$/, 2); // true
 */

const endsWith = (str, suffix, endPosition) => {
	if (typeof str !== "string") {
		return false;
	}

	if (typeof suffix === "string") {
		return str.endsWith(suffix, endPosition);
	}

	if (suffix instanceof RegExp) {
		const newStr = str.slice(0, endPosition);

		if (suffix.source.endsWith("$")) {
			return suffix.test(newStr);
		} else {
			return new RegExp(suffix.source + "$", suffix.flags).test(newStr);
		}
	}

	return false;
};

/**
 * 获取字符串中匹配项左侧的字符串
 * @param {string} str 要处理的字符串
 * @param {string | RegExp} searchTerm 要匹配的字符串或正则表达式
 * @param {number} [beforeWhichTimes=1] 匹配到几次后停止，默认为1, 如果数字大于匹配到的次数，则返回最后一个匹配项左侧的字符串
 * @returns {string} 返回匹配项左侧的字符串
 * @example
 * getTermLeft("abcde", "c") // "ab"
 * getTermLeft("abcde", "c", 2) // "ab"
 * getTermLeft("abcdec", "c", 2) // "abcde"
 * getTermLeft("abc1de2", /\d/) // "abc"
 * getTermLeft("abc1de2", /\d/, 2) // "abc1de"
 * getTermLeft("abc1de2", /\d/, 3) // "abc1de"
 */

const getTermLeft = (str, searchTerm, beforeWhichTimes) => {
	if (typeof str !== "string" || searchTerm === undefined) {
		return "";
	}

	if (beforeWhichTimes === undefined) {
		beforeWhichTimes = 1;
	}

	if (beforeWhichTimes === 0) {
		return "";
	}

	if (startsWith(str, searchTerm)) {
		if (beforeWhichTimes <= 1) {
			return "";
		} else {
			beforeWhichTimes -= 1;
		}
	}

	const grep = new RegExp(`.+?(?=${typeof searchTerm === "string" ? searchTerm : searchTerm.source})`, "g");
	const result = str.match(grep);

	if (result === null) {
		return "";
	}

	if (beforeWhichTimes <= -result.length) {
		beforeWhichTimes = result.length === 1 ? 1 : -result.length + 1;
	}

	return result.slice(0, beforeWhichTimes).join("");
};

/**
 *  获取字符串中匹配项右侧的字符串
 * @param {string} str 要处理的字符串
 * @param {string | RegExp} searchTerm 要匹配的字符串或正则表达式
 * @param {number} [afterWhichTimes] 匹配到几次后停止，默认为1, 如果数字大于匹配到的次数，则返回最后一个匹配项右侧的字符串
 * @returns {string} 返回匹配项右侧的字符串
 * @example
 * getTermRight("abcde", "c") // "de"
 * getTermRight("abcde", "c", 2) // "de"
 * getTermRight("abcdec", "c", 2) // ""
 * getTermRight("abc1de2", /\d/) // "de2"
 * getTermRight("abc1de2", /\d/, 2) // ""
 * getTermRight("abc1de2", /\d/, 3) // ""
 */

const getTermRight = (str, searchTerm, afterWhichTimes) => {
	if (typeof str !== "string" || searchTerm === undefined) {
		return "";
	}

	if (afterWhichTimes === undefined) {
		afterWhichTimes = 1;
	}

	if (afterWhichTimes === 0) {
		return str;
	}

	const searchGrep = typeof searchTerm === "string" ? searchTerm : searchTerm.source;

	const grep = new RegExp(`(?<=(^|${searchGrep})).*?(${searchGrep}|$)`, "g");
	const result = str.match(grep);

	if (result === null) {
		return "";
	}

	if (afterWhichTimes >= result.length) {
		afterWhichTimes = result.length - 1;
	}
	if (afterWhichTimes <= -result.length) {
		afterWhichTimes = -result.length + 1;
	}

	return result.slice(afterWhichTimes).join("");
};

/**
 * 获取字符串中某个范围内的字符串
 * @param {string} str 要处理的字符串
 * @param {[string | RegExp, string | RegExp]} term 要匹配的字符串或正则表达式范围
 * @returns {string} 返回匹配范围内的字符串
 * @example
 * getRangeByTerm("abcde", ["b", "d"]) // "c"
 * getRangeByTerm("abcde", ["d", "b"]) // "c"
 * getRangeByTerm("a1bcd2e", [/\d/, /\d/]) // "bcd"
 */

const getRangeByTerm = (str, term) => {
	if (typeof str !== "string" || term === undefined) {
		return "";
	}

	const l = term[0];
	const r = term[1];
	const lGrep = typeof l === "string" ? l : l.source;
	const rGrep = typeof r === "string" ? r : r.source;

	let matchType = str.match(new RegExp(`${lGrep}((?:[\\s\\S](?<!${lGrep}))*?)${rGrep}`));

	if (matchType) {
		return matchType[1];
	} else {
		matchType = str.match(new RegExp(`${rGrep}((?:[\\s\\S](?<!${rGrep}))*?)${lGrep}`));
		return matchType ? matchType[1] : "";
	}
};

/**
 * 删除行前的空格，保留缩进层级，如果是多行，那么会删除所有行的最小共有空格数
 * @param {string} str
 * @param {object} options
 * @param {boolean} [options.removeFirstEmptyLine=false] 是否删除第一行的空行。默认值为 false
 * @param {boolean} [options.removeLastEmptyLine=false] 是否删除最后一行的空行。默认值为 false
 * @returns {string} 返回删除行前空格 format 后的字符串
 * @example
 * trimLineStart("  123") // "123"
 * trimLineStart("  123\n  456") // "123\n456"
 * trimLineStart("  123\n    456") // "123\n  456"
 */
const trimLineStart = (str, options) => {
	const { removeFirstEmptyLine = false, removeLastEmptyLine = false } = options || {};

	if (removeFirstEmptyLine) {
		str = str.replace(/^\s*\n/, "");
	}
	if (removeLastEmptyLine) {
		str = str.replace(/\n\s*$/, "");
	}

	// 正则表达式这样写是为了不匹配没有内容的行，否则会匹配到空行
	const leadingSpacesAtLine = str.match(/^(?!$)[ \t]*/gm);

	if (!leadingSpacesAtLine) {
		return str;
	}

	// 如果只有一行，那么直接使用 trimStart 返回就行，节约性能
	if (leadingSpacesAtLine.length === 1) {
		return str.trimStart();
	}

	// 如果有多行，那么就遍历所有行，获取共同的最小的空格数，然后每行删除最小空格数的空格
	const minSapceNum = leadingSpacesAtLine.reduce((min, line) => {
		return Math.min(typeof min === "number" ? min : min.length, line.length);
	});
	return str.replace(new RegExp(`^[ \\t]{${minSapceNum}}`, "gm"), "");
};

export {
	b64ToBlob,
	chain,
	charToCodePoint,
	compose,
	conversionBase,
	curry,
	endsWith,
	fileToB64,
	getRangeByTerm,
	getTermLeft,
	getTermRight,
	random,
	randomHexColor,
	randomList,
	reverse,
	shuffle,
	startsWith,
	strToNum,
	thousandth,
	throttle,
	trimLineStart,
	weightedRandom
};
