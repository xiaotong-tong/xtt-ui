/**
 * @param {HTMLElement} el
 * @param {object} style
 */
export const updateElementStyle = (el, style) => {
	Object.assign(el.style, style);
};

/**
 * 给元素添加唯一 ID 值
 * @param {HTMLElement} element
 * @returns {HTMLElement}
 */
export const uniqueId = (element) => {
	if (!element.id) {
		element.id = "xttId" + ++uniqueId.uId;
	}
	return element;
};
uniqueId.uId = 0;
