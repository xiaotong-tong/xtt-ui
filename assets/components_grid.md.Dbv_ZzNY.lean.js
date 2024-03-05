function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-grid-column.BKWg91xU.js","assets/chunks/reflect.u-rLhaQE.js","assets/chunks/base.C5bbslE4.js","assets/chunks/xtt-grid.C7vtSkrF.js","assets/chunks/index.esm.AN5-tQ0m.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as a,a3 as i,A as t,o as n,c as l,a4 as h}from"./chunks/framework.Bf_irgTK.js";import"./chunks/com.l0sNRNKZ.js";const k=h("",5),p=[k],y=JSON.parse('{"title":"Grid 表格","description":"","frontmatter":{},"headers":[],"relativePath":"components/grid.md","filePath":"components/grid.md"}'),e={name:"components/grid.md"},o=Object.assign(e,{setup(E){return a(async()=>{await Promise.all([i(()=>import("./chunks/xtt-grid-column.BKWg91xU.js").then(s=>s.x),__vite__mapDeps([0,1,2])),i(()=>import("./chunks/xtt-grid.C7vtSkrF.js"),__vite__mapDeps([3,0,1,2,4]))]),document.getElementById("grid").templates.isOld=function(s){return`<span>${s.age>=20?"大于20岁":"小于20岁"}</span>`},document.getElementById("grid").data=[{id:1,name:"a",age:18,email:"example@example.com"},{id:2,name:"b",age:21,email:"example@example.com"}]}),t(()=>{}),(s,d)=>(n(),l("div",null,p))}});export{y as __pageData,o as default};
