export interface XttButtonElementSlots {
	default: HTMLSlotElement;
	icon?: HTMLSlotElement;
}

// export interface XttButtonElementProps {
// 	disabled?: boolean;
// 	autofocus?: boolean;
// 	line?: string;
// 	"data-xtt-tooltip"?: string;
// 	"data-aria-type"?: string;
// }

export interface XttButtonElement extends HTMLElement {
	// Properties
	disabled: boolean;
	autofocus: boolean;

	readonly label: NodeListOf<HTMLLabelElement>;
}
