export interface XttInputFieldElement extends HTMLElement {
	// Properties
	value: string;
	readOnly: boolean;
	maxLength: number | string | null;
	minLength: number | string | null;

	readonly labels: NodeListOf<HTMLLabelElement>;
	disabled: boolean;
	autofocus: boolean;
}
