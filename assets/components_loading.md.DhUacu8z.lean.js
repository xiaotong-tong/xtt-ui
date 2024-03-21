function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-loading.BGdknZmh.js","assets/chunks/base.C5bbslE4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as n,a3 as l,A as e,o as h,c as p,a4 as o}from"./chunks/framework.Db9N967t.js";import"./chunks/com.l0sNRNKZ.js";import{G as k}from"./chunks/lil-gui.esm.CG3y4PpH.js";const d=o("",11),g=[d],u=JSON.parse('{"title":"loading 加载","description":"","frontmatter":{},"headers":[],"relativePath":"components/loading.md","filePath":"components/loading.md"}'),E={name:"components/loading.md"},_=Object.assign(E,{setup(r){let i;return n(async()=>{await Promise.all([l(()=>import("./chunks/xtt-loading.BGdknZmh.js"),__vite__mapDeps([0,1]))]);const t=document.getElementById("operate");i=new k({container:document.querySelector(".operate-wrapper")});const a={fontSize:16,color:"#3c3c3c","stroke-width":16,r:52};i.add(a,"fontSize").onChange(s=>{t.style.fontSize=s+"px"}),i.addColor(a,"color").onChange(s=>{t.style.color=s}),i.add(a,"stroke-width",0).onChange(s=>{t.style.setProperty("--loading-stroke-width",s)}),i.add(a,"r",0).onChange(s=>{t.style.setProperty("--loading-r",s)})}),e(()=>{i.destroy()}),(t,a)=>(h(),p("div",null,g))}});export{u as __pageData,_ as default};
