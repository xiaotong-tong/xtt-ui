import{l as p,a3 as h,A as d,o,c as k,a4 as n,m as e}from"./chunks/framework.Kegde9V2.js";import"./chunks/com.l0sNRNKZ.js";import{G as r}from"./chunks/lil-gui.esm.xJ4335us.js";const c=n("",8),u=e("section",{class:"wrap"},[e("xtt-input",{block:""})],-1),E=n("",1),g=[c,u,E],x=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input.md","filePath":"components/input.md"}'),_={name:"components/input.md"},C=Object.assign(_,{setup(y){let t;return p(async()=>{await Promise.all([h(()=>import("./chunks/xtt-input.F7FDp5r5.js"),__vite__mapDeps([0,1,2,3,4,5]))]);const a=document.getElementById("operate");t=new r({container:document.querySelector(".operate-wrapper")});const i={value:"",placeholder:"placeholder",maxWidth:-1,block:!1,readOnly:!1,disabled:!1},l=t.add(i,"value").onChange(s=>{a.value=s});t.add(i,"placeholder").onChange(s=>{a.placeholder=s}),t.add(i,"block").onChange(s=>{a.block=s}),t.add(i,"maxWidth",-1).onChange(s=>{if(s===-1){a.style.maxWidth="";return}a.style.maxWidth=s+"px"}),t.add(i,"readOnly").onChange(s=>{a.readOnly=s}),t.add(i,"disabled").onChange(s=>{a.disabled=s}),a.addEventListener("input",s=>{l.setValue(s.target.value)})}),d(()=>{t.destroy()}),(a,i)=>(o(),k("div",null,g))}});export{x as __pageData,C as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-input.F7FDp5r5.js","assets/chunks/input.CpxUFIXd.js","assets/chunks/form.BYvHcT4-.js","assets/chunks/base.C5bbslE4.js","assets/chunks/reflect.u-rLhaQE.js","assets/chunks/xtt-ui-utils.BrAGWgIr.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
