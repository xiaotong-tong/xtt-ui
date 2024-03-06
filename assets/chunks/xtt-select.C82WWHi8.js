var Q=Object.defineProperty;var Y=Object.getPrototypeOf;var Z=Reflect.get;var tt=(r,s,t)=>s in r?Q(r,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[s]=t;var E=(r,s,t)=>(tt(r,typeof s!="symbol"?s+"":s,t),t),z=(r,s,t)=>{if(!s.has(r))throw TypeError("Cannot "+t)};var i=(r,s,t)=>(z(r,s,"read from private field"),t?t.call(r):s.get(r)),l=(r,s,t)=>{if(s.has(r))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(r):s.set(r,t)};var n=(r,s,t)=>(z(r,s,"access private method"),t),M=(r,s,t)=>Z(Y(r),t,s);import{x as et}from"./form.WS_BBDnf.js";import{d as ot}from"./displayPopover.CRcsbgwd.js";import"./base.C5bbslE4.js";import"./reflect.u-rLhaQE.js";import"./xtt-ui-utils.BGf_aNN0.js";import"./index.esm.AN5-tQ0m.js";const U=new CSSStyleSheet;U.replaceSync(":host {--select-option-line-clamp:1;--select-option-selected-bg-color:hsl(195deg 100% 50%);--select-option-selected-font-color:white;--select-option-active-bg-color:hsl(216 33% 90%);}:host {max-width:100%;}#select {position:relative;line-height:1.5em;min-height:calc(1.5em + 10px);vertical-align:middle;}#select::part(text) {padding-inline-end:1em;}#icon {font-size:24px;position:absolute;right:2px;top:4px;}#popover {display:none;pointer-events:none;position:fixed;inset:0;}#popover[open] {display:block;z-index:99999;}#popover #popoverContent {pointer-events:auto;position:fixed;border:thin solid silver;background-color:#fff;}xtt-option {padding:4px 8px;cursor:pointer;max-width:100%;min-height:1em;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:var(--select-option-line-clamp,1);overflow:hidden;}xtt-option[selected] {background-color:var(--select-option-selected-bg-color);color:var(--select-option-selected-font-color);}xtt-option:focus {outline:1px dotted silver;}xtt-option:not(:is([selected],[disabled])):focus {background-color:var(--select-option-active-bg-color);}xtt-option[disabled] {opacity:0.5;cursor:default;}@media (hover:hover) {xtt-option:not(:is([selected],[disabled])):hover {background-color:var(--select-option-active-bg-color);}}::slotted(option) {display:none;}");var it=`<xtt-button id="select" type="base" part="select" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="popoverContent">
	<span id="text" part="text" aria-hidden="true"></span>
	<xtt-icon id="icon" icon="chevronDown" part="icon" aria-hidden="true"></xtt-icon>
</xtt-button>
<div id="popover">
	<div id="popoverContent" role="listbox" part="popover"></div>
</div>
`,p,m,y,P,k,B,d,h,L,X,A,F,u,g,O,_,C,V,b,f,T,$,a,N,H,R,j,w,q,S,W,I,G;const x=class x extends et("reflect"){constructor(){super(...arguments);l(this,p);l(this,y);l(this,k);l(this,d);l(this,L);l(this,A);l(this,u);l(this,O);l(this,C);l(this,b);l(this,T);l(this,N);l(this,R);l(this,w);l(this,S);l(this,I);E(this,"observeOptions",{subtree:!0,childList:!0,attributes:!0,attributeFilter:["label"],attributeOldValue:!0});E(this,"focusableElement",i(this,d,h));l(this,a,{})}connectedCallback(){super.connectedCallback(),n(this,y,P).call(this),n(this,p,m).call(this),n(this,O,_).call(this)}_reflectElementNodeAdded(t){n(this,k,B).call(this,t)}_reflectElementNodeRemoved(t){n(this,k,B).call(this,t)}_reflectElementAttributeChanged(t,e,o,c){t==="label"&&(n(this,y,P).call(this),c.hasAttribute("selected")&&n(this,p,m).call(this))}get value(){return this.querySelector("option[selected]").value}set value(t){Array.from(this.querySelectorAll("option")).some(o=>{if(o.value===t)return this.querySelector("option[selected]").removeAttribute("selected"),o.setAttribute("selected",""),n(this,p,m).call(this),!0})}};p=new WeakSet,m=function(){let t=this.querySelector("option[selected]");t||(t=this.querySelector("option"),t==null||t.setAttribute("selected","")),i(this,L,X).textContent=(t==null?void 0:t.getAttribute("label"))||(t==null?void 0:t.textContent)},y=new WeakSet,P=function(){const t=this.querySelectorAll("option");if(t.length===0)return;let e=t[0];t.forEach(v=>{const J=v.getAttribute("label")||v.textContent,K=e.getAttribute("label")||e.textContent;J.length>K.length&&(e=v)});const o=i(this,d,h).cloneNode(!0);o.querySelector("#text").textContent=e.getAttribute("label")||e.textContent,document.body.appendChild(o);const c=o.getBoundingClientRect().width;i(this,d,h).style.minWidth=`min(${c}px, 100%)`,this.style.minWidth=`min(${c}px, 100%)`,o.remove()},k=new WeakSet,B=function(t){t.tagName==="OPTION"&&(n(this,y,P).call(this),t.selected&&n(this,p,m).call(this))},d=new WeakSet,h=function(){return this.shadowRoot.getElementById("select")},L=new WeakSet,X=function(){return this.shadowRoot.getElementById("text")},A=new WeakSet,F=function(){return this.shadowRoot.getElementById("popover")},u=new WeakSet,g=function(){return this.shadowRoot.getElementById("popoverContent")},O=new WeakSet,_=function(){i(this,d,h).addEventListener("click",()=>{n(this,C,V).call(this)}),i(this,d,h).addEventListener("keydown",t=>{switch(t.key){case"Enter":case" ":case"ArrowDown":case"ArrowUp":n(this,C,V).call(this),t.preventDefault(),t.stopPropagation();break}})},C=new WeakSet,V=function(){this.querySelector("option")&&(n(this,T,$).call(this),i(this,A,F).setAttribute("open",""),i(this,d,h).ariaExpanded=!0,this.shadowRoot.querySelector("xtt-option[selected]").focus(),n(this,I,G).call(this))},b=new WeakSet,f=function(){i(this,A,F).removeAttribute("open"),i(this,u,g).innerHTML="",n(this,R,j).call(this),i(this,d,h).focus(),i(this,d,h).ariaExpanded=!1},T=new WeakSet,$=function(){this.querySelectorAll("option").forEach(e=>{const o=document.createElement("xtt-option");o._originalOption=e,o.tabIndex=0,o.role="option",e.hasAttribute("selected")?(o.toggleAttribute("selected",!0),o.ariaSelected=!0):e.hasAttribute("disabled")||(o.ariaSelected=!1),o.toggleAttribute("disabled",e.hasAttribute("disabled")),o.setAttribute("value",e.value),o.textContent=e.getAttribute("label")||e.textContent,i(this,u,g).appendChild(o)}),n(this,N,H).call(this)},a=new WeakMap,N=new WeakSet,H=function(){const t=i(this,u,g);i(this,a).click=e=>{e.stopPropagation();const o=e.target;if(o.tagName==="XTT-OPTION"){if(o.hasAttribute("disabled"))return;n(this,S,W).call(this,o._originalOption)}n(this,b,f).call(this)},i(this,a).keydown=e=>{const o=e.target;if(o.tagName==="XTT-OPTION"){const c=this.shadowRoot.querySelectorAll("xtt-option"),v=this.shadowRoot.querySelector("xtt-option:focus")||this.shadowRoot.querySelector("xtt-option[selected]");switch(e.key){case"Enter":case" ":n(this,S,W).call(this,o._originalOption),n(this,b,f).call(this),e.preventDefault();break;case"ArrowDown":n(this,w,q).call(this,"next",c,v).focus(),e.preventDefault(),e.stopPropagation();break;case"ArrowUp":n(this,w,q).call(this,"prev",c,v).focus(),e.preventDefault(),e.stopPropagation();break;case"Escape":case"Tab":n(this,b,f).call(this)}}},i(this,a).docClick=()=>{n(this,b,f).call(this)},i(this,a).docScroll=()=>{n(this,b,f).call(this)},t.addEventListener("click",i(this,a).click),t.addEventListener("keydown",i(this,a).keydown),document.addEventListener("scroll",i(this,a).docScroll),setTimeout(()=>{document.addEventListener("click",i(this,a).docClick)},0)},R=new WeakSet,j=function(){const t=i(this,u,g);t.removeEventListener("click",i(this,a).click),t.removeEventListener("keydown",i(this,a).keydown),document.removeEventListener("click",i(this,a).docClick),document.removeEventListener("scroll",i(this,a).docScroll)},w=new WeakSet,q=function(t,e,o){let c;return t==="next"?(c=o.nextElementSibling,c||(c=e[0])):t==="prev"&&(c=o.previousElementSibling,c||(c=e[e.length-1])),c.hasAttribute("disabled")?n(this,w,q).call(this,t,e,c):c},S=new WeakSet,W=function(t){const e=this.querySelector("option[selected]");if(e===t)return;e.removeAttribute("selected"),t.setAttribute("selected",""),n(this,p,m).call(this);const o=new Event("change");this.dispatchEvent(o)},I=new WeakSet,G=function(){ot(i(this,d,h),i(this,u,g),["block-end","block-start"])},E(x,"templateContent",it),E(x,"stylesContent",[...M(x,x,"stylesContent"),U]);let D=x;customElements.define("xtt-select",D);