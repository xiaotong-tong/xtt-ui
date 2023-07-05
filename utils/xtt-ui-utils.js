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
 * @param {HTMLElement[] | HTMLElement | NodeList} presetList
 * @returns {HTMLElement}
 */
export const attrValueAppendIds = (el, attrName, presetList) => {
	const attrValue = el.getAttribute(attrName);
	let attrValueList = attrValue ? attrValue.split(" ") : [];

	if (presetList.length) {
		for (let i = 0; i < presetList.length; i++) {
			const id = uniqueId(presetList[i]).id;
			if (attrValueList.includes(id)) {
				continue;
			}
			attrValueList.push(id);
		}
	} else if (presetList?.nodeType === 1) {
		const id = uniqueId(presetList).id;
		if (!attrValueList.includes(id)) {
			attrValueList.push(id);
		}
	}

	el.setAttribute(attrName, attrValueList.join(" "));

	return el;
};
