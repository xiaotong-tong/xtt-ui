export interface XttTextAreaElement extends HTMLElement {
	// Properties
	value: string;

	readonly labels: NodeListOf<HTMLLabelElement>;
	disabled: boolean;
	autofocus: boolean;
	placeholder: string | null;
}
