function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-loading.Cy-BPjJg.js","assets/chunks/base.C5bbslE4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as i,a3 as t,A as a,o as l,c as n,a4 as h}from"./chunks/framework.Bf_irgTK.js";import"./chunks/com.l0sNRNKZ.js";import{G as e}from"./chunks/lil-gui.esm.CG3y4PpH.js";const p=h("",10),k=[p],x=JSON.parse('{"title":"loading 加载","description":"","frontmatter":{},"headers":[],"relativePath":"components/loading.md","filePath":"components/loading.md"}'),o={name:"components/loading.md"},u=Object.assign(o,{setup(d){let s;return i(async()=>{await Promise.all([t(()=>import("./chunks/xtt-loading.Cy-BPjJg.js"),__vite__mapDeps([0,1]))]),document.getElementById("operate"),s=new e({container:document.querySelector(".operate-wrapper")})}),a(()=>{s.destroy()}),(E,g)=>(l(),n("div",null,k))}});export{x as __pageData,u as default};
