var u=Object.defineProperty;var x=Object.getPrototypeOf;var w=Reflect.get;var k=(i,e,t)=>e in i?u(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var d=(i,e,t)=>(k(i,typeof e!="symbol"?e+"":e,t),t),y=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)};var c=(i,e,t)=>(y(i,e,"read from private field"),t?t.call(i):e.get(i)),h=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)};var p=(i,e,t)=>w(x(i),t,e);import{x as v}from"./form._HBYyMoL.js";import{c as s}from"./index.esm.RuPJ9LKr.js";import"./base.Wz2wNpMD.js";import"./reflect.QJLKHJUk.js";import"./xtt-ui-utils.Ke2hgjsQ.js";const f=new CSSStyleSheet;f.replaceSync(":host {--text-edit-padding:5px 8px;--text-edit-border-color:silver;--text-edit-focus-outline:thin solid hsl(195deg 100% 50%);--text-edit-font-size:14px;}:host {box-sizing:border-box;border:thin solid;line-height:1.5;white-space:pre-wrap;overflow:auto;font-size:var(--text-edit-font-size,14px);border-color:var(--text-edit-border-color,silver);padding:var(--text-edit-padding);}:host {display:inline-block;width:20em;}:host([block]) {display:block;width:100%;}:host(:focus) {outline:var(--text-edit-focus-outline);}");var l;const r=class r extends v(){constructor(){super();d(this,"focusableElement",this);h(this,l,t=>{const o=this,n=document.createElement("div");s(n,{"letter-spacing":s(o,"letter-spacing"),"line-height":s(o,"line-height"),"font-family":s(o,"font-family"),"font-size":s(o,"font-size"),"font-weight":s(o,"font-weight"),"padding-block-start":s(o,"padding-block-start"),"padding-block-end":s(o,"padding-block-end"),"padding-inline-start":s(o,"padding-inline-start"),"padding-inline-end":s(o,"padding-inline-end"),"border-block-start-width":s(o,"border-block-start-width"),"border-block-end-width":s(o,"border-block-end-width"),"white-space":"pre-wrap","box-sizing":s(o,"box-sizing"),position:"absolute",top:"-9999px",left:"-9999px",visibility:"hidden",width:"100px",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":t,overflow:"hidden"}),this.shadowRoot.appendChild(n),n.innerHTML="lorem ipsum".repeat(100);const a=parseInt(s(o,"border-block-start-width"))+parseInt(s(o,"border-block-end-width")),g=n.offsetHeight+a;n.remove(),this.style.height=g+"px"})}static get observedAttributes(){return[...super.observedAttributes,"rows","autosize","readonly"]}connectedCallback(){super.connectedCallback(),this.hasAttribute("readonly")||(this.contenteditable="plaintext-only",this.hasAttribute("tabindex")||(this.tabIndex=1))}attributeChangedCallback(t,o,n){var a;t==="readonly"?n!==null?this.contentEditable=!1:this.contenteditable="plaintext-only":t==="rows"&&c(this,l).call(this,n),(a=super.attributeChangedCallback)==null||a.call(this,t,o,n)}get value(){return this.textContent}set value(t){this.textContent=t}get disabled(){return super.disabled}set disabled(t){super.disabled=t,this.tabIndex=t?-1:1,t?this.contentEditable=!1:this.contenteditable="plaintext-only"}};l=new WeakMap,d(r,"templateContent","<slot></slot>"),d(r,"stylesContent",[...p(r,r,"stylesContent"),f]),d(r,"observeOptions",{childList:!0});let b=r;customElements.define("xtt-text-edit",b);