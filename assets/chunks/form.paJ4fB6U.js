var v=Object.defineProperty;var y=Object.getPrototypeOf;var A=Reflect.get;var _=(s,e,t)=>e in s?v(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var r=(s,e,t)=>(_(s,typeof e!="symbol"?e+"":e,t),t),n=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var u=(s,e,t)=>(n(s,e,"read from private field"),t?t.call(s):e.get(s)),f=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},h=(s,e,t,i)=>(n(s,e,"write to private field"),i?i.call(s,t):e.set(s,t),t);var b=(s,e,t)=>(n(s,e,"access private method"),t),E=(s,e,t)=>A(y(s),t,e);import{x as m}from"./base.Wz2wNpMD.js";import{a as T}from"./xtt-ui-utils.Ke2hgjsQ.js";var c;class g extends m{constructor(){super();r(this,"observeOptions",{childList:!0});f(this,c,void 0);h(this,c,new MutationObserver(t=>{t.forEach(i=>{i.type==="childList"&&(i.addedNodes.forEach(o=>{this._reflectElementAdded(o),o.nodeType===Node.ELEMENT_NODE?this._reflectElementNodeAdded(o):o.nodeType===Node.TEXT_NODE&&this._reflectElementTextAdded(o)}),i.removedNodes.forEach(o=>{this._reflectElementRemoved(o),o.nodeType===Node.ELEMENT_NODE?this._reflectElementNodeRemoved(o):o.nodeType===Node.TEXT_NODE&&this._reflectElementTextRemoved(o)}))})}))}connectedCallback(){u(this,c).observe(this,this.observeOptions)}disconnectedCallback(){u(this,c).disconnect()}_reflectElementAdded(){}_reflectElementRemoved(){}_reflectElementNodeAdded(){}_reflectElementTextAdded(){}_reflectElementNodeRemoved(){}_reflectElementTextRemoved(){}}c=new WeakMap;const p=new CSSStyleSheet;p.replaceSync(":host([disabled]) {pointer-events:none;opacity:0.5;}");function L(s){var e,t,N;return e=class extends(s==="reflect"?g:m){constructor(){super();f(this,t);r(this,"focusableElement",this)}static get observedAttributes(){return["disabled","autofocus"]}connectedCallback(){var l;(l=super.connectedCallback)==null||l.call(this),b(this,t,N).call(this),this._addA11yWithLabel(),this.focusableElement.hasAttribute("autofocus")&&this.focusableElement.focus()}disconnectedCallback(){}attributeChangedCallback(l,a,d){l==="disabled"?this.disabled=d!==null:l==="autofocus"&&(this.autofocus=d!==null)}_addA11yWithLabel(){let l=Array.from(this.labels);l.length&&(this.focusableElement!==this&&(l=l.map(a=>{const d=a.cloneNode(!0);return d.hidden=!0,this.shadowRoot.appendChild(d),d})),T(this.focusableElement,"aria-labelledby",l))}get labels(){return this.id?this.getRootNode().querySelectorAll(`label[for="${this.id}"]`):document.createElement(null).childNodes}get disabled(){return this.focusableElement.hasAttribute("disabled")}set disabled(l){this.focusableElement.toggleAttribute("disabled",l)}get autofocus(){return this.focusableElement.hasAttribute("autofocus")}set autofocus(l){this.focusableElement.toggleAttribute("autofocus",l)}},t=new WeakSet,N=function(){var l;(l=this.labels)==null||l.forEach(a=>{a.addEventListener("click",d=>{this.focusableElement.focus()})})},r(e,"stylesContent",[...E(e,e,"stylesContent"),p]),e}export{L as x};
