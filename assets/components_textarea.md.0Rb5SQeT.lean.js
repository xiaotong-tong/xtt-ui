import{l as h,a2 as r,A as o,o as p,c as d,U as l,m as i}from"./chunks/framework.iuPqd-H1.js";import{G as k}from"./chunks/lil-gui.esm.J1oMuMs2.js";const c=l("",8),E=i("section",{class:"wrap"},[i("xtt-textarea",{block:""})],-1),g=l("",7),x=i("section",{class:"wrap"},[i("xtt-textarea",{autosize:""})],-1),_=l("",1),u=[c,E,g,x,_],C=JSON.parse('{"title":"Textarea 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/textarea.md","filePath":"components/textarea.md"}'),y={name:"components/textarea.md"},T=Object.assign(y,{setup(m){let s;return h(async()=>{await Promise.all([r(()=>import("./chunks/xtt-textarea.z3PpBPA8.js"),__vite__mapDeps([0,1,2,3,4,5,6]))]);const t=document.getElementById("operate");s=new k({container:document.querySelector(".operate-wrapper")});const e={value:"",placeholder:"placeholder",maxWidth:-1,block:!1,readOnly:!1,disabled:!1,rows:3,autosize:!1},n=s.add(e,"value").onChange(a=>{t.value=a});s.add(e,"placeholder").onChange(a=>{t.placeholder=a}),s.add(e,"block").onChange(a=>{t.block=a}),s.add(e,"maxWidth",-1).onChange(a=>{if(a===-1){t.style.maxWidth="";return}t.style.maxWidth=a+"px"}),s.add(e,"readOnly").onChange(a=>{t.readOnly=a}),s.add(e,"disabled").onChange(a=>{t.disabled=a}),s.add(e,"rows",1).onChange(a=>{t.rows=a}),s.add(e,"autosize").onChange(a=>{t.autosize=a}),t.addEventListener("input",a=>{n.setValue(a.target.value)})}),o(()=>{s.destroy()}),(t,e)=>(p(),d("div",null,u))}});export{C as __pageData,T as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-textarea.z3PpBPA8.js","assets/chunks/input.Vn4Ksuh7.js","assets/chunks/form._HBYyMoL.js","assets/chunks/base.Wz2wNpMD.js","assets/chunks/reflect.QJLKHJUk.js","assets/chunks/xtt-ui-utils.Ke2hgjsQ.js","assets/chunks/index.esm.RuPJ9LKr.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}