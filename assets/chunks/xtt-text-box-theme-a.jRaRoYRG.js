var z=Object.defineProperty;var N=Object.getPrototypeOf;var P=Reflect.get;var j=(o,i,t)=>i in o?z(o,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[i]=t;var y=(o,i,t)=>(j(o,typeof i!="symbol"?i+"":i,t),t),w=(o,i,t)=>{if(!i.has(o))throw TypeError("Cannot "+t)};var n=(o,i,t)=>(w(o,i,"read from private field"),t?t.call(o):i.get(o)),r=(o,i,t)=>{if(i.has(o))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(o):i.set(o,t)};var b=(o,i,t)=>(w(o,i,"access private method"),t),C=(o,i,t)=>P(N(o),t,i);import{x as q}from"./base.C5bbslE4.js";import{c as $}from"./index.esm.AN5-tQ0m.js";const R=new CSSStyleSheet;R.replaceSync(":host {--text-box-color:var(--primary-color);--text-box-blur-color:var(--text-box-color);--text-box-width:2px;--text-box-blur-width:calc(var(--text-box-width) * 1.5);}:host {display:block;position:relative;width:200px;height:100px;padding:0.5em 1.2em 1em;}#text {height:100%;overflow:auto;}#box {position:absolute;inset:0;width:100%;height:100%;z-index:-1;fill:none;stroke:var(--text-box-color);stroke-width:var(--text-box-width);}#oLine,#oLineBack {transform:rotate(-40deg);}#lineBack,#oLineBack {filter:blur(max(var(--text-box-blur-width),4px));}#leftShape {float:left;height:100%;opacity:0;}#rightShape {float:right;height:100%;opacity:0;}");var D=`<!-- <div id="box"></div>
<div id="box-blur"></div> -->
<svg id="box" viewBox="0 0 24 24">
	<polyline id="line"/>
	<polyline id="lineBack"/>
	<polyline id="oLine"/>
	<polyline id="oLineBack"/>
</svg>

<div id="text">
	<div id="leftShape"></div>
	<div id="rightShape"></div>
	<slot></slot>
</div>
`,u,A,c,B,a,h,g,S,l,p,k,I,v,E,f,V,x,L;const d=class d extends q{constructor(){super(...arguments);r(this,u);r(this,c);r(this,a);r(this,g);r(this,l);r(this,k);r(this,v);r(this,f);r(this,x)}static get observedAttributes(){return["skew"]}attributeChangedCallback(t,e,s){t==="skew"&&(this.skew=s)}connectedCallback(){b(this,f,V).call(this)}get skew(){return this.getAttribute("skew")}set skew(t){if(t===null){this.removeAttribute("skew");return}if(this.skew!==t){this.setAttribute("skew",t);const e=this.getBoundingClientRect();b(this,x,L).call(this,e.width,e.height)}}};u=new WeakSet,A=function(){return this.shadowRoot.getElementById("box")},c=new WeakSet,B=function(){return this.shadowRoot.getElementById("line")},a=new WeakSet,h=function(){return this.shadowRoot.getElementById("oLine")},g=new WeakSet,S=function(){return this.shadowRoot.getElementById("lineBack")},l=new WeakSet,p=function(){return this.shadowRoot.getElementById("oLineBack")},k=new WeakSet,I=function(){return this.shadowRoot.getElementById("leftShape")},v=new WeakSet,E=function(){return this.shadowRoot.getElementById("rightShape")},f=new WeakSet,V=function(){const t=this.getBoundingClientRect();n(this,u,A).setAttribute("viewBox",`-2 -2 ${t.width+4} ${t.height+14}`),b(this,x,L).call(this,t.width,t.height)},x=new WeakSet,L=function(t,e){if(!this.skew)n(this,c,B).setAttribute("points",`${t*.1},${e} 0,${e} 0,0 ${t},0 ${t},${e} ${t*.2},${e}`),n(this,g,S).setAttribute("points",`${t*.1},${e} 0,${e} 0,0 ${t},0 ${t},${e} ${t*.2},${e}`),n(this,a,h).setAttribute("points",`${t*.1},${e} ${t*.2},${e}`),$(n(this,a,h),"transform-origin",`${t*.15}px calc(100% - 14px)`),n(this,l,p).setAttribute("points",`${t*.1},${e} ${t*.2},${e}`),$(n(this,l,p),"transform-origin",`${t*.15}px calc(100% - 14px)`);else{const s=Number(this.skew);n(this,c,B).setAttribute("points",`${s+t*.1},${e} ${s},${e} 0,0 ${t-s},0 ${t},${e} ${s+t*.2},${e}`),n(this,g,S).setAttribute("points",`${s+t*.1},${e} ${s},${e} 0,0 ${t-s},0 ${t},${e} ${s+t*.2},${e}`),n(this,a,h).setAttribute("points",`${s+t*.1},${e} ${s+t*.2},${e}`),$(n(this,a,h),"transform-origin",`${s+t*.15}px calc(100% - 14px)`),n(this,l,p).setAttribute("points",`${s+t*.1},${e} ${s+t*.2},${e}`),$(n(this,l,p),"transform-origin",`${s+t*.15}px calc(100% - 14px)`),$(n(this,k,I),{"shape-outside":`polygon(0 0, ${s}px ${e}px, 0 ${e}px)`,width:`${s}px`}),$(n(this,v,E),{"shape-outside":`polygon(0 0, ${s}px 0, ${s}px ${e}px)`,width:`${s}px`})}},y(d,"templateContent",D),y(d,"stylesContent",[...C(d,d,"stylesContent"),R]);let m=d;customElements.define("xtt-text-box-theme-a",m);
