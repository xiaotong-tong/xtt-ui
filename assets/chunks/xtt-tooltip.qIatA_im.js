var P=Object.defineProperty;var q=Object.getPrototypeOf;var O=Reflect.get;var R=(o,e,t)=>e in o?P(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var g=(o,e,t)=>(R(o,typeof e!="symbol"?e+"":e,t),t),C=(o,e,t)=>{if(!e.has(o))throw TypeError("Cannot "+t)};var n=(o,e,t)=>(C(o,e,"read from private field"),t?t.call(o):e.get(o)),l=(o,e,t)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,t)},c=(o,e,t,i)=>(C(o,e,"write to private field"),i?i.call(o,t):e.set(o,t),t);var w=(o,e,t)=>(C(o,e,"access private method"),t),B=(o,e,t)=>O(q(o),t,e);import{x as V}from"./base.Wz2wNpMD.js";import{u as F,a as M}from"./xtt-ui-utils.Ke2hgjsQ.js";import{c as W}from"./index.esm.RuPJ9LKr.js";const S=new CSSStyleSheet;S.replaceSync(':host {--tooltip-max-width:300px;--tooltip-font-size:14px;--tooltip-z-index:99999;--tooltip-bg-color:#fff;--tooltip-border-color:grey;}:host {display:contents;position:absolute;top:-9999px;left:-9999px;}#popover {visibility:hidden;position:fixed;padding:4px 8px;max-width:var(--tooltip-max-width);font-size:var(--tooltip-font-size);z-index:var(--tooltip-z-index);border:thin solid var(--tooltip-border-color);background-color:var(--tooltip-bg-color);transform-origin:bottom center;}#popover[open] {visibility:visible;animation:show 0.2s ease-out;}@keyframes show {0% {opacity:0;transform:scale(0.4);}100% {opacity:1;transform:scale(1);}}#popover::before {content:"";position:absolute;inset:0;opacity:0;z-index:-1;}#popover.top::before {inset-block-end:-10px;}#popover.bottom::before {inset-block-start:-10px;}#arrow {position:absolute;width:8px;height:8px;background-color:var(--tooltip-bg-color);border:thin solid var(--tooltip-border-color);transform-origin:center center;transform:translateX(-4px) rotate(45deg);}.top #arrow {clip-path:polygon(0 100%,100% 100%,100% 0);bottom:-5px;}.bottom #arrow {clip-path:polygon(0 0,0 100%,100% 0);top:-5px;}');var j=`<div id="popover" part="popover">
	<div id="content" part="popover-content"></div>
	<div id="arrow" part="popover-arrow"></div>
</div>
`;const N=(o,e,t,i,s)=>{let r=t==="block-start"?o.top-e.height-i:o.bottom+i,a=o.left+o.width/2-e.width/2;return a<s?a=s:a+e.width+s>visualViewport.width&&(a=0-s),{top:r,[a>=0?"left":"right"]:Math.abs(a),overFlow:t==="block-start"?r<s:r+e.height+s>visualViewport.height,dir:t}},X=(o,e,t,i)=>{const{viewPadding:s=8,margin:r=8}=i||{};t=t||["block-start","block-end"];const a=o.getBoundingClientRect();let I=e.getBoundingClientRect(),d;for(const A of t)if(A.startsWith("block")&&(d=N(a,I,A,r,s)),!d.overFlow)break;e.classList.remove("top","bottom"),d.dir==="block-start"?e.classList.add("top"):d.dir==="block-end"&&e.classList.add("bottom"),W(e,Object.assign({top:d.top?d.top+"px":"",bottom:d.bottom?d.bottom+"px":"",left:d.left?d.left+"px":"",right:d.right?d.right+"px":""})),e.querySelector("#arrow")&&(e.querySelector("#arrow").style.left=`max(${a.left+a.width/2-e.getBoundingClientRect().left}px, 0px)`)};var h,u,m,E,T,$,v,p,y,z,x,L,f;const b=class b extends V{constructor(){super(...arguments);l(this,h);l(this,m);l(this,T);l(this,y);l(this,x);g(this,"viewPadding",8);g(this,"delay",600);l(this,v,!1);l(this,p,!1);l(this,f,void 0)}static get observedAttributes(){return["for"]}connectedCallback(){this.role="tooltip",this.textContent=this.textContent.trim(),F(this)}attributeChangedCallback(t,i,s){t==="for"&&this.initTrigger(document.querySelectorAll(s))}initTrigger(t){t instanceof NodeList||Array.isArray(t)?t.forEach(w(this,x,L),this):(t==null?void 0:t.nodeType)===1&&w(this,x,L).call(this,t)}refreshTooltipContent(t){t.dataset.xttTooltip&&(this.textContent=t.dataset.xttTooltip)}show(t){if(n(this,h,u).hasAttribute("open")||!t.dispatchEvent(new CustomEvent("xtt-tooltip-show",{detail:{tooltip:this},bubbles:!1,cancelable:!0})))return!1;this.refreshTooltipContent(t),X(t,n(this,h,u),["block-start","block-end"]),c(this,f,setTimeout(()=>{n(this,h,u).setAttribute("open",!0)},this.delay??16))}hide(){n(this,f)&&(clearTimeout(n(this,f)),c(this,f,null)),n(this,h,u).removeAttribute("open")}get textContent(){return n(this,m,E).textContent||super.textContent}set textContent(t){n(this,m,E).textContent=t,this.ariaLabel=t.trim()}};h=new WeakSet,u=function(){return this.shadowRoot.getElementById("popover")},m=new WeakSet,E=function(){return this.shadowRoot.getElementById("content")},T=new WeakSet,$=function(){return this.shadowRoot.getElementById("arrow")},v=new WeakMap,p=new WeakMap,y=new WeakSet,z=function(t){const i=(r,a)=>{if((r==null?void 0:r.type)==="mouseleave"&&!a){setTimeout(()=>{i(r,!0)},0);return}((r==null?void 0:r.type)!=="mouseleave"||!n(this,p))&&(this.hide(),t.removeEventListener("pointerdown",i,{once:!0}),t.removeEventListener("keydown",i,{once:!0}),t.removeEventListener("blur",i,{once:!0}),document.removeEventListener("scroll",i,{once:!0}))},s=r=>{this.textContent.trim()!==""&&(this.show(r.currentTarget??r.target),t.addEventListener("pointerdown",i,{once:!0}),t.addEventListener("keydown",i,{once:!0}),t.addEventListener("blur",i,{once:!0}),document.addEventListener("scroll",i,{once:!0}))};t.addEventListener("mouseenter",r=>{c(this,p,!0),s(r)}),t.addEventListener("mouseleave",r=>{c(this,p,!1),i(r)}),t.addEventListener("focus",s),n(this,v)||(n(this,h,u).addEventListener("mouseenter",()=>{c(this,p,!0)}),n(this,h,u).addEventListener("mouseleave",r=>{c(this,p,!1),i(r)}),c(this,v,!0))},x=new WeakSet,L=function(t){const i=t.dataset.ariaType==="labelledby"?"aria-labelledby":"aria-describedby";M(t,i,this),w(this,y,z).call(this,t),t.xttTooltipElement=this},f=new WeakMap,g(b,"templateContent",j),g(b,"stylesContent",[...B(b,b,"stylesContent"),S]);let k=b;customElements.define("xtt-tooltip",k);