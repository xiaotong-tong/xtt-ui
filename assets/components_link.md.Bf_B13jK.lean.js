import{l as h,a3 as k,A as e,o as p,c as r,a4 as l,m as n}from"./chunks/framework.Kegde9V2.js";import"./chunks/com.l0sNRNKZ.js";import{G as E}from"./chunks/lil-gui.esm.xJ4335us.js";const d=l("",12),o=n("section",{class:"wrap"},[n("xtt-link",{href:"#","inline-block":""},"link"),n("xtt-link",{href:"#","inline-block":"",style:{"max-width":"200px"}},"long long long long long long long link")],-1),g=l("",3),y=n("section",{class:"wrap"},[n("xtt-link",{href:"#",block:""},"link")],-1),c=l("",1),u=[d,o,g,y,c],b=JSON.parse('{"title":"Link 文字链接","description":"","frontmatter":{},"headers":[],"relativePath":"components/link.md","filePath":"components/link.md"}'),F={name:"components/link.md"},f=Object.assign(F,{setup(_){let t;return h(async()=>{await Promise.all([k(()=>import("./chunks/xtt-link.BnbhhoOY.js"),__vite__mapDeps([0,1]))]);const s=document.getElementById("operate");t=new E({container:document.querySelector(".operate-wrapper")});const a={content:"default",maxWidth:-1,type:"default",block:!1,"inline-block":!1};t.add(a,"content").onChange(i=>{s.textContent=i}),t.add(a,"type",["default","primary","danger","success","warning"]).onChange(i=>{if(i==="default"){s.removeAttribute("type");return}s.type=i}),t.add(a,"inline-block").onChange(i=>{s.inlineBlock=i}),t.add(a,"block").onChange(i=>{s.block=i}),t.add(a,"maxWidth",-1).onChange(i=>{if(i===-1){s.style.maxWidth="";return}s.style.maxWidth=i+"px"})}),e(()=>{t.destroy()}),(s,a)=>(p(),r("div",null,u))}});export{b as __pageData,f as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-link.BnbhhoOY.js","assets/chunks/base.C5bbslE4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
