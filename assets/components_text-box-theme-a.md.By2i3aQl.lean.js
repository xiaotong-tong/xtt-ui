import{l,a3 as n,A as p,o as k,c as E,a4 as h,m as i}from"./chunks/framework.BBPsW2sD.js";import"./chunks/com.l0sNRNKZ.js";import{G as r}from"./chunks/lil-gui.esm.xJ4335us.js";const d=h("",9),o=i("section",{class:"wrap"},[i("xtt-text-box-theme-a",{id:"skow",skew:"50"},[i("xtt-p",null,"first"),i("xtt-p",null,"second"),i("xtt-p",null,"third")])],-1),g=h("",1),x=[d,o,g],A=JSON.parse('{"title":"Text Box 文字框","description":"","frontmatter":{},"headers":[],"relativePath":"components/text-box-theme-a.md","filePath":"components/text-box-theme-a.md"}'),c={name:"components/text-box-theme-a.md"},u=Object.assign(c,{setup(y){let s;return l(async()=>{await Promise.all([n(()=>import("./chunks/xtt-text-enter.CP4WD_UF.js"),__vite__mapDeps([0,1,2])),n(()=>import("./chunks/xtt-text-box-theme-a.B-8Bfty5.js"),__vite__mapDeps([3,4,2,5]))]);const a=document.getElementById("operate");s=new r({container:document.querySelector(".operate-wrapper")});const e={content:"default",color:"#00bfff",skew:0};s.add(e,"content").onChange(t=>{a.textContent=t}),s.addColor(e,"color").onChange(t=>{a.style.setProperty("--text-box-color",t)}),s.add(e,"skew",0,100).onChange(t=>{a.skew=t})}),p(()=>{s.destroy()}),(a,e)=>(k(),E("div",null,x))}});export{A as __pageData,u as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-text-enter.CP4WD_UF.js","assets/chunks/text.DyYyR5JS.js","assets/chunks/base.C5bbslE4.js","assets/chunks/xtt-text-box-theme-a.B-8Bfty5.js","assets/chunks/reflect.u-rLhaQE.js","assets/chunks/index.esm.AN5-tQ0m.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
