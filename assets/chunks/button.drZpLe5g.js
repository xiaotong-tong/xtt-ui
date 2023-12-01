var A=Object.defineProperty;var z=Object.getPrototypeOf;var N=Reflect.get;var S=(r,o,t)=>o in r?A(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t;var p=(r,o,t)=>(S(r,typeof o!="symbol"?o+"":o,t),t),f=(r,o,t)=>{if(!o.has(r))throw TypeError("Cannot "+t)};var e=(r,o,t)=>(f(r,o,"read from private field"),t?t.call(r):o.get(r)),h=(r,o,t)=>{if(o.has(r))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(r):o.set(r,t)},y=(r,o,t,s)=>(f(r,o,"write to private field"),s?s.call(r,t):o.set(r,t),t);var u=(r,o,t)=>(f(r,o,"access private method"),t),m=(r,o,t)=>N(z(r),t,o);import{x as T}from"./form.paJ4fB6U.js";import{c as l}from"./index.esm.RuPJ9LKr.js";const k=new CSSStyleSheet;k.replaceSync(':host {--button-bg-color:transparent;--button-font-color:inherit;--button-padding:4px 10px;--button-border-color:hsl(0,0%,75%);--button-border-radius:4px;--button-focus-outline:thin dotted black;--button-line-clamp:1;--button-bg-color-hover:transparent;--button-font-color-hover:var(--primary-color);--button-border-color-hover:var(--primary-color);}:host([type="primary"]) {--button-bg-color:var(--primary-color);--button-bg-color-hover:var(--primary-light-color);--button-bg-color-active:var(--primary-dark-color);--button-font-color:white;--button-font-color-hover:white;--button-border-color:var(--primary-color);--button-border-color-hover:var(--primary-light-color);}:host([type="danger"]) {--button-bg-color:var(--danger-color);--button-bg-color-hover:var(--danger-light-color);--button-bg-color-active:var(--danger-dark-color);--button-font-color:white;--button-font-color-hover:white;--button-border-color:var(--danger-color);--button-border-color-hover:var(--danger-light-color);}:host([type="success"]) {--button-bg-color:var(--success-color);--button-bg-color-hover:var(--success-light-color);--button-bg-color-active:var(--success-dark-color);--button-font-color:white;--button-font-color-hover:white;--button-border-color:var(--success-color);--button-border-color-hover:var(--success-light-color);}:host([type="warning"]) {--button-bg-color:var(--warning-color);--button-bg-color-hover:var(--warning-light-color);--button-bg-color-active:var(--warning-dark-color);--button-font-color:white;--button-font-color-hover:white;--button-border-color:var(--warning-color);--button-border-color-hover:var(--warning-light-color);}:host([type="base"]) {--button-font-color-hover:inherit;--button-border-color-hover:var(--button-border-color);}:host([size="large"]) {--button-padding:8px 15px;}:host([size="small"]) {--button-padding:1px 4px;}:host(:focus) {outline:var(--button-focus-outline,thin dotted black);outline-offset:1px;}:host {display:inline-flex;box-sizing:border-box;border:thin solid;cursor:pointer;overflow-wrap:break-word;max-width:100%;border-radius:var(--button-border-radius,4px);padding:var(--button-padding,4px 10px);background-color:var(--button-bg-color,transparent);border-color:var(--button-border-color,silver);color:var(--button-font-color,inherit);transition:background-color 0.2s;}@media (hover:hover) {:host(:hover) {background-color:var(--button-bg-color-hover);border-color:var(--button-border-color-hover,silver);color:var(--button-font-color-hover,inherit);}}:host(:active) {background-color:var(--button-bg-color-active,transparent);}:host([block]) {display:flex;width:100%;justify-content:center;}#text {display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:var(--button-line-clamp,1);overflow:hidden;text-align:start;}');var E=`<span part="text" id="text">
	<slot id="textSlot"></slot>
</span>
`,a,v,C,c,g,i,n;const b=class b extends T("reflect"){constructor(){super();h(this,v);h(this,c);h(this,i);p(this,"observeOptions",{childList:!0,subtree:!0});h(this,a,void 0);y(this,a,document.createElement("xtt-tooltip")),e(this,a).textContent=this.textContent}static get observedAttributes(){return[...super.observedAttributes,"type","line","size","block","data-xtt-tooltip","data-aria-type"]}connectedCallback(){this.role="button",this.hasAttribute("tabindex")||(this.tabIndex=0),super.connectedCallback(),u(this,v,C).call(this),u(this,c,g).call(this)}disconnectedCallback(){super.disconnectedCallback(),e(this,a).remove()}attributeChangedCallback(t,s,d){var x;t==="disabled"?this.tabIndex=d!==null?-1:0:t==="data-xtt-tooltip"?e(this,a).refreshTooltipContent(this):t==="line"&&(this.line=d),(x=super.attributeChangedCallback)==null||x.call(this,t,s,d)}_reflectElementAdded(){u(this,c,g).call(this)}_reflectElementRemoved(){u(this,c,g).call(this)}get line(){return Number(this.getAttribute("line"))}set line(t){if(t===null){this.removeAttribute("line"),this.style.removeProperty("--button-line-clamp");return}if(t=Number(t),isNaN(t))throw new TypeError("line must be a number or null");this.style.setProperty("--button-line-clamp",t),this.line!==t&&this.setAttribute("line",t)}get type(){return this.getAttribute("type")}set type(t){if(t===null){this.removeAttribute("type");return}this.type!==t&&this.setAttribute("type",t)}get size(){return this.getAttribute("size")}set size(t){if(t===null){this.removeAttribute("size");return}this.size!==t&&this.setAttribute("size",t)}get block(){return this.hasAttribute("block")}set block(t){t?this.toggleAttribute("block",!0):this.removeAttribute("block")}};a=new WeakMap,v=new WeakSet,C=function(){(this.closest("body")||this.getRootNode()).appendChild(e(this,a)),this.addEventListener("xtt-tooltip-show",t=>{if(this.dataset.xttTooltip)return;const s=document.createElement("span");e(this,i,n).querySelector("slot").assignedNodes().forEach(d=>{s.appendChild(d.cloneNode(!0))}),l(s,{position:"absolute",top:"-9999px",left:"-9999px","font-size":l(e(this,i,n),"font-size"),"max-width":e(this,i,n).getBoundingClientRect().width+.5+"px","padding-inline-start":l(e(this,i,n),"padding-inline-start"),"padding-inline-end":l(e(this,i,n),"padding-inline-end"),"padding-block-start":l(e(this,i,n),"padding-block-start"),"padding-block-end":l(e(this,i,n),"padding-block-end"),"border-inline-start-width":l(e(this,i,n),"border-inline-start-width"),"border-inline-end-width":l(e(this,i,n),"border-inline-end-width"),"border-block-start-width":l(e(this,i,n),"border-block-start-width"),"border-block-end-width":l(e(this,i,n),"border-block-end-width"),"box-sizing":"border-box","text-align":"start"}),this.appendChild(s),s.offsetHeight<=e(this,i,n).offsetHeight&&t.preventDefault(),s.remove()}),e(this,a).initTrigger(this)},c=new WeakSet,g=function(){this.dataset.xttTooltip||(e(this,a).textContent=this.textContent)},i=new WeakSet,n=function(){return this.shadowRoot.getElementById("text")},p(b,"templateContent",E),p(b,"stylesContent",[...m(b,b,"stylesContent"),k]);let w=b;export{w as x};