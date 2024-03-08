function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-msg.5MbU2Xec.js","assets/chunks/reflect.u-rLhaQE.js","assets/chunks/base.C5bbslE4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as n,a3 as e,A as l,o as h,c as p,a4 as g}from"./chunks/framework.BHEL0V5B.js";import"./chunks/com.l0sNRNKZ.js";import{G as k}from"./chunks/lil-gui.esm.CG3y4PpH.js";const E=g("",15),r=[E],x=JSON.parse('{"title":"Msg 消息","description":"","frontmatter":{},"headers":[],"relativePath":"components/msg.md","filePath":"components/msg.md"}'),d={name:"components/msg.md"},u=Object.assign(d,{setup(o){let s;return n(async()=>{await Promise.all([e(()=>import("./chunks/xtt-msg.5MbU2Xec.js"),__vite__mapDeps([0,1,2]))]);const t=document.getElementById("operate");s=new k({container:document.querySelector(".operate-wrapper")});const i={content:"![随机数]()"};s.add(i,"content").onChange(a=>{t.textContent=a})}),l(()=>{s.destroy()}),(t,i)=>(h(),p("div",null,r))}});export{x as __pageData,u as default};
