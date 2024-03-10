function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-text-box-theme-b.DFz1zxZq.js","assets/chunks/base.C5bbslE4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as o,a3 as i,A as n,o as l,c as r,a4 as h}from"./chunks/framework.BHEL0V5B.js";import"./chunks/com.l0sNRNKZ.js";import{G as p}from"./chunks/lil-gui.esm.CG3y4PpH.js";const c=h("",6),d=[c],E=JSON.parse('{"title":"Text Box 文字框","description":"","frontmatter":{},"headers":[],"relativePath":"components/text-box-theme-b.md","filePath":"components/text-box-theme-b.md"}'),x={name:"components/text-box-theme-b.md"},g=Object.assign(x,{setup(m){let t;return o(async()=>{await Promise.all([i(()=>import("./chunks/xtt-text-box-theme-b.DFz1zxZq.js"),__vite__mapDeps([0,1]))]);const e=document.getElementById("operate");t=new p({container:document.querySelector(".operate-wrapper")});const a={content:"default",color:"#000"};t.add(a,"content").onChange(s=>{e.textContent=s}),t.addColor(a,"color").onChange(s=>{e.style.setProperty("--text-box-border-color",s)})}),n(()=>{t.destroy()}),(e,a)=>(l(),r("div",null,d))}});export{E as __pageData,g as default};
