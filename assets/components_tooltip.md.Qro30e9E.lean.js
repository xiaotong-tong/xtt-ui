function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-tooltip.CyKI1GiA.js","assets/chunks/base.C5bbslE4.js","assets/chunks/xtt-ui-utils.BGf_aNN0.js","assets/chunks/displayPopover.BCWjzPF1.js","assets/chunks/index.esm.qbmuVXDe.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l,a3 as n,A as h,o as e,c as p,a4 as k}from"./chunks/framework.BHEL0V5B.js";import"./chunks/com.l0sNRNKZ.js";import{G as o}from"./chunks/lil-gui.esm.CG3y4PpH.js";const r=k("",19),E=[r],F=JSON.parse('{"title":"Tooltip 提示文本","description":"","frontmatter":{},"headers":[],"relativePath":"components/tooltip.md","filePath":"components/tooltip.md"}'),d={name:"components/tooltip.md"},b=Object.assign(d,{setup(g){let t;return l(async()=>{await Promise.all([n(()=>import("./chunks/xtt-tooltip.CyKI1GiA.js"),__vite__mapDeps([0,1,2,3,4]))]);const s=document.getElementById("operate");t=new o({container:document.querySelector(".operate-wrapper")});const a={"data-xtt-tooltip":"This is tooltip",preventDefault:!1,"aria-describedby":!1};t.add(a,"data-xtt-tooltip").onChange(i=>{s.setAttribute("data-xtt-tooltip",i)}),s.addEventListener("xtt-tooltip-show",i=>{console.log(i),a.preventDefault&&i.preventDefault()}),t.add(a,"preventDefault"),t.add(a,"aria-describedby").onChange(i=>{i?s.setAttribute("data-aria-type","labelledby"):s.removeAttribute("data-aria-type")}),document.getElementById("initTriggerTooltip").initTrigger(document.querySelectorAll(".initTrigger")),document.querySelector("#preventDefaultBtn").addEventListener("xtt-tooltip-show",i=>{console.log(i),i.preventDefault()})}),h(()=>{t.destroy()}),(s,a)=>(e(),p("div",null,E))}});export{F as __pageData,b as default};