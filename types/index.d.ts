import { XttTooltipElement } from "./components/xtt-tooltip";
import {
	XttButtonElement,
	XttButtonElementSlots
} from "./components/xtt-button";
import { XttIconButtonElement } from "./components/xtt-icon-button";
import { XttDialogElement } from "./components/xtt-dialog";
import { XttEditorMDElement } from "./components/xtt-editor-md";
import { XttIconElement } from "./components/xtt-icon";
import { XttInputFieldElement } from "./components/xtt-inputfield";
import { XttLinkElement } from "./components/xtt-link";
import { XttListElement } from "./components/xtt-list";
import { XttMarkdownElement } from "./components/xtt-markdown";
import { XttNumberFieldElement } from "./components/xtt-numberfield";
import { XttSelectElement } from "./components/xtt-select";
import { XttTextEditElement } from "./components/xtt-text-edit";
import { XttTextAreaElement } from "./components/xtt-textarea";
import { XttSoundElement } from "./components/xtt-sound";

declare global {
	interface HTMLElementTagNameMap {
		"xtt-tooltip": XttTooltipElement;
		"xtt-button": XttButtonElement & XttButtonElementSlots;
		"xtt-icon-button": XttIconButtonElement;
		"xtt-dialog": XttDialogElement;
		"xtt-editor-md": XttEditorMDElement;
		"xtt-icon": XttIconElement;
		"xtt-input": XttInputFieldElement;
		"xtt-link": XttLinkElement;
		"xtt-list": XttListElement;
		"xtt-markdown": XttMarkdownElement;
		"xtt-numberfield": XttNumberFieldElement;
		"xtt-select": XttSelectElement;
		"xtt-text-edit": XttTextEditElement;
		"xtt-textarea": XttTextAreaElement;
		"xtt-sound": XttSoundElement;
	}
}

export {
	XttTooltipElement,
	XttButtonElement,
	XttIconButtonElement,
	XttDialogElement,
	XttEditorMDElement,
	XttIconElement,
	XttInputFieldElement,
	XttLinkElement,
	XttListElement,
	XttMarkdownElement,
	XttNumberFieldElement,
	XttSelectElement,
	XttTextEditElement,
	XttTextAreaElement,
	XttSoundElement
};
