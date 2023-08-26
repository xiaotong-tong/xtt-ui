import { XttTooltipElement } from "./components/xtt-tooltip";
import { XttButtonElement } from "./components/xtt-button";
import { XttDialogElement } from "./components/xtt-dialog";

declare global {
	interface HTMLElementTagNameMap {
		"xtt-tooltip": XttTooltipElement;
		"xtt-button": XttButtonElement;
		"xtt-dialog": XttDialogElement;
	}
}

export { XttTooltipElement, XttButtonElement, XttDialogElement };
