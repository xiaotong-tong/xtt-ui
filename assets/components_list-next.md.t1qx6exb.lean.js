import{l as e,a2 as n,A as h,o as k,c as p,U as E}from"./chunks/framework.93CV3V4F.js";import{G as g}from"./chunks/lil-gui.esm.J1oMuMs2.js";const r=E("",19),m=[r],c=JSON.parse('{"title":"List Next 列表","description":"","frontmatter":{},"headers":[],"relativePath":"components/list-next.md","filePath":"components/list-next.md"}'),d={name:"components/list-next.md"},I=Object.assign(d,{setup(x){let i;return e(async()=>{await Promise.all([n(()=>import("./chunks/xtt-list-next.yseLWCUg.js"),__vite__mapDeps([0,1,2,3]))]);const s=document.getElementById("operate");i=new g({container:document.querySelector(".operate-wrapper")});const t={width:300,0:1,100:2,200:4,300:6},a=()=>{t.width>=300?s.cols=t[300]:t.width>=200?s.cols=t[200]:t.width>=100?s.cols=t[100]:s.cols=t[0]};i.add(t,"width",0,400).onChange(l=>{s.style.width=`${l}px`,a()}),a(),i.add(t,"0",0,10,1),i.add(t,"100",0,10,1),i.add(t,"200",0,10,1),i.add(t,"300",0,10,1)}),h(()=>{i.destroy()}),(s,t)=>(k(),p("div",null,m))}});export{c as __pageData,I as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-list-next.yseLWCUg.js","assets/chunks/reflect.QJLKHJUk.js","assets/chunks/base.Wz2wNpMD.js","assets/chunks/index.esm.RuPJ9LKr.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
