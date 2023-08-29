export interface XttLinkElement extends HTMLElement {
	// Properties
	href: string;
	target: string;
	readonly origin: string;
	pathname: string;
	search: string;

	// Methods
	toString(): string;
}
