import{l as s,a3 as n,A as i,o as r,c as l,V as d}from"./chunks/framework.3DIjh9Lj.js";import{G as c}from"./chunks/lil-gui.esm.J1oMuMs2.js";const h=d("",6),p=[h],u=JSON.parse('{"title":"Markdown 文本","description":"","frontmatter":{},"headers":[],"relativePath":"components/markdown.md","filePath":"components/markdown.md"}'),k={name:"components/markdown.md"},g=Object.assign(k,{setup(m){let t;return s(async()=>{await Promise.all([n(()=>import("./chunks/xtt-markdown.nSY8WQEG.js"),__vite__mapDeps([0,1,2]))]);const a=document.getElementById("operate");t=new c({container:document.querySelector(".operate-wrapper")});const e={content:"## header"};t.add(e,"content").onChange(o=>{a.textContent=o})}),i(()=>{t.destroy()}),(a,e)=>(r(),l("div",null,p))}});export{u as __pageData,g as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-markdown.nSY8WQEG.js","assets/chunks/reflect.QJLKHJUk.js","assets/chunks/base.Wz2wNpMD.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
