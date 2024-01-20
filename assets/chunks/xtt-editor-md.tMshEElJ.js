var C=Object.defineProperty;var x=Object.getPrototypeOf;var g=Reflect.get;var w=(n,e,t)=>e in n?C(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var h=(n,e,t)=>(w(n,typeof e!="symbol"?e+"":e,t),t),y=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var a=(n,e,t)=>(y(n,e,"read from private field"),t?t.call(n):e.get(n)),p=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)};var c=(n,e,t)=>g(x(n),t,e);import{x as m}from"./base.Wz2wNpMD.js";const l=new CSSStyleSheet;l.replaceSync(":host {display:block;}#editor {display:flex;column-gap:8px;}#editorContainer,#previewContainer {flex:1;}#previewContainer {padding:4px 8px;}");var i,o,r,d;const s=class s extends m{constructor(){super();p(this,i);p(this,r);a(this,i,o).addEventListener("input",t=>{const v=t.target.value;a(this,r,d).textContent=v}),a(this,i,o).addEventListener("change",t=>{this.dispatchEvent(new Event("change"))})}get value(){return a(this,i,o).value}set value(t){a(this,i,o).value=t,a(this,r,d).innerHTML=t}get textContent(){return this.value}set textContent(t){this.value=t}get parsed(){return a(this,r,d).parsed}get abstract(){return a(this,r,d).abstract}};i=new WeakSet,o=function(){return this.shadowRoot.getElementById("editorContainer")},r=new WeakSet,d=function(){return this.shadowRoot.getElementById("previewContainer")},h(s,"templateContent",`
		<div id="editor">
			<xtt-textarea id="editorContainer" block autosize></xtt-textarea>
			<xtt-markdown id="previewContainer"></xtt-markdown>
		</div>`),h(s,"stylesContent",[...c(s,s,"stylesContent"),l]);let u=s;customElements.define("xtt-editor-md",u);
