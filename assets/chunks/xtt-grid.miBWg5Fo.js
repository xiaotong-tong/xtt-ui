var T=Object.defineProperty;var j=Object.getPrototypeOf;var B=Reflect.get;var I=(s,t,e)=>t in s?T(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var h=(s,t,e)=>(I(s,typeof t!="symbol"?t+"":t,e),e),v=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var r=(s,t,e)=>(v(s,t,"read from private field"),e?e.call(s):t.get(s)),d=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},f=(s,t,e,i)=>(v(s,t,"write to private field"),i?i.call(s,e):t.set(s,e),e);var k=(s,t,e)=>(v(s,t,"access private method"),e),A=(s,t,e)=>B(j(s),e,t);import{s as L}from"./xtt-grid-column.BKWg91xU.js";import{x as $}from"./reflect.u-rLhaQE.js";import{c as p}from"./index.esm.qbmuVXDe.js";import"./base.C5bbslE4.js";var H=`<div id="grid" part="grid">
	<div id="header"></div>
	<div id="body"></div>
</div>
`,m,l,C,M,o,u,c,g,b,R;const n=class n extends ${constructor(){super();d(this,C);d(this,o);d(this,c);d(this,b);d(this,m,[]);d(this,l,[]);h(this,"templates",{})}static get observedAttributes(){return[]}connectedCallback(){super.connectedCallback();let e="",i="";f(this,l,[...this.querySelectorAll("xtt-grid-column")]),r(this,l).map(a=>{e+=a.name+" ",i+=(a.width==="auto"?"1fr":a.width)+" "}),e='"'+e.trim()+'"',i=i.trim(),p(r(this,c,g),"grid-template-areas",e),p(r(this,c,g),"grid-template-columns",i),p(r(this,o,u),"grid-template-areas",e),p(r(this,o,u),"grid-template-columns",i),r(this,o,u).innerHTML=r(this,l).map(a=>`<div class="header-cell">${a.label||a.name}</div>`).join("")}disconnectedCallback(){super.disconnectedCallback()}attributeChangedCallback(e,i,a){}_reflectElementAdded(e){}set data(e){f(this,m,e),k(this,b,R).call(this)}};m=new WeakMap,l=new WeakMap,C=new WeakSet,M=function(){return this.shadowRoot.getElementById("grid")},o=new WeakSet,u=function(){return this.shadowRoot.getElementById("header")},c=new WeakSet,g=function(){return this.shadowRoot.getElementById("body")},b=new WeakSet,R=function(){r(this,c,g).innerHTML=r(this,m).map(e=>`${r(this,l).map(i=>{var w;const a=(w=this.templates)==null?void 0:w[i.name];return a?typeof a=="function"?a(e):a:`<div class="cell">${e[i.name]}</div>`}).join("")}`).join("")},h(n,"templateContent",H),h(n,"stylesContent",[...A(n,n,"stylesContent"),L]),h(n,"observeOptions",{childList:!0,subtree:!0});let y=n;customElements.define("xtt-grid",y);