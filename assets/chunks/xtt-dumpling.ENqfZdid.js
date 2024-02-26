var u=Object.defineProperty;var p=Object.getPrototypeOf;var f=Reflect.get;var v=(e,t,i)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var r=(e,t,i)=>(v(e,typeof t!="symbol"?t+"":t,i),i);var n=(e,t,i)=>f(p(e),i,t);import{x as a}from"./base.C5bbslE4.js";const b=new CSSStyleSheet;b.replaceSync(':host {}:host {display:block;}#container {position:relative;width:200px;height:160px;border:2px solid #b98192;background-color:#f7d7e2;border-radius:67% 68% 52% 56% / 67% 79% 55% 57%;}#left_eye,#right_eye {position:absolute;inset-block-start:25%;inset-inline-start:23%;width:32px;height:5px;background-color:#000;}#right_eye {inset-inline-start:62%;}#left_blusher,#right_blusher {position:absolute;inset-block-start:40%;inset-inline-start:13%;width:40px;height:25px;}#right_blusher {inset-inline-start:70%;}:is(#left_blusher,#right_blusher)::before {content:"";position:absolute;inset:0;border-radius:50% / 50%;background-color:#f7b1bf;filter:blur(2px);}.blu1,.blu2 {width:2px;height:50%;background-color:#fff;position:absolute;left:31%;top:20%;transform:rotate(20deg);}.blu2 {left:67%;}.blu3 {display:none;}#mouth {position:absolute;inset-block-start:30%;inset-inline-start:calc(50% - 16px);width:40px;height:40px;overflow:hidden;}#mouth::before,#mouth::after {content:"";display:block;margin-top:-20px;width:15px;height:32px;border-radius:50% / 50%;border:2px solid black;transform:rotate(10deg);}#mouth::after {margin-left:16px;margin-top:-36px;transform:rotate(-10deg);}');var h=`<div id="container">
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
`;const s=class s extends a{};r(s,"templateContent",h),r(s,"stylesContent",[...n(s,s,"stylesContent"),b]);let l=s;const c=new CSSStyleSheet;c.replaceSync(':host {}:host {display:block;}#container {position:relative;width:200px;height:140px;border:2px solid #b98192;background-color:#f7d7e2;border-radius:67% 68% 37% 37% / 67% 79% 55% 57%;}#left_eye,#right_eye {position:absolute;inset-block-start:28%;inset-inline-start:40%;width:5px;height:28px;background-color:#000;}#right_eye {height:30px;inset-block-start:27%;inset-inline-start:53%;}#left_blusher,#right_blusher {position:absolute;inset-block-start:54%;inset-inline-start:19%;width:30px;height:30px;}#right_blusher {inset-block-start:50%;inset-inline-start:60%;}:is(#left_blusher,#right_blusher)::before {content:"";position:absolute;inset:0;border-radius:50% / 50%;background-color:#f7b1bf;filter:blur(2px);}.blu1,.blu2,.blu3,#mouth {display:none;}');const o=class o extends a{};r(o,"templateContent",h),r(o,"stylesContent",[...n(o,o,"stylesContent"),c]);let d=o;customElements.define("xtt-dumpling-a",l);customElements.define("xtt-dumpling-b",d);
