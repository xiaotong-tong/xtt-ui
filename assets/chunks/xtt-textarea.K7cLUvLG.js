var v=Object.defineProperty;var k=Object.getPrototypeOf;var C=Reflect.get;var y=(i,e,t)=>e in i?v(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var p=(i,e,t)=>(y(i,typeof e!="symbol"?e+"":e,t),t),w=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)};var s=(i,e,t)=>(w(i,e,"read from private field"),t?t.call(i):e.get(i)),b=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},f=(i,e,t,r)=>(w(i,e,"write to private field"),r?r.call(i,t):e.set(i,t),t);var m=(i,e,t)=>C(k(i),t,e);import{x as A}from"./input.8_7_4FYl.js";import{c as o}from"./index.esm.AN5-tQ0m.js";import"./form.WS_BBDnf.js";import"./base.C5bbslE4.js";import"./reflect.u-rLhaQE.js";import"./xtt-ui-utils.BGf_aNN0.js";const z=new CSSStyleSheet;z.replaceSync(":host {--textarea-padding:5px 8px;--textarea-border-color:silver;--textarea-focus-outline:thin solid hsl(195deg 100% 50%);}:host {display:inline-block;}:host([block]) {display:block;width:100%;}#textarea {box-sizing:border-box;width:100%;height:auto;resize:none;border:thin solid;line-height:1.5;border-color:var(--textarea-border-color,silver);padding:var(--textarea-padding);}#textarea:focus {outline:var(--textarea-focus-outline);}");var S=`<textarea id="textarea" part="textarea" rows="3"></textarea>
`,c,n,a,d,g;const u=class u extends A{constructor(){super();b(this,n);p(this,"focusableElement",s(this,n,a));b(this,c,!1);b(this,d,t=>{const r=()=>{o(s(this,n,a),"height",s(this,g).call(this)+"px")};t?(s(this,n,a).removeEventListener("input",r),s(this,n,a).addEventListener("input",r),r()):(s(this,n,a).removeEventListener("input",r),o(s(this,n,a),"height",""))});b(this,g,()=>{const t=s(this,n,a),r=document.createElement("textarea");o(r,{"letter-spacing":o(t,"letter-spacing"),"line-height":o(t,"line-height"),"font-family":o(t,"font-family"),"font-size":o(t,"font-size"),"font-weight":o(t,"font-weight"),"padding-block-start":o(t,"padding-block-start"),"padding-block-end":o(t,"padding-block-end"),"padding-inline-start":o(t,"padding-inline-start"),"padding-inline-end":o(t,"padding-inline-end"),"border-block-start-width":o(t,"border-block-start-width"),"border-block-end-width":o(t,"border-block-end-width"),width:t.clientWidth+"px","box-sizing":o(t,"box-sizing"),position:"absolute",top:"-9999px",left:"-9999px",visibility:"hidden",height:0,overflow:"hidden"}),this.shadowRoot.appendChild(r),r.value=t.value;let h=parseInt(o(t,"border-block-start-width"))+parseInt(o(t,"border-block-end-width"));isNaN(h)&&(h=0);let l=r.scrollHeight+h;return l===0&&(r.value="1",l=r.scrollHeight+h),r.remove(),l})}static get observedAttributes(){return[...super.observedAttributes,"rows","autosize"]}connectedCallback(){super.connectedCallback(),this.value=this.textContent,s(this,c)&&s(this,d).call(this,!0)}attributeChangedCallback(t,r,h){var l;if(t==="rows")this.rows=h;else if(t==="autosize"){if(this.isConnected===!1){f(this,c,h!==null);return}s(this,d).call(this,h!==null)}(l=super.attributeChangedCallback)==null||l.call(this,t,r,h)}get value(){return super.value}set value(t){super.value=t,s(this,n,a).textContent=t,this.textContent=t,this.getAttribute("autosize")!==null&&s(this,d).call(this,!0)}get rows(){return Number(s(this,n,a).rows)}set rows(t){if(t===null){s(this,n,a).removeAttribute("rows"),this.removeAttribute("rows");return}t=Number(t),this.rows!==t&&(s(this,n,a).rows=t,this.setAttribute("rows",t))}get autosize(){return this.hasAttribute("autosize")}set autosize(t){if(t===null||t===!1){this.removeAttribute("autosize"),s(this,d).call(this,!1);return}if(this.autosize!==t&&this.setAttribute("autosize",""),this.isConnected===!1){f(this,c,newValue!==null);return}s(this,d).call(this,!0)}};c=new WeakMap,n=new WeakSet,a=function(){return this.shadowRoot.getElementById("textarea")},d=new WeakMap,g=new WeakMap,p(u,"templateContent",S),p(u,"stylesContent",[...m(u,u,"stylesContent"),z]);let x=u;customElements.define("xtt-textarea",x);