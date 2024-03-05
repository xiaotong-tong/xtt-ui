function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-text.5YGrEkan.js","assets/chunks/text.DyYyR5JS.js","assets/chunks/base.C5bbslE4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as e,a3 as n,A as l,o as p,c as h,a4 as k}from"./chunks/framework.Bf_irgTK.js";import"./chunks/com.l0sNRNKZ.js";import{G as r}from"./chunks/lil-gui.esm.CG3y4PpH.js";const E=k("",10),d=[E],u=JSON.parse('{"title":"Text 文字","description":"","frontmatter":{},"headers":[],"relativePath":"components/text.md","filePath":"components/text.md"}'),o={name:"components/text.md"},m=Object.assign(o,{setup(g){let t;return e(async()=>{await Promise.all([n(()=>import("./chunks/xtt-text.5YGrEkan.js"),__vite__mapDeps([0,1,2]))]);const s=document.getElementById("operate");t=new r({container:document.querySelector(".operate-wrapper")});const a={content:"default",type:"default"};t.add(a,"content").onChange(i=>{s.textContent=i}),t.add(a,"type",["default","primary","danger","success","warning"]).onChange(i=>{if(i==="default"){s.removeAttribute("type");return}s.type=i})}),l(()=>{t.destroy()}),(s,a)=>(p(),h("div",null,d))}});export{u as __pageData,m as default};
