interface XttListElementEventMap {
	"xtt-resize": CustomEvent<{
		width: number; // 当前 list 的宽度
		now: number; // 当前 list 内部有几列
		next: number; // 下一次 list 内部有几列
	}>;
}

export interface XttListElement extends HTMLElement {
	// Properties
	onChildrenAddedCallback: (children: HTMLElement) => void;

	// Events
	addEventListener<K extends keyof XttListElementEventMap>(
		type: K,
		listener: (this: XttListElement, ev: XttListElementEventMap[K]) => any,
		useCapture?: boolean
	): void;
}
