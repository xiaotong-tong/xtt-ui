var p=Object.defineProperty;var b=(t,r,o)=>r in t?p(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o;var l=(t,r,o)=>(b(t,typeof r!="symbol"?r+"":r,o),o),k=(t,r,o)=>{if(!r.has(t))throw TypeError("Cannot "+o)};var n=(t,r,o)=>{if(r.has(t))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(t):r.set(t,o)};var h=(t,r,o)=>(k(t,r,"access private method"),o);const g=new CSSStyleSheet;g.replaceSync(":host {--primary-color:hsl(195deg,100%,50%);--primary-light-color:hsl(195deg,100%,65%);--primary-dark-color:hsl(195deg,100%,40%);--danger-color:hsl(0deg,87%,65%);--danger-light-color:hsl(0deg,87%,75%);--danger-dark-color:hsl(0deg,87%,50%);--success-color:hsl(100deg 54% 50%);--success-light-color:hsl(100deg 54% 65%);--success-dark-color:hsl(100deg 54% 40%);--warning-color:hsl(45deg 100% 50%);--warning-light-color:hsl(45deg 100% 65%);--warning-dark-color:hsl(45deg 100% 40%);--grey-color:hsl(0deg,0%,75%);--grey-light-color:hsl(0deg,0%,95%);--grey-dark-color:hsl(0deg,0%,50%);}:host::-webkit-scrollbar,:host ::-webkit-scrollbar {width:5px;height:5px;margin:5px 0;}:host::-webkit-scrollbar-thumb,:host ::-webkit-scrollbar-thumb {margin:5px 0;border-radius:15px;background:var(--grey-color);}:host([dark])::-webkit-scrollbar-thumb,:host([dark]) ::-webkit-scrollbar-thumb {background:var(--grey-dark-color);}:host::-webkit-scrollbar-track,:host ::-webkit-scrollbar-track {margin:5px 0;border-radius:15px;}");var d,u;class y extends HTMLElement{constructor(){super();n(this,d);const o=this.attachShadow({mode:"open"});o.adoptedStyleSheets=this.constructor.stylesContent,this.constructor.templateContent&&o.appendChild(h(this,d,u).call(this))}}d=new WeakSet,u=function(){const o=document.createElement("template");return o.innerHTML=this.constructor.templateContent,o.content.cloneNode(!0)},l(y,"stylesContent",[g]);const a=t=>(t.id||(t.id="xttId"+ ++a.uId),t);a.uId=0;const f=(t,r,o)=>{const e=t.getAttribute(r);let s=e?e.split(" "):[];if(o.length)o.forEach(c=>{const i=a(c).id;s.includes(i)||s.push(i)});else if((o==null?void 0:o.nodeType)===1){const c=a(o).id;s.includes(c)||s.push(c)}return t.setAttribute(r,s.join(" ")),t},x=(t,r,o)=>{if((t==null?void 0:t.nodeType)!==Node.ELEMENT_NODE)throw new TypeError("element is not a ELEMENT_NODE");if(typeof r=="object")for(const e in r)Object.hasOwnProperty.call(r,e)&&t.style.setProperty(e,r[e]);else if(typeof r=="string"){if(o===void 0)return t.style.getPropertyValue(r)||getComputedStyle(t).getPropertyValue(r);t.style.setProperty(r,o)}return t};export{f as a,x as c,a as u,y as x};
