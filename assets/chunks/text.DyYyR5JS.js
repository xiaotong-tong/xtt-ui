var c=Object.defineProperty;var a=Object.getPrototypeOf;var h=Reflect.get;var p=(r,t,o)=>t in r?c(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o;var s=(r,t,o)=>(p(r,typeof t!="symbol"?t+"":t,o),o);var n=(r,t,o)=>h(a(r),o,t);import{x as v}from"./base.C5bbslE4.js";const l=new CSSStyleSheet;l.replaceSync(':host {--text-font-color:inherit;--text-font-color-hover:inherit;}:host([type="primary"]) {--text-font-color:var(--primary-color);--text-font-color-hover:var(--primary-light-color);}:host([type="success"]) {--text-font-color:var(--success-color);--text-font-color-hover:var(--success-light-color);}:host([type="danger"]) {--text-font-color:var(--danger-color);--text-font-color-hover:var(--danger-light-color);}:host([type="warning"]) {--text-font-color:var(--warning-color);--text-font-color-hover:var(--warning-light-color);}:host {display:inline;color:var(--text-font-color,inherit);}@media (hover:hover) {:host(:hover) {color:var(--text-font-color-hover,inherit);}}');const e=class e extends v{static get observedAttributes(){return[]}attributeChangedCallback(t,o,y){}get type(){return this.getAttribute("type")}set type(t){if(t===null){this.removeAttribute("type");return}this.type!==t&&this.setAttribute("type",t)}};s(e,"templateContent","<slot></slot>"),s(e,"stylesContent",[...n(e,e,"stylesContent"),l]);let i=e;export{i as x};