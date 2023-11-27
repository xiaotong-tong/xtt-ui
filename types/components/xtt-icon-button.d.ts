export interface XttIconButtonElement extends HTMLElement {
	// Properties
	disabled: boolean;
	autofocus: boolean;
	dataXttTooltip: string;
	type: string;
	size: string;

	readonly label: NodeListOf<HTMLLabelElement>;
}
