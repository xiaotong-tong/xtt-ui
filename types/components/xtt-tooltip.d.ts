interface XttTooltipElementEventMap {
	"xtt-tooltip-show": CustomEvent<{ tooltip: XttTooltipElement }>;
}

export interface XttTooltipElement extends HTMLElement {
	// Properties
	viewPadding: number;
	delay: number;

	initTrigger(elements: NodeList | HTMLElement | HTMLElement[]): void;
	refreshTooltipContent(el: HTMLElement): void;

	// Methods
	show(toElement: HTMLElement): void;
	hide(): void;

	// Events
	addEventListener<K extends keyof XttTooltipElementEventMap>(
		type: K,
		listener: (this: XttTooltipElement, ev: XttTooltipElementEventMap[K]) => any,
		useCapture?: boolean
	): void;
}
