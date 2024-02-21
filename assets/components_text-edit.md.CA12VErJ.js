import{l as d,a3 as h,A as o,o as p,c as r,a4 as l,m as a}from"./chunks/framework.Kegde9V2.js";import"./chunks/com.l0sNRNKZ.js";import{G as k}from"./chunks/lil-gui.esm.xJ4335us.js";const c=l('<h1 id="text-edit-输入框" tabindex="-1">Text Edit 输入框 <a class="header-anchor" href="#text-edit-输入框" aria-label="Permalink to &quot;Text Edit 输入框&quot;">​</a></h1><p>输入框，用于替代原生的 textarea 元素，提供丰富的样式和功能。</p><section class="operate-wrapper"><div class="operate-content"><xtt-text-edit id="operate"></xtt-text-edit></div></section><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><section class="wrap"><xtt-text-edit>This is text-edit</xtt-text-edit><xtt-text-edit value="input value"></xtt-text-edit><xtt-text-edit readonly></xtt-text-edit><xtt-text-edit disabled></xtt-text-edit></section><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-text-edit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;This is textarea&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-text-edit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="block" tabindex="-1">block <a class="header-anchor" href="#block" aria-label="Permalink to &quot;block&quot;">​</a></h2><p>将输入框转换为块级元素。</p>',8),E=a("section",{class:"wrap"},[a("xtt-text-edit",{block:""})],-1),x=l(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-text-edit</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-text-edit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="rows" tabindex="-1">rows <a class="header-anchor" href="#rows" aria-label="Permalink to &quot;rows&quot;">​</a></h2><p>设置输入框的行数。（显示的高度）</p><section class="wrap"><xtt-text-edit rows="1"></xtt-text-edit><xtt-text-edit rows="5"></xtt-text-edit></section><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-text-edit</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rows</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-text-edit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-text-edit</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rows</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-text-edit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,5),g=[c,E,x],v=JSON.parse('{"title":"Text Edit 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/text-edit.md","filePath":"components/text-edit.md"}'),u={name:"components/text-edit.md"},C=Object.assign(u,{setup(_){let e;return d(async()=>{await Promise.all([h(()=>import("./chunks/xtt-text-edit.CLZviiGn.js"),__vite__mapDeps([0,1,2,3,4,5]))]);const s=document.getElementById("operate");e=new k({container:document.querySelector(".operate-wrapper")});const i={value:"",maxWidth:-1,block:!1,readOnly:!1,disabled:!1,rows:3,autosize:!1},n=e.add(i,"value").onChange(t=>{s.value=t});e.add(i,"block").onChange(t=>{s.block=t}),e.add(i,"maxWidth",-1).onChange(t=>{if(t===-1){s.style.maxWidth="";return}s.style.maxWidth=t+"px"}),e.add(i,"readOnly").onChange(t=>{s.readOnly=t}),e.add(i,"disabled").onChange(t=>{s.disabled=t}),e.add(i,"rows",1).onChange(t=>{s.rows=t}),s.addEventListener("input",t=>{n.setValue(t.target.value)})}),o(()=>{e.destroy()}),(s,i)=>(p(),r("div",null,g))}});export{v as __pageData,C as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-text-edit.CLZviiGn.js","assets/chunks/form.BYvHcT4-.js","assets/chunks/base.C5bbslE4.js","assets/chunks/reflect.u-rLhaQE.js","assets/chunks/xtt-ui-utils.BrAGWgIr.js","assets/chunks/index.esm.AN5-tQ0m.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
