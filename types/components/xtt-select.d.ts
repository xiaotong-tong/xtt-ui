export interface XttSelectElement extends HTMLElement {
	// Properties
	value: string;

	readonly labels: NodeListOf<HTMLLabelElement>;
	disabled: boolean;
	autofocus: boolean;
}
