export interface XttNumberFieldElement extends HTMLElement {
	// Properties
	value: string | number;
	min: number | string;
	max: number | string;
	step: number | string;

	readOnly: boolean;
	disabled: boolean;
	autofocus: boolean;
	maxLength: number | string | null;
	minLength: number | string | null;
	readonly labels: NodeListOf<HTMLLabelElement>;
}
