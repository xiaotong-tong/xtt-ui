import{l as n,a2 as h,A as l,o as p,c as k,U as e}from"./chunks/framework.o54293_9.js";import{G as E}from"./chunks/lil-gui.esm.J1oMuMs2.js";const o=e("",11),c=[o],u=JSON.parse('{"title":"Icon 图标","description":"","frontmatter":{},"headers":[],"relativePath":"components/icon.md","filePath":"components/icon.md"}'),r={name:"components/icon.md"},F=Object.assign(r,{setup(d){let s;return n(async()=>{await Promise.all([h(()=>import("./chunks/xtt-icon.LLrk0Clc.js"),__vite__mapDeps([0,1]))]);const i=document.getElementById("operate");s=new E({container:document.querySelector(".operate-wrapper")});const t={icon:"power"};s.add(t,"icon",["power","chevronDown","plus","minus","close","musicNote"]).onChange(a=>{i.icon=a})}),l(()=>{s.destroy()}),(i,t)=>(p(),k("div",null,c))}});export{u as __pageData,F as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-icon.LLrk0Clc.js","assets/chunks/base.Wz2wNpMD.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}