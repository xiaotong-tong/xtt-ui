import{l as s,a3 as n,A as i,o as r,c as l,V as d}from"./chunks/framework.3DIjh9Lj.js";import{G as c}from"./chunks/lil-gui.esm.J1oMuMs2.js";const h=d('<h1 id="markdown-文本" tabindex="-1">Markdown 文本 <a class="header-anchor" href="#markdown-文本" aria-label="Permalink to &quot;Markdown 文本&quot;">​</a></h1><p>Markdown 文本组件，支持 Markdown 语法。</p><section class="operate-wrapper"><div class="operate-content"><xtt-markdown id="operate"> ## header</xtt-markdown></div></section><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><section class="wrap"><xtt-markdown>**Hello World** *Hello World* ~~Hello World~~</xtt-markdown></section><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-markdown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; **Hello World** *Hello World* ~~Hello World~~</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-markdown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>',6),p=[h],u=JSON.parse('{"title":"Markdown 文本","description":"","frontmatter":{},"headers":[],"relativePath":"components/markdown.md","filePath":"components/markdown.md"}'),k={name:"components/markdown.md"},g=Object.assign(k,{setup(m){let t;return s(async()=>{await Promise.all([n(()=>import("./chunks/xtt-markdown.nSY8WQEG.js"),__vite__mapDeps([0,1,2]))]);const a=document.getElementById("operate");t=new c({container:document.querySelector(".operate-wrapper")});const e={content:"## header"};t.add(e,"content").onChange(o=>{a.textContent=o})}),i(()=>{t.destroy()}),(a,e)=>(r(),l("div",null,p))}});export{u as __pageData,g as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-markdown.nSY8WQEG.js","assets/chunks/reflect.QJLKHJUk.js","assets/chunks/base.Wz2wNpMD.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
