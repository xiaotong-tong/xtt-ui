import{l as h,a3 as e,A as k,o as p,c as E,V as l,m as i}from"./chunks/framework.3DIjh9Lj.js";import"./chunks/com.w40geAFS.js";import{G as o}from"./chunks/lil-gui.esm.J1oMuMs2.js";const r=l("",17),d=i("section",{class:"wrap"},[i("xtt-text-button",{block:""},"block"),i("xtt-text-button",{type:"primary",block:""},"block"),i("xtt-text-button",{type:"danger",block:""},"block"),i("xtt-text-button",{type:"success",block:""},"block"),i("xtt-text-button",{type:"warning",block:""},"block"),i("xtt-text-button",{type:"base",block:""},"block")],-1),g=l("",3),y=i("section",{class:"wrap"},[i("xtt-text-button",{style:{"max-width":"200px"},line:"2"},"long long long long long long long long text")],-1),u=l("",1),x=[r,d,g,y,u],C=JSON.parse('{"title":"Text Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/text-button.md","filePath":"components/text-button.md"}'),c={name:"components/text-button.md"},A=Object.assign(c,{setup(b){let a;return h(async()=>{await Promise.all([e(()=>import("./chunks/xtt-tooltip.LGQZoq3A.js"),__vite__mapDeps([0,1,2,3,4])),e(()=>import("./chunks/xtt-text-button.oA7LCfDY.js"),__vite__mapDeps([5,6,7,1,8,2,4]))]);const s=document.getElementById("operate");a=new o({container:document.querySelector(".operate-wrapper")});const n={content:"default",maxWidth:-1,type:"default",line:1,block:!1,size:"default"};a.add(n,"content").onChange(t=>{s.textContent=t}),a.add(n,"maxWidth",-1).onChange(t=>{if(t===-1){s.style.maxWidth="";return}s.style.maxWidth=t+"px"}),a.add(n,"line",1).onChange(t=>{if(t===1){s.line=null;return}s.line=t}),a.add(n,"block").onChange(t=>{s.block=t}),a.add(n,"size",["default","large","small"]).onChange(t=>{if(t==="default"){s.removeAttribute("size");return}s.size=t}),a.add(n,"type",["default","primary","danger","success","warning","base"]).onChange(t=>{if(t==="default"){s.removeAttribute("type");return}s.type=t})}),k(()=>{a.destroy()}),(s,n)=>(p(),E("div",null,x))}});export{C as __pageData,A as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-tooltip.LGQZoq3A.js","assets/chunks/base.Wz2wNpMD.js","assets/chunks/xtt-ui-utils.Ke2hgjsQ.js","assets/chunks/displayPopover.FOsgN6BA.js","assets/chunks/index.esm.RuPJ9LKr.js","assets/chunks/xtt-text-button.oA7LCfDY.js","assets/chunks/button.u74i6PUD.js","assets/chunks/form._HBYyMoL.js","assets/chunks/reflect.QJLKHJUk.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}