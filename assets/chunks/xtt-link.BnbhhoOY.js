var u=Object.defineProperty;var b=Object.getPrototypeOf;var f=Reflect.get;var v=(r,e,t)=>e in r?u(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var s=(r,e,t)=>(v(r,typeof e!="symbol"?e+"":e,t),t),d=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var i=(r,e,t)=>(d(r,e,"read from private field"),t?t.call(r):e.get(r)),a=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)};var h=(r,e,t)=>f(b(r),t,e);import{x as p}from"./base.C5bbslE4.js";const k=new CSSStyleSheet;k.replaceSync(':host {--link-font-color:inherit;--link-font-color-hover:inherit;--link-font-color-active:inherit;--link-focus-outline:thin dotted black;}:host([type="primary"]) {--link-font-color:var(--primary-color);--link-font-color-hover:var(--primary-light-color);--link-font-color-active:var(--primary-dark-color);}:host([type="success"]) {--link-font-color:var(--success-color);--link-font-color-hover:var(--success-light-color);--link-font-color-active:var(--success-dark-color);}:host([type="danger"]) {--link-font-color:var(--danger-color);--link-font-color-hover:var(--danger-light-color);--link-font-color-active:var(--danger-dark-color);}:host([type="warning"]) {--link-font-color:var(--warning-color);--link-font-color-hover:var(--warning-light-color);--link-font-color-active:var(--warning-dark-color);}:host(:is([block],[inline-block])) {--link-padding:4px 10px;--link-inline-align:center;}:host {display:inline;}:host([inline-block]) {display:inline-block;max-width:100%;}:host([block]) {--link-hover-bg-color:var(--grey-light-color);display:block;width:100%;}#link {cursor:pointer;color:var(--link-font-color,inherit);text-decoration:none;}:host(:is([inline-block],[block])) #link {display:inline-flex;max-width:100%;justify-content:var(--link-inline-align);box-sizing:border-box;padding:var(--link-padding,4px 10px);}:host([block]) #link {display:flex;width:100%;}@media (hover:hover) {#link:hover {color:var(--link-font-color-hover,inherit);}:host([block]) #link:hover {background-color:var(--link-hover-bg-color);}}#link:active {color:var(--link-font-color-active,inherit);}#link:focus {outline:var(--link-focus-outline);outline-offset:1px;}');var o,n;const l=class l extends p{constructor(){super(...arguments);a(this,o)}static get observedAttributes(){return["href","target","download"]}attributeChangedCallback(t,y,g){i(this,o,n)[t]=g}get href(){return i(this,o,n).href}set href(t){if(t===null){this.removeAttribute("href"),i(this,o,n).removeAttribute("href");return}i(this,o,n).href=t,this.setAttribute("href",t)}get target(){return i(this,o,n).target}set target(t){if(t===null){this.removeAttribute("target"),i(this,o,n).removeAttribute("target");return}i(this,o,n).target=t,this.setAttribute("target",t)}get origin(){return i(this,o,n).origin}get pathname(){return i(this,o,n).pathname}set pathname(t){i(this,o,n).pathname=t}get search(){return i(this,o,n).search}set search(t){i(this,o,n).search=t}toString(){return i(this,o,n).toString()}get type(){return this.getAttribute("type")}set type(t){if(t===null){this.removeAttribute("type");return}this.type!==t&&this.setAttribute("type",t)}get inlineBlock(){return this.hasAttribute("inline-block")}set inlineBlock(t){t?this.toggleAttribute("inline-block",!0):this.removeAttribute("inline-block")}get block(){return this.hasAttribute("block")}set block(t){t?this.toggleAttribute("block",!0):this.removeAttribute("block")}};o=new WeakSet,n=function(){return this.shadowRoot.getElementById("link")},s(l,"templateContent",'<a id="link" part="link"><slot></slot></a>'),s(l,"stylesContent",[...h(l,l,"stylesContent"),k]);let c=l;customElements.define("xtt-link",c);