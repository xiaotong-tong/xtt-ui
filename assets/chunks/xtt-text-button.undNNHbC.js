var i=Object.defineProperty;var l=Object.getPrototypeOf;var b=Reflect.get;var h=(o,t,r)=>t in o?i(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r;var c=(o,t,r)=>(h(o,typeof t!="symbol"?t+"":t,r),r);var s=(o,t,r)=>b(l(o),r,t);import{x as u}from"./button.C4BS4FJ9.js";import"./form.WS_BBDnf.js";import"./base.C5bbslE4.js";import"./reflect.u-rLhaQE.js";import"./xtt-ui-utils.BGf_aNN0.js";import"./index.esm.qbmuVXDe.js";const a=new CSSStyleSheet;a.replaceSync(':host {--text-button-font-color:inherit;--text-button-bg-color-hover:hsl(0 0% 95%);--text-button-bg-color-active:hsl(0 0% 90%);}:host([type="primary"]) {--text-button-font-color:var(--primary-color);}:host([type="danger"]) {--text-button-font-color:var(--danger-color);}:host([type="success"]) {--text-button-font-color:var(--success-color);}:host([type="warning"]) {--text-button-font-color:var(--warning-color);}:host([type="base"]) {--text-button-bg-color-hover:inherit;--text-button-bg-color-active:inherit;}:host {border:none;background-color:transparent;color:var(--text-button-font-color,inherit);}@media (hover:hover) {:host(:hover) {background-color:var(--text-button-bg-color-hover);color:var(--text-button-font-color,inherit);}}:host(:active) {background-color:var(--text-button-bg-color-active,transparent);}');const e=class e extends u{};c(e,"stylesContent",[...s(e,e,"stylesContent"),a]);let n=e;customElements.define("xtt-text-button",n);