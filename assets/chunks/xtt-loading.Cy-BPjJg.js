var l=Object.defineProperty;var d=Object.getPrototypeOf;var h=Reflect.get;var p=(a,t,e)=>t in a?l(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var n=(a,t,e)=>(p(a,typeof t!="symbol"?t+"":t,e),e);var o=(a,t,e)=>h(d(a),e,t);import{x as g}from"./base.C5bbslE4.js";const r=new CSSStyleSheet;r.replaceSync(':host {--loading-stroke-width:16;}:host {display:inline-flex;align-items:center;justify-content:center;}#loading {width:var(--loading-size,var(--loading-default-size,16px));height:var(--loading-size,var(--loading-default-size,16px));mask:conic-gradient(transparent 45deg,#000);animation:rotate 2s linear infinite;}#path {fill:none;stroke:currentColor;stroke-width:var(--loading-stroke-width,16);d:path("M64 12 A52 52 0 0 1 64 116 A52 52 0 0 1 64 12Z");}@keyframes rotate {from {transform:rotate(0deg);}to {transform:rotate(360deg);}}:host(:not(:empty)) #loading {margin-inline-end:min(0.5em,16px);}');var c=`<svg viewBox="0 0 128 128" id="loading" part="loading">
	<path id="path" part="path" d="M64 12 A52 52 0 0 1 64 116 A52 52 0 0 1 64 12Z"></path>
</svg>
<slot></slot>
`;const i=class i extends g{static get observedAttributes(){return[]}attributeChangedCallback(t,e,f){}connectedCallback(){this.hasAttribute("role")||(this.role="img",this.setAttribute("aria-label","loading")),this.style.setProperty("--loading-default-size",window.getComputedStyle(this).fontSize||"16px")}reload(){this.style.setProperty("--loading-default-size",window.getComputedStyle(this).fontSize||"16px")}};n(i,"templateContent",c),n(i,"stylesContent",[...o(i,i,"stylesContent"),r]);let s=i;customElements.define("xtt-loading",s);