import{l as d,a3 as h,A as o,o as p,c as r,a4 as l,m as a}from"./chunks/framework.Kegde9V2.js";import"./chunks/com.l0sNRNKZ.js";import{G as k}from"./chunks/lil-gui.esm.xJ4335us.js";const c=l("",8),E=a("section",{class:"wrap"},[a("xtt-text-edit",{block:""})],-1),x=l("",5),g=[c,E,x],v=JSON.parse('{"title":"Text Edit 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/text-edit.md","filePath":"components/text-edit.md"}'),u={name:"components/text-edit.md"},C=Object.assign(u,{setup(_){let e;return d(async()=>{await Promise.all([h(()=>import("./chunks/xtt-text-edit.CLZviiGn.js"),__vite__mapDeps([0,1,2,3,4,5]))]);const s=document.getElementById("operate");e=new k({container:document.querySelector(".operate-wrapper")});const i={value:"",maxWidth:-1,block:!1,readOnly:!1,disabled:!1,rows:3,autosize:!1},n=e.add(i,"value").onChange(t=>{s.value=t});e.add(i,"block").onChange(t=>{s.block=t}),e.add(i,"maxWidth",-1).onChange(t=>{if(t===-1){s.style.maxWidth="";return}s.style.maxWidth=t+"px"}),e.add(i,"readOnly").onChange(t=>{s.readOnly=t}),e.add(i,"disabled").onChange(t=>{s.disabled=t}),e.add(i,"rows",1).onChange(t=>{s.rows=t}),s.addEventListener("input",t=>{n.setValue(t.target.value)})}),o(()=>{e.destroy()}),(s,i)=>(p(),r("div",null,g))}});export{v as __pageData,C as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-text-edit.CLZviiGn.js","assets/chunks/form.BYvHcT4-.js","assets/chunks/base.C5bbslE4.js","assets/chunks/reflect.u-rLhaQE.js","assets/chunks/xtt-ui-utils.BrAGWgIr.js","assets/chunks/index.esm.AN5-tQ0m.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}