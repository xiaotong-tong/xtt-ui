import{l as k,a3 as h,A as e,o as p,c as E,a4 as l,m as a}from"./chunks/framework.BBPsW2sD.js";import"./chunks/com.l0sNRNKZ.js";import{G as o}from"./chunks/lil-gui.esm.xJ4335us.js";const d=l("",17),g=a("section",{class:"wrap"},[a("xtt-button",{block:""},"block"),a("xtt-button",{type:"primary",block:""},"block"),a("xtt-button",{type:"danger",block:""},"block"),a("xtt-button",{type:"success",block:""},"block"),a("xtt-button",{type:"warning",block:""},"block"),a("xtt-button",{type:"base",block:""},"block")],-1),r=l("",3),y=a("section",{class:"wrap"},[a("xtt-button",{style:{"max-width":"200px"},line:"2"},"long long long long long long long long text")],-1),u=l("",3),c=a("xtt-button",{style:{"max-width":"200px"},rtl:""},"long long long long long long long long text with max width is 200px",-1),b=l("",1),x=[d,g,r,y,u,c,b],D=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button.md","filePath":"components/button.md"}'),F={name:"components/button.md"},B=Object.assign(F,{setup(_){let i;return k(async()=>{await Promise.all([h(()=>import("./chunks/xtt-tooltip.DWY3VwRL.js"),__vite__mapDeps([0,1,2,3,4])),h(()=>import("./chunks/xtt-button.ezONOxYR.js"),__vite__mapDeps([5,6,7,1,8,2,4]))]);const t=document.getElementById("operate");i=new o({container:document.querySelector(".operate-wrapper")});const n={content:"default",maxWidth:-1,type:"default",line:1,block:!1,size:"default",disabled:!1,rtl:!1};i.add(n,"content").onChange(s=>{t.textContent=s}),i.add(n,"maxWidth",-1).onChange(s=>{if(s===-1){t.style.maxWidth="";return}t.style.maxWidth=s+"px"}),i.add(n,"line",1).onChange(s=>{if(s===1){t.line=null;return}t.line=s}),i.add(n,"block").onChange(s=>{t.block=s}),i.add(n,"size",["default","large","small"]).onChange(s=>{if(s==="default"){t.removeAttribute("size");return}t.size=s}),i.add(n,"type",["default","primary","danger","success","warning","base"]).onChange(s=>{if(s==="default"){t.removeAttribute("type");return}t.type=s}),i.add(n,"disabled").onChange(s=>{t.disabled=s}),i.add(n,"rtl").onChange(s=>{t.rtl=s})}),e(()=>{i.destroy()}),(t,n)=>(p(),E("div",null,x))}});export{D as __pageData,B as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-tooltip.DWY3VwRL.js","assets/chunks/base.C5bbslE4.js","assets/chunks/xtt-ui-utils.BrAGWgIr.js","assets/chunks/displayPopover.CRcsbgwd.js","assets/chunks/index.esm.AN5-tQ0m.js","assets/chunks/xtt-button.ezONOxYR.js","assets/chunks/button.BU2fW_CF.js","assets/chunks/form.BYvHcT4-.js","assets/chunks/reflect.u-rLhaQE.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}