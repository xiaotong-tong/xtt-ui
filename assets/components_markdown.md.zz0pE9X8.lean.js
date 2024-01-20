import{l as s,a3 as n,A as i,o as r,c as l,V as d}from"./chunks/framework.3DIjh9Lj.js";import"./chunks/com.w40geAFS.js";import{G as p}from"./chunks/lil-gui.esm.J1oMuMs2.js";const c=d("",6),h=[c],g=JSON.parse('{"title":"Markdown 文本","description":"","frontmatter":{},"headers":[],"relativePath":"components/markdown.md","filePath":"components/markdown.md"}'),k={name:"components/markdown.md"},w=Object.assign(k,{setup(m){let t;return s(async()=>{await Promise.all([n(()=>import("./chunks/xtt-markdown.nSY8WQEG.js"),__vite__mapDeps([0,1,2]))]);const a=document.getElementById("operate");t=new p({container:document.querySelector(".operate-wrapper")});const e={content:"## header"};t.add(e,"content").onChange(o=>{a.textContent=o})}),i(()=>{t.destroy()}),(a,e)=>(r(),l("div",null,h))}});export{g as __pageData,w as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-markdown.nSY8WQEG.js","assets/chunks/reflect.QJLKHJUk.js","assets/chunks/base.Wz2wNpMD.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
