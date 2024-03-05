function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-markdown.wgWSUJMt.js","assets/chunks/reflect.u-rLhaQE.js","assets/chunks/base.C5bbslE4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as s,a3 as n,A as i,o as r,c as l,a4 as d}from"./chunks/framework.Bf_irgTK.js";import"./chunks/com.l0sNRNKZ.js";import{G as p}from"./chunks/lil-gui.esm.CG3y4PpH.js";const c=d("",6),h=[c],g=JSON.parse('{"title":"Markdown 文本","description":"","frontmatter":{},"headers":[],"relativePath":"components/markdown.md","filePath":"components/markdown.md"}'),k={name:"components/markdown.md"},w=Object.assign(k,{setup(m){let t;return s(async()=>{await Promise.all([n(()=>import("./chunks/xtt-markdown.wgWSUJMt.js"),__vite__mapDeps([0,1,2]))]);const a=document.getElementById("operate");t=new p({container:document.querySelector(".operate-wrapper")});const e={content:"## header"};t.add(e,"content").onChange(o=>{a.textContent=o})}),i(()=>{t.destroy()}),(a,e)=>(r(),l("div",null,h))}});export{g as __pageData,w as default};
