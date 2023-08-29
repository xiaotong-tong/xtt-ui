interface XttDialogElementEventMap {
	"xtt-close": CustomEvent;
	"xtt-submit": CustomEvent;
}

export interface XttDialogElement extends HTMLElement {
	// Properties
	title: string;

	// 对话框的目标元素，供 aria 属性使用
	triggerElement: HTMLElement;

	// Methods
	open(): void;
	close(): void;

	// Events
	addEventListener<K extends keyof XttDialogElementEventMap>(
		type: K,
		listener: (this: XttDialogElement, ev: XttDialogElementEventMap[K]) => any,
		useCapture?: boolean
	): void;
}
