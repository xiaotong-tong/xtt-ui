function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-tooltip.CyKI1GiA.js","assets/chunks/base.C5bbslE4.js","assets/chunks/xtt-ui-utils.BGf_aNN0.js","assets/chunks/displayPopover.BCWjzPF1.js","assets/chunks/index.esm.qbmuVXDe.js","assets/chunks/xtt-icon.BcdcxFU6.js","assets/chunks/xtt-icon-button.Cf1Cdytu.js","assets/chunks/form.WS_BBDnf.js","assets/chunks/reflect.u-rLhaQE.js","assets/chunks/xtt-button.DXJv9R73.js","assets/chunks/button.C4BS4FJ9.js","assets/chunks/xtt-dialog.BoreN6x4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as _,a3 as n,A as b,o as C,c as x,a4 as h,m as s}from"./chunks/framework.BHEL0V5B.js";import"./chunks/com.l0sNRNKZ.js";import{G as B}from"./chunks/lil-gui.esm.CG3y4PpH.js";const q=h("",13),A=s("section",{class:"wrap"},[s("xtt-button",{id:"open5"},"open"),s("xtt-dialog",{id:"dialog5",title:"dialog title","modal-close":""}," This is dialog ")],-1),v=h("",2),D=s("section",{class:"wrap"},[s("xtt-button",{id:"open6"},"open"),s("xtt-dialog",{id:"dialog6",title:"dialog title","align-center":""}," This is dialog ")],-1),T=h("",1),f=[q,A,v,D,T],S=JSON.parse('{"title":"dialog 弹窗","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog.md","filePath":"components/dialog.md"}'),I={name:"components/dialog.md"},R=Object.assign(I,{setup(P){let t;return _(async()=>{await Promise.all([n(()=>import("./chunks/xtt-tooltip.CyKI1GiA.js"),__vite__mapDeps([0,1,2,3,4])),n(()=>import("./chunks/xtt-icon.BcdcxFU6.js"),__vite__mapDeps([5,1])),n(()=>import("./chunks/xtt-icon-button.Cf1Cdytu.js"),__vite__mapDeps([6,7,1,8,2])),n(()=>import("./chunks/xtt-button.DXJv9R73.js"),__vite__mapDeps([9,10,7,1,8,2,4])),n(()=>import("./chunks/xtt-dialog.BoreN6x4.js"),__vite__mapDeps([11,1,2]))]);const i=document.getElementById("operate"),l=document.getElementById("open");i.triggerElement=l,l.addEventListener("click",()=>{i.open()}),t=new B({container:document.querySelector(".operate-wrapper")});const e={title:"dialog title","modal-close":!1,"align-center":!1};t.add(e,"title").onChange(a=>{i.title=a}),t.add(e,"modal-close").onChange(a=>{i.modalClose=a}),t.add(e,"align-center").onChange(a=>{i.alignCenter=a});const p=document.getElementById("dialog1"),k=document.getElementById("open1");p.triggerElement=k,k.addEventListener("click",()=>{p.open()});const o=document.getElementById("dialog2"),d=document.getElementById("open2");o.triggerElement=d,d.addEventListener("click",()=>{o.open()});const E=document.getElementById("dialog3"),g=document.getElementById("open3");E.triggerElement=g,g.addEventListener("click",()=>{E.open()});const r=document.getElementById("dialog4"),c=document.getElementById("open4");r.triggerElement=c,c.addEventListener("click",()=>{r.open()});const y=document.getElementById("dialog5"),u=document.getElementById("open5");y.triggerElement=u,u.addEventListener("click",()=>{y.open()});const m=document.getElementById("dialog6"),F=document.getElementById("open6");m.triggerElement=F,F.addEventListener("click",()=>{m.open()})}),b(()=>{t.destroy()}),(i,l)=>(C(),x("div",null,f))}});export{S as __pageData,R as default};