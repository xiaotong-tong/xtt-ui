var q=Object.defineProperty;var X=Object.getPrototypeOf;var $=Reflect.get;var D=(i,e,t)=>e in i?q(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var n=(i,e,t)=>(D(i,typeof e!="symbol"?e+"":e,t),t),w=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)};var l=(i,e,t)=>(w(i,e,"read from private field"),t?t.call(i):e.get(i)),o=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},A=(i,e,t,s)=>(w(i,e,"write to private field"),s?s.call(i,t):e.set(i,t),t);var c=(i,e,t)=>(w(i,e,"access private method"),t),G=(i,e,t)=>$(X(i),t,e);import{x as F}from"./reflect.u-rLhaQE.js";import{c as N}from"./index.esm.qbmuVXDe.js";import"./base.C5bbslE4.js";const H=new CSSStyleSheet;H.replaceSync(":host {--list-padding:8px;--list-border-color:silver;--list-border:thin solid var(--list-border-color);}:host {display:block;overflow:hidden;}#list {width:100%;box-sizing:border-box;position:relative;display:block;border:var(--list-border);padding:var(--list-padding,8px);}ul {margin:0;padding:0;}::slotted(xtt-list-item) {display:block;position:absolute;top:0;left:0;}");var V=`<ul id="list" part="list">
	<slot></slot>
</ul>
`,u,m,a,f,d,x,R,S,B,C,z,g,y;const h=class h extends F{constructor(){super();o(this,a);o(this,x);o(this,S);o(this,C);o(this,g);n(this,"columnGap",8);n(this,"rowGap",8);n(this,"colHeights",[]);o(this,u,void 0);o(this,m,t=>{t.role="listitem",c(this,C,z).call(this,t)});o(this,d,0);n(this,"onChildrenAddedCallback",Function.prototype);A(this,u,new ResizeObserver(t=>{for(let s of t)c(this,g,y).call(this,s.borderBoxSize[0])}))}static get observedAttributes(){return["cols"]}connectedCallback(){super.connectedCallback(),l(this,u).observe(l(this,a,f)),c(this,g,y).call(this,l(this,a,f).getBoundingClientRect()),this.querySelectorAll("xtt-list-item").forEach(l(this,m))}disconnectedCallback(){super.disconnectedCallback(),l(this,u).disconnect()}attributeChangedCallback(t,s,r){t==="cols"&&(this.cols=r)}_reflectElementAdded(t){(t==null?void 0:t.tagName)==="XTT-LIST-ITEM"&&l(this,m).call(this,t),this.onChildrenAddedCallback(t)}get cols(){return this.getAttribute("cols")}set cols(t){if(t===null||t===0||t===""){this.removeAttribute("cols");return}this.cols!==t&&this.setAttribute("cols",t)}};u=new WeakMap,m=new WeakMap,a=new WeakSet,f=function(){return this.shadowRoot.getElementById("list")},d=new WeakMap,x=new WeakSet,R=function(t){return t>=1200?6:t>=800||t>=500?4:(t>=200,2)},S=new WeakSet,B=function(){const t=this.querySelectorAll("xtt-list-item"),s=l(this,d)||this.cols;this.colHeights=Array(s).fill(0),t.forEach(r=>{c(this,C,z).call(this,r)})},C=new WeakSet,z=function(t){const s=l(this,a,f).getBoundingClientRect(),r=s.inlineSize||s.width,p=l(this,d)||this.cols,b=this.colHeights,v=b.indexOf(Math.min(...b)),O=b[v],I=(r-this.columnGap*(p-1))/p;N(t,{width:I+"px",transform:`translateY(${O}px) translateX(${v*(I+this.columnGap)}px`}),b[v]+=t.offsetHeight+this.rowGap,l(this,a,f).style.height=b.reduce((T,E)=>Math.max(T,E))+"px"},g=new WeakSet,y=function(t){const s=t.inlineSize||t.width;let r=c(this,x,R).call(this,s),p={width:s,now:l(this,d),next:r};this.dispatchEvent(new CustomEvent("xtt-resize",{detail:p,bubbles:!1,cancelable:!0})),A(this,d,parseInt(p.next)),c(this,S,B).call(this)},n(h,"templateContent",V),n(h,"stylesContent",[...G(h,h,"stylesContent"),H]),n(h,"observeOptions",{childList:!0,subtree:!0});let k=h;customElements.define("xtt-list-masonry",k);
