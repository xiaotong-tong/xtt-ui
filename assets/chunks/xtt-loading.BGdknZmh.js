var l=Object.defineProperty;var d=Object.getPrototypeOf;var c=Reflect.get;var g=(i,t,e)=>t in i?l(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var r=(i,t,e)=>(g(i,typeof t!="symbol"?t+"":t,e),e);var o=(i,t,e)=>c(d(i),e,t);import{x as h}from"./base.C5bbslE4.js";const a=new CSSStyleSheet;a.replaceSync(":host {--loading-stroke-width:16;--loading-r:52;}:host {display:inline-flex;align-items:center;justify-content:center;}#loading {width:1em;height:1em;mask:conic-gradient(transparent 45deg,#000);animation:rotate 2s linear infinite;}#circle {fill:none;stroke:currentColor;stroke-width:var(--loading-stroke-width,16);cx:64;cy:64;r:var(--loading-r,52);}@keyframes rotate {from {transform:rotate(0deg);}to {transform:rotate(360deg);}}:host(:not(:empty)) #loading {margin-inline-end:min(0.5em,16px);}");var m=`<svg viewBox="0 0 128 128" id="loading" part="loading">
	<circle id="circle"></circle>
</svg>
<slot></slot>
`;const n=class n extends h{static get observedAttributes(){return[]}attributeChangedCallback(t,e,f){}connectedCallback(){this.hasAttribute("role")||(this.role="img",this.setAttribute("aria-label","loading")),this.style.setProperty("--loading-default-size",window.getComputedStyle(this).fontSize||"16px")}reload(){this.style.setProperty("--loading-default-size",window.getComputedStyle(this).fontSize||"16px")}};r(n,"templateContent",m),r(n,"stylesContent",[...o(n,n,"stylesContent"),a]);let s=n;customElements.define("xtt-loading",s);