function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-text-highlight.BbqaLdgH.js","assets/chunks/reflect.u-rLhaQE.js","assets/chunks/base.C5bbslE4.js","assets/chunks/xtt-ui-utils.BGf_aNN0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l,a3 as n,A as o,o as r,c,m as t,a as s,a4 as p}from"./chunks/framework.BHEL0V5B.js";import"./chunks/com.l0sNRNKZ.js";import{G as d}from"./chunks/lil-gui.esm.CG3y4PpH.js";const k=t("h1",{id:"text-highlight-文字高亮",tabindex:"-1"},[s("Text Highlight 文字高亮 "),t("a",{class:"header-anchor",href:"#text-highlight-文字高亮","aria-label":'Permalink to "Text Highlight 文字高亮"'},"​")],-1),g=t("p",null,"文字高亮组件，用于高亮文字。",-1),_=t("section",{class:"operate-wrapper"},[t("div",{class:"operate-content"},[t("xtt-text-hl",{id:"operate",search:"fa"},"default")])],-1),E=t("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),u=t("p",null,[s("使用 "),t("code",null,"search"),s(" 属性来指定需要高亮的文字。使用 "),t("code",null,"search-color"),s(" 属性来指定高亮的颜色。")],-1),m=t("p",null,[t("code",null,"search"),s(" 属性为正则表达式字符串。")],-1),x=t("section",{class:"wrap"},[t("xtt-text-hl",{search:"ex"},"text"),t("xtt-text-hl",{search:"i|l|h","search-color":"red"},"this is the highlight custom element")],-1),y=p("",1),C=[k,g,_,E,u,m,x,y],B=JSON.parse('{"title":"Text Highlight 文字高亮","description":"","frontmatter":{},"headers":[],"relativePath":"components/text-highlight.md","filePath":"components/text-highlight.md"}'),F={name:"components/text-highlight.md"},A=Object.assign(F,{setup(f){let e;return l(async()=>{await Promise.all([n(()=>import("./chunks/xtt-text-highlight.BbqaLdgH.js"),__vite__mapDeps([0,1,2,3]))]);const a=document.getElementById("operate");e=new d({container:document.querySelector(".operate-wrapper")});const h={content:"default",search:"fa",searchColor:"yellow"};e.add(h,"content").onChange(i=>{a.textContent=i}),e.add(h,"search").onChange(i=>{a.search=i}),e.addColor(h,"searchColor").onChange(i=>{a.searchColor=i})}),o(()=>{e.destroy()}),(a,h)=>(r(),c("div",null,C))}});export{B as __pageData,A as default};