var m=Object.defineProperty;var x=Object.getPrototypeOf;var z=Reflect.get;var k=(r,t,o)=>t in r?m(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o;var b=(r,t,o)=>(k(r,typeof t!="symbol"?t+"":t,o),o),a=(r,t,o)=>{if(!t.has(r))throw TypeError("Cannot "+o)};var e=(r,t,o)=>(a(r,t,"read from private field"),o?o.call(r):t.get(r)),u=(r,t,o)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,o)},v=(r,t,o,c)=>(a(r,t,"write to private field"),c?c.call(r,o):t.set(r,o),o);var p=(r,t,o)=>(a(r,t,"access private method"),o),g=(r,t,o)=>z(x(r),o,t);import{x as w}from"./form._HBYyMoL.js";import"./base.Wz2wNpMD.js";import"./reflect.QJLKHJUk.js";import"./xtt-ui-utils.Ke2hgjsQ.js";const f=new CSSStyleSheet;f.replaceSync(':host {--icon-button-size:36px;--icon-button-font-size:20px;--icon-button-border-color:hsl(0,0%,75%);--icon-button-bg-color:transparent;--icon-button-font-color:inherit;--icon-button-focus-outline:thin dotted black;--icon-button-bg-color-hover:transparent;--icon-button-font-color-hover:var(--primary-color);--icon-button-border-color-hover:var(--primary-color);}:host([type="primary"]) {--icon-button-bg-color:var(--primary-color);--icon-button-bg-color-hover:var(--primary-light-color);--icon-button-font-color:white;--icon-button-font-color-hover:white;--icon-button-border-color:var(--primary-color);--icon-button-bg-color-active:var(--primary-dark-color);}:host([type="danger"]) {--icon-button-bg-color:var(--danger-color);--icon-button-bg-color-hover:var(--danger-light-color);--icon-button-font-color:white;--icon-button-font-color-hover:white;--icon-button-border-color:var(--danger-color);--icon-button-bg-color-active:var(--danger-dark-color);--icon-button-border-color-hover:var(--danger-light-color);}:host([type="success"]) {--icon-button-bg-color:var(--success-color);--icon-button-bg-color-hover:var(--success-light-color);--icon-button-font-color:white;--icon-button-font-color-hover:white;--icon-button-border-color:var(--success-color);--icon-button-bg-color-active:var(--success-dark-color);--icon-button-border-color-hover:var(--success-light-color);}:host([type="warning"]) {--icon-button-bg-color:var(--warning-color);--icon-button-bg-color-hover:var(--warning-light-color);--icon-button-font-color:white;--icon-button-font-color-hover:white;--icon-button-border-color:var(--warning-color);--icon-button-bg-color-active:var(--warning-dark-color);--icon-button-border-color-hover:var(--warning-light-color);}:host([type="base"]) {--icon-button-bg-color:transparent;--icon-button-bg-color-hover:transparent;--icon-button-font-color-hover:inherit;--icon-button-border-color-hover:silver;}:host([size="large"]) {--icon-button-size:44px;--icon-button-font-size:24px;}:host([size="small"]) {--icon-button-size:28px;--icon-button-font-size:16px;}:host(:focus) {outline:var(--icon-button-focus-outline,thin dotted black);outline-offset:1px;}:host {width:var(--icon-button-size);height:var(--icon-button-size);display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;vertical-align:middle;border:thin solid;border-color:var(--icon-button-border-color,silver);cursor:pointer;background-color:var(--icon-button-bg-color,transparent);color:var(--icon-button-font-color,inherit);transition:background-color 0.2s;}@media (hover:hover) {:host(:hover) {background-color:var(--icon-button-bg-color-hover);border-color:var(--icon-button-border-color-hover,silver);color:var(--icon-button-font-color-hover,inherit);}}:host(:active) {background-color:var(--icon-button-bg-color-active,transparent);}:host > * {font-size:var(--icon-button-font-size);--icon-size:var(--icon-button-font-size);}');var C=`<slot id="iconSlot"></slot>
`,i,s,y;const n=class n extends w(){constructor(){super();u(this,s);u(this,i,void 0);v(this,i,document.createElement("xtt-tooltip"))}static get observedAttributes(){return[...super.observedAttributes,"data-xtt-tooltip","data-aria-type"]}connectedCallback(){this.role="button",this.hasAttribute("tabindex")||(this.tabIndex=0),super.connectedCallback(),p(this,s,y).call(this)}disconnectedCallback(){super.disconnectedCallback(),e(this,i).remove()}attributeChangedCallback(o,c,l){var d;o==="disabled"?this.tabIndex=l!==null?-1:0:o==="data-xtt-tooltip"&&(this.xttTooltip=l),(d=super.attributeChangedCallback)==null||d.call(this,o,c,l)}get xttTooltip(){return this.getAttribute("data-xtt-tooltip")}set xttTooltip(o){if(o===null)return this.removeAttribute("data-xtt-tooltip");this.xttTooltip!==o&&this.setAttribute("data-xtt-tooltip",o),e(this,i).refreshTooltipContent(this)}get size(){return this.getAttribute("size")}set size(o){if(o===null){this.removeAttribute("size");return}this.size!==o&&this.setAttribute("size",o)}get type(){return this.getAttribute("type")}set type(o){if(o===null){this.removeAttribute("type");return}this.type!==o&&this.setAttribute("type",o)}};i=new WeakMap,s=new WeakSet,y=function(){(this.closest("body")||this.getRootNode()).appendChild(e(this,i)),e(this,i).initTrigger(this)},b(n,"templateContent",C),b(n,"stylesContent",[...g(n,n,"stylesContent"),f]);let h=n;customElements.define("xtt-icon-button",h);
