import{j as h,a1 as e,o as k,c as p,R as l,k as n}from"./chunks/framework.VfRqQFBm.js";import{G as E}from"./chunks/lil-gui.esm.J1oMuMs2.js";const o=l("",14),d=n("section",{class:"wrap"},[n("xtt-text-button",{block:""},"block"),n("xtt-text-button",{type:"primary",block:""},"block"),n("xtt-text-button",{type:"danger",block:""},"block")],-1),r=l("",2),g=n("section",{class:"wrap"},[n("xtt-text-button",{style:{"max-width":"200px"},line:"2"},"long long long long long long long long text")],-1),u=l("",1),y=[o,d,r,g,u],m=JSON.parse('{"title":"Text-Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/text-button.md","filePath":"components/text-button.md"}'),x={name:"components/text-button.md"},F=Object.assign(x,{setup(c){return h(async()=>{await Promise.all([e(()=>import("./chunks/xtt-tooltip.n53UN-76.js"),__vite__mapDeps([0,1])),e(()=>import("./chunks/xtt-text-button.x--nfsoF.js"),__vite__mapDeps([2,3,1]))]);const s=document.getElementById("operate"),i=new E({container:document.querySelector(".operate-wrapper")}),a={content:"default",maxWidth:-1,type:"default",line:1,block:!1,size:"default"};i.add(a,"content").onChange(t=>{s.textContent=t}),i.add(a,"maxWidth",-1).onChange(t=>{if(t===-1){s.style.maxWidth="";return}s.style.maxWidth=t+"px"}),i.add(a,"line",1).onChange(t=>{if(t===1){s.line=null;return}s.line=t}),i.add(a,"block").onChange(t=>{s.block=t}),i.add(a,"size",["default","large","small"]).onChange(t=>{if(t==="default"){s.removeAttribute("size");return}s.size=t}),i.add(a,"type",["default","primary","danger","success","warning","base"]).onChange(t=>{if(t==="default"){s.removeAttribute("type");return}s.type=t})}),(s,i)=>(k(),p("div",null,y))}});export{m as __pageData,F as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-tooltip.n53UN-76.js","assets/chunks/index.esm.IQKO_hMU.js","assets/chunks/xtt-text-button.x--nfsoF.js","assets/chunks/button.9btU9rDX.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}