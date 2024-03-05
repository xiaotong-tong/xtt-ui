function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-loading.BrYPi8IH.js","assets/chunks/base.C5bbslE4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as n,a3 as l,A as e,o as h,c as p,a4 as o}from"./chunks/framework.Bf_irgTK.js";import"./chunks/com.l0sNRNKZ.js";import{G as k}from"./chunks/lil-gui.esm.CG3y4PpH.js";const d=o("",11),E=[d],u=JSON.parse('{"title":"loading 加载","description":"","frontmatter":{},"headers":[],"relativePath":"components/loading.md","filePath":"components/loading.md"}'),g={name:"components/loading.md"},_=Object.assign(g,{setup(r){let s;return n(async()=>{await Promise.all([l(()=>import("./chunks/xtt-loading.BrYPi8IH.js"),__vite__mapDeps([0,1]))]);const t=document.getElementById("operate");s=new k({container:document.querySelector(".operate-wrapper")});const a={fontSize:16,color:"#3c3c3c","stroke-width":16};s.add(a,"fontSize").onChange(i=>{t.style.fontSize=i+"px"}),s.addColor(a,"color").onChange(i=>{t.style.color=i}),s.add(a,"stroke-width",0).onChange(i=>{t.style.setProperty("--loading-stroke-width",i)})}),e(()=>{s.destroy()}),(t,a)=>(h(),p("div",null,E))}});export{u as __pageData,_ as default};
