import{l as h,a2 as n,A as k,o as E,c as d,U as r}from"./chunks/framework.93CV3V4F.js";import{G as g}from"./chunks/lil-gui.esm.J1oMuMs2.js";const c=r("",6),y=[c],D=JSON.parse('{"title":"Select 选择框","description":"","frontmatter":{},"headers":[],"relativePath":"components/select.md","filePath":"components/select.md"}'),u={name:"components/select.md"},v=Object.assign(u,{setup(_){let a;return h(async()=>{await Promise.all([n(()=>import("./chunks/xtt-tooltip.LGQZoq3A.js"),__vite__mapDeps([0,1,2,3,4])),n(()=>import("./chunks/xtt-icon.LLrk0Clc.js"),__vite__mapDeps([5,1])),n(()=>import("./chunks/xtt-button.1_HqzoaG.js"),__vite__mapDeps([6,7,8,1,9,2,4])),n(()=>import("./chunks/xtt-select.F4IFXA1R.js"),__vite__mapDeps([10,8,1,9,2,3,4]))]);const s=document.getElementById("operate");a=new g({container:document.querySelector(".operate-wrapper")});const t={value:s.value,options:"option2",disabled:!1,option1:{value:"option1",disabled:!1,label:"option1"},option2:{value:"option2",disabled:!1,label:"option2"},option3:{value:"option3",disabled:!1,label:"option3"}},o=a.add(t,"value");s.addEventListener("change",i=>{o.setValue(i.target.value)}),a.add(t,"options",["option1","option2","option3"]).onChange(i=>{o.setValue(t[i].value),s.value=i}),a.add(t,"disabled").onChange(i=>{s.disabled=i});const l=a.addFolder("option1");l.add(t.option1,"value").onChange(i=>{s.querySelector("option").value=i}),l.add(t.option1,"disabled").onChange(i=>{s.querySelector("option").disabled=i}),l.add(t.option1,"label").onChange(i=>{s.querySelector("option").label=i});const e=a.addFolder("option2");e.add(t.option2,"value").onChange(i=>{s.querySelectorAll("option")[1].value=i}),e.add(t.option2,"disabled").onChange(i=>{s.querySelectorAll("option")[1].disabled=i}),e.add(t.option2,"label").onChange(i=>{s.querySelectorAll("option")[1].label=i});const p=a.addFolder("option3");p.add(t.option3,"value").onChange(i=>{s.querySelectorAll("option")[2].value=i}),p.add(t.option3,"disabled").onChange(i=>{s.querySelectorAll("option")[2].disabled=i}),p.add(t.option3,"label").onChange(i=>{s.querySelectorAll("option")[2].label=i})}),k(()=>{a.destroy()}),(s,t)=>(E(),d("div",null,y))}});export{D as __pageData,v as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-tooltip.LGQZoq3A.js","assets/chunks/base.Wz2wNpMD.js","assets/chunks/xtt-ui-utils.Ke2hgjsQ.js","assets/chunks/displayPopover.FOsgN6BA.js","assets/chunks/index.esm.RuPJ9LKr.js","assets/chunks/xtt-icon.LLrk0Clc.js","assets/chunks/xtt-button.1_HqzoaG.js","assets/chunks/button.u74i6PUD.js","assets/chunks/form._HBYyMoL.js","assets/chunks/reflect.QJLKHJUk.js","assets/chunks/xtt-select.F4IFXA1R.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
