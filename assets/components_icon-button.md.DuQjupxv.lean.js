function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-tooltip.CyKI1GiA.js","assets/chunks/base.C5bbslE4.js","assets/chunks/xtt-ui-utils.BGf_aNN0.js","assets/chunks/displayPopover.BCWjzPF1.js","assets/chunks/index.esm.qbmuVXDe.js","assets/chunks/xtt-icon.BcdcxFU6.js","assets/chunks/xtt-icon-button.Cf1Cdytu.js","assets/chunks/form.WS_BBDnf.js","assets/chunks/reflect.u-rLhaQE.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as h,a3 as n,A as k,o as l,c as p,a4 as e}from"./chunks/framework.BHEL0V5B.js";import"./chunks/com.l0sNRNKZ.js";import{G as E}from"./chunks/lil-gui.esm.CG3y4PpH.js";const o=e("",15),r=[o],x=JSON.parse('{"title":"Icon Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/icon-button.md","filePath":"components/icon-button.md"}'),g={name:"components/icon-button.md"},F=Object.assign(g,{setup(d){let t;return h(async()=>{await Promise.all([n(()=>import("./chunks/xtt-tooltip.CyKI1GiA.js"),__vite__mapDeps([0,1,2,3,4])),n(()=>import("./chunks/xtt-icon.BcdcxFU6.js"),__vite__mapDeps([5,1])),n(()=>import("./chunks/xtt-icon-button.Cf1Cdytu.js"),__vite__mapDeps([6,7,1,8,2]))]);const i=document.getElementById("operate");t=new E({container:document.querySelector(".operate-wrapper")});const a={type:"default",size:"default"};t.add(a,"size",["default","large","small"]).onChange(s=>{if(s==="default"){i.removeAttribute("size");return}i.size=s}),t.add(a,"type",["default","primary","danger","success","warning","base"]).onChange(s=>{if(s==="default"){i.removeAttribute("type");return}i.type=s})}),k(()=>{t.destroy()}),(i,a)=>(l(),p("div",null,r))}});export{x as __pageData,F as default};