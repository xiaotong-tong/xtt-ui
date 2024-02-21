import{l as s,a3 as n,A as i,o as r,c as l,a4 as p}from"./chunks/framework.Kegde9V2.js";import"./chunks/com.l0sNRNKZ.js";import{G as c}from"./chunks/lil-gui.esm.xJ4335us.js";const d=p("",6),h=[d],k=JSON.parse('{"title":"Text Box 文字框","description":"","frontmatter":{},"headers":[],"relativePath":"components/text-box-theme-a.md","filePath":"components/text-box-theme-a.md"}'),x={name:"components/text-box-theme-a.md"},g=Object.assign(x,{setup(m){let t;return s(async()=>{await Promise.all([n(()=>import("./chunks/xtt-text-box-theme-a.BnfiB1p4.js"),__vite__mapDeps([0,1]))]);const e=document.getElementById("operate");t=new c({container:document.querySelector(".operate-wrapper")});const o={content:"default",type:"default"};t.add(o,"content").onChange(a=>{e.textContent=a}),t.add(o,"type",["default","primary","danger","success","warning"]).onChange(a=>{if(a==="default"){e.removeAttribute("type");return}e.type=a})}),i(()=>{t.destroy()}),(e,o)=>(r(),l("div",null,h))}});export{k as __pageData,g as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-text-box-theme-a.BnfiB1p4.js","assets/chunks/base.C5bbslE4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
