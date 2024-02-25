var b=Object.defineProperty;var h=Object.getPrototypeOf;var c=Reflect.get;var u=(e,t,i)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var o=(e,t,i)=>(u(e,typeof t!="symbol"?t+"":t,i),i);var l=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};var d=(e,t,i)=>c(h(e),i,t);import{x as p}from"./base.C5bbslE4.js";const a=new CSSStyleSheet;a.replaceSync(':host {}:host {display:block;}#container {position:relative;width:200px;height:160px;border:2px solid #b98192;background-color:#f7d7e2;border-radius:67% 68% 52% 56% / 67% 79% 55% 57%;}#left_eye,#right_eye {position:absolute;inset-block-start:25%;inset-inline-start:23%;width:32px;height:5px;background-color:#000;}#right_eye {inset-inline-start:62%;}#left_blusher,#right_blusher {position:absolute;inset-block-start:40%;inset-inline-start:13%;width:40px;height:25px;}#right_blusher {inset-inline-start:70%;}:is(#left_blusher,#right_blusher)::before {content:"";position:absolute;inset:0;border-radius:50% / 50%;background-color:#f7b1bf;filter:blur(2px);}.blu1,.blu2 {width:2px;height:50%;background-color:#fff;position:absolute;left:31%;top:20%;transform:rotate(20deg);}.blu2 {left:67%;}.blu3 {display:none;}#mouth {position:absolute;inset-block-start:30%;inset-inline-start:calc(50% - 16px);width:40px;height:40px;overflow:hidden;}#mouth::before,#mouth::after {content:"";display:block;margin-top:-20px;width:15px;height:32px;border-radius:50% / 50%;border:2px solid black;transform:rotate(10deg);}#mouth::after {margin-left:16px;margin-top:-36px;transform:rotate(-10deg);}');var v=`<div id="container">
	<div id="left_eye"></div>
	<div id="right_eye"></div>

	<div id="mouth"></div>

	<div id="left_blusher">
		<div class="blu1"></div>
		<div class="blu2"></div>
		<div class="blu3"></div>
	</div>
	<div id="right_blusher">
		<div class="blu1"></div>
		<div class="blu2"></div>
		<div class="blu3"></div>
	</div>
</div>
`,r,f;const s=class s extends p{constructor(){super(...arguments);l(this,r)}static get observedAttributes(){return[]}attributeChangedCallback(i,g,x){}connectedCallback(){}};r=new WeakSet,f=function(){return this.shadowRoot.getElementById("container")},o(s,"templateContent",v),o(s,"stylesContent",[...d(s,s,"stylesContent"),a]);let n=s;customElements.define("xtt-dumpling-a",n);
