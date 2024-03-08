function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-link.BnbhhoOY.js","assets/chunks/base.C5bbslE4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as h,a3 as k,A as e,o as p,c as r,a4 as l,m as n}from"./chunks/framework.BHEL0V5B.js";import"./chunks/com.l0sNRNKZ.js";import{G as E}from"./chunks/lil-gui.esm.CG3y4PpH.js";const d=l(`<h1 id="link-文字链接" tabindex="-1">Link 文字链接 <a class="header-anchor" href="#link-文字链接" aria-label="Permalink to &quot;Link 文字链接&quot;">​</a></h1><p>链接，用于替代原生的 a 元素，提供丰富的样式和功能。</p><section class="operate-wrapper"><div class="operate-content"><xtt-link id="operate" href="#">default</xtt-link></div></section><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><section class="wrap"><xtt-link href="#">link</xtt-link><xtt-link href="#" target="_blank">link</xtt-link></section><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;link&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;_blank&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;link&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="type-样式" tabindex="-1">type 样式 <a class="header-anchor" href="#type-样式" aria-label="Permalink to &quot;type 样式&quot;">​</a></h2><p>type 会更改按钮的显示风格，目前支持 5 种风格，分别为 primary、danger、success、warning、default</p><section class="wrap"><xtt-link href="#" type="primary">primary</xtt-link><xtt-link href="#" type="danger">danger</xtt-link><xtt-link href="#" type="success">success</xtt-link><xtt-link href="#" type="warning">warning</xtt-link><xtt-link href="#">default</xtt-link></section><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;primary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;primary&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;danger&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;danger&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;success&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;success&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;warning&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;warning&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;default&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="inline-block" tabindex="-1">inline-block <a class="header-anchor" href="#inline-block" aria-label="Permalink to &quot;inline-block&quot;">​</a></h2><p>将链接转换为行内块元素。</p>`,12),o=n("section",{class:"wrap"},[n("xtt-link",{href:"#","inline-block":""},"link"),n("xtt-link",{href:"#","inline-block":"",style:{"max-width":"200px"}},"long long long long long long long link")],-1),g=l(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;link&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> inline-block</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;max-width: 200px;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;long long long long long long long link&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="block" tabindex="-1">block <a class="header-anchor" href="#block" aria-label="Permalink to &quot;block&quot;">​</a></h2><p>将链接转换为块级元素。并在 hover 时显示灰色背景。</p>`,3),y=n("section",{class:"wrap"},[n("xtt-link",{href:"#",block:""},"link")],-1),c=l('<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;link&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>',1),u=[d,o,g,y,c],b=JSON.parse('{"title":"Link 文字链接","description":"","frontmatter":{},"headers":[],"relativePath":"components/link.md","filePath":"components/link.md"}'),F={name:"components/link.md"},f=Object.assign(F,{setup(_){let t;return h(async()=>{await Promise.all([k(()=>import("./chunks/xtt-link.BnbhhoOY.js"),__vite__mapDeps([0,1]))]);const s=document.getElementById("operate");t=new E({container:document.querySelector(".operate-wrapper")});const a={content:"default",maxWidth:-1,type:"default",block:!1,"inline-block":!1};t.add(a,"content").onChange(i=>{s.textContent=i}),t.add(a,"type",["default","primary","danger","success","warning"]).onChange(i=>{if(i==="default"){s.removeAttribute("type");return}s.type=i}),t.add(a,"inline-block").onChange(i=>{s.inlineBlock=i}),t.add(a,"block").onChange(i=>{s.block=i}),t.add(a,"maxWidth",-1).onChange(i=>{if(i===-1){s.style.maxWidth="";return}s.style.maxWidth=i+"px"})}),e(()=>{t.destroy()}),(s,a)=>(p(),r("div",null,u))}});export{b as __pageData,f as default};