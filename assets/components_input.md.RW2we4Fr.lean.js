import{j as p,a1 as h,A as o,o as d,c as r,R as n,k as e}from"./chunks/framework.mXfRQ0uT.js";import{G as k}from"./chunks/lil-gui.esm.J1oMuMs2.js";const c=n("",8),u=e("section",{class:"wrap"},[e("xtt-input",{block:""})],-1),E=n("",1),g=[c,u,E],x=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input.md","filePath":"components/input.md"}'),_={name:"components/input.md"},b=Object.assign(_,{setup(y){let s;return p(async()=>{await Promise.all([h(()=>import("./chunks/xtt-input.30dGDi16.js"),__vite__mapDeps([0,1,2,3]))]);const a=document.getElementById("operate");s=new k({container:document.querySelector(".operate-wrapper")});const i={value:"",placeholder:"placeholder",maxWidth:-1,block:!1,readOnly:!1},l=s.add(i,"value").onChange(t=>{a.value=t});s.add(i,"placeholder").onChange(t=>{a.placeholder=t}),s.add(i,"block").onChange(t=>{a.block=t}),s.add(i,"maxWidth",-1).onChange(t=>{if(t===-1){a.style.maxWidth="";return}a.style.maxWidth=t+"px"}),s.add(i,"readOnly").onChange(t=>{a.readOnly=t}),a.addEventListener("input",t=>{l.setValue(t.target.value)})}),o(()=>{s.destroy()}),(a,i)=>(d(),r("div",null,g))}});export{x as __pageData,b as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-input.30dGDi16.js","assets/chunks/form.paJ4fB6U.js","assets/chunks/base.Wz2wNpMD.js","assets/chunks/xtt-ui-utils.Ke2hgjsQ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}