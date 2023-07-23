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

/**
 * @param {HTMLElement} el
 * @param {string} attrName
 * @param {HTMLElement[] | HTMLElement | NodeList} presetEls
 * @returns {HTMLElement}
 */
export const attrValueAppendIds = (el, attrName, presetEls) => {
	const attrValue = el.getAttribute(attrName);
	let attrValueList = attrValue ? attrValue.split(" ") : [];

	if (presetEls.length) {
		presetEls.forEach((presetEl) => {
			const id = uniqueId(presetEl).id;
			if (attrValueList.includes(id)) {
				return;
			}
			attrValueList.push(id);
		});
	} else if (presetEls?.nodeType === 1) {
		const id = uniqueId(presetEls).id;
		if (!attrValueList.includes(id)) {
			attrValueList.push(id);
		}
	}

	el.setAttribute(attrName, attrValueList.join(" "));

	return el;
};
