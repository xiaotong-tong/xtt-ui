function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-icon.BcdcxFU6.js","assets/chunks/base.C5bbslE4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as n,a3 as h,A as l,o as p,c as k,a4 as e}from"./chunks/framework.BHEL0V5B.js";import"./chunks/com.l0sNRNKZ.js";import{G as o}from"./chunks/lil-gui.esm.CG3y4PpH.js";const E=e("",11),c=[E],F=JSON.parse('{"title":"Icon 图标","description":"","frontmatter":{},"headers":[],"relativePath":"components/icon.md","filePath":"components/icon.md"}'),r={name:"components/icon.md"},m=Object.assign(r,{setup(d){let s;return n(async()=>{await Promise.all([h(()=>import("./chunks/xtt-icon.BcdcxFU6.js"),__vite__mapDeps([0,1]))]);const i=document.getElementById("operate");s=new o({container:document.querySelector(".operate-wrapper")});const t={icon:"power"};s.add(t,"icon",["power","chevronDown","plus","minus","close","musicNote"]).onChange(a=>{i.icon=a})}),l(()=>{s.destroy()}),(i,t)=>(p(),k("div",null,c))}});export{F as __pageData,m as default};