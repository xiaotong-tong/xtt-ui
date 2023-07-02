import { updateElementStyle } from "./xtt-ui-utils.js";

const getPositionWithBlock = (rect, popRect, dir, margin, vp) => {
	let y = dir === "block-start" ? rect.top - popRect.height - margin : rect.bottom + margin;
	let x = rect.left + rect.width / 2 - popRect.width / 2;

	if (x < vp) {
		x = vp;
	} else if (x + popRect.width + vp > visualViewport.width) {
		x = 0 - vp;
	}

	return {
		top: y,
		[x >= 0 ? "left" : "right"]: Math.abs(x),
		overFlow: dir === "block-start" ? y < vp : y + popRect.height + vp > visualViewport.height
	};
};

/**
 * @param {HTMLElement} target
 * @param {HTMLElement} popover
 * @param {string[]} dirList
 * @param {object} options
 * @param {number} options.viewPadding
 * @param {number} options.margin
 */
export const displayPopover = (target, popover, dirList, options) => {
	const { viewPadding = 8, margin = 8 } = options || {};

	dirList = dirList || ["block-start", "block-end"];

	const rect = target.getBoundingClientRect();
	const popRect = popover.getBoundingClientRect();

	let position;

	for (const dir of dirList) {
		if (dir.startsWith("block")) {
			position = getPositionWithBlock(rect, popRect, dir, margin, viewPadding);
		} else {
			// TODO: inline
		}

		if (!position.overFlow) {
			break;
		}
	}

	updateElementStyle(
		popover,
		Object.assign({
			top: position.top ? position.top + "px" : "",
			bottom: position.bottom ? position.bottom + "px" : "",
			left: position.left ? position.left + "px" : "",
			right: position.right ? position.right + "px" : ""
		})
	);
};
