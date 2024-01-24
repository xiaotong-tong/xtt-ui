import{l as i,a3 as e,A as n,o as r,c as p,V as d}from"./chunks/framework.V9Ht2uZj.js";import"./chunks/com.w40geAFS.js";import{G as l}from"./chunks/lil-gui.esm.J1oMuMs2.js";const c=d("",7),h=[c],E=JSON.parse('{"title":"Page Nav 导航","description":"","frontmatter":{},"headers":[],"relativePath":"components/sound.md","filePath":"components/sound.md"}'),_={name:"components/sound.md"},v=Object.assign(_,{setup(u){let t;return i(async()=>{await Promise.all([e(()=>import("./chunks/xtt-icon.LLrk0Clc.js"),__vite__mapDeps([0,1])),e(()=>import("./chunks/xtt-sound.On4EM7xC.js"),__vite__mapDeps([2,1]))]);const s=document.getElementById("operate");t=new l({container:document.querySelector(".operate-wrapper")});const a={src:"https://xtt.moe/sounds/jp/word/猫かぶり.wav"};t.add(a,"src").onChange(o=>{s.src=o})}),n(()=>{t.destroy()}),(s,a)=>(r(),p("div",null,h))}});export{E as __pageData,v as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-icon.LLrk0Clc.js","assets/chunks/base.Wz2wNpMD.js","assets/chunks/xtt-sound.On4EM7xC.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
