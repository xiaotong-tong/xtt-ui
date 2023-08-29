export interface XttMarkdownElement extends HTMLElement {
	// Properties
	readonly headers: NodeListOf<HTMLHeadingElement>;
	readonly parsed: string;
	readonly abstract: string;
}
