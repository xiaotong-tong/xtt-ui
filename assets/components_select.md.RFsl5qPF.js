import{l as h,a2 as n,A as k,o as E,c as d,U as r}from"./chunks/framework.o54293_9.js";import{G as g}from"./chunks/lil-gui.esm.J1oMuMs2.js";const c=r(`<h1 id="select-选择框" tabindex="-1">Select 选择框 <a class="header-anchor" href="#select-选择框" aria-label="Permalink to &quot;Select 选择框&quot;">​</a></h1><p>选择框，用来代替原生的 select 元素，提供丰富的样式和功能</p><section class="operate-wrapper"><div class="operate-content"><xtt-select id="operate"><option>option1</option><option selected>option2</option><option>option3</option></xtt-select></div></section><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><section class="wrap"><xtt-select><option>option1</option><option selected>option2</option><option disabled>option3</option></xtt-select><xtt-select disabled><option>option1</option><option selected>option2</option><option>option3</option></xtt-select><xtt-select><option label="option1"></option><option label="option2"></option><option label="option3"></option></xtt-select></section><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-select</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;operate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;option1&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> selected</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;option2&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;option3&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-select</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;option1&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> selected</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;option2&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;option3&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;label 虽然可以使 select 显示内容，但是只有 label 属性时 value 为空&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;option1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;option2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;option3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,6),y=[c],D=JSON.parse('{"title":"Select 选择框","description":"","frontmatter":{},"headers":[],"relativePath":"components/select.md","filePath":"components/select.md"}'),u={name:"components/select.md"},v=Object.assign(u,{setup(_){let a;return h(async()=>{await Promise.all([n(()=>import("./chunks/xtt-tooltip.LGQZoq3A.js"),__vite__mapDeps([0,1,2,3,4])),n(()=>import("./chunks/xtt-icon.LLrk0Clc.js"),__vite__mapDeps([5,1])),n(()=>import("./chunks/xtt-button.OuwxJYSo.js"),__vite__mapDeps([6,7,8,1,2,4])),n(()=>import("./chunks/xtt-select.-K42hSoT.js"),__vite__mapDeps([9,8,1,2,3,4]))]);const s=document.getElementById("operate");a=new g({container:document.querySelector(".operate-wrapper")});const t={value:s.value,options:"option2",disabled:!1,option1:{value:"option1",disabled:!1,label:"option1"},option2:{value:"option2",disabled:!1,label:"option2"},option3:{value:"option3",disabled:!1,label:"option3"}},o=a.add(t,"value");s.addEventListener("change",i=>{o.setValue(i.target.value)}),a.add(t,"options",["option1","option2","option3"]).onChange(i=>{o.setValue(t[i].value),s.value=i}),a.add(t,"disabled").onChange(i=>{s.disabled=i});const l=a.addFolder("option1");l.add(t.option1,"value").onChange(i=>{s.querySelector("option").value=i}),l.add(t.option1,"disabled").onChange(i=>{s.querySelector("option").disabled=i}),l.add(t.option1,"label").onChange(i=>{s.querySelector("option").label=i});const e=a.addFolder("option2");e.add(t.option2,"value").onChange(i=>{s.querySelectorAll("option")[1].value=i}),e.add(t.option2,"disabled").onChange(i=>{s.querySelectorAll("option")[1].disabled=i}),e.add(t.option2,"label").onChange(i=>{s.querySelectorAll("option")[1].label=i});const p=a.addFolder("option3");p.add(t.option3,"value").onChange(i=>{s.querySelectorAll("option")[2].value=i}),p.add(t.option3,"disabled").onChange(i=>{s.querySelectorAll("option")[2].disabled=i}),p.add(t.option3,"label").onChange(i=>{s.querySelectorAll("option")[2].label=i})}),k(()=>{a.destroy()}),(s,t)=>(E(),d("div",null,y))}});export{D as __pageData,v as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-tooltip.LGQZoq3A.js","assets/chunks/base.Wz2wNpMD.js","assets/chunks/xtt-ui-utils.Ke2hgjsQ.js","assets/chunks/displayPopover.FOsgN6BA.js","assets/chunks/index.esm.RuPJ9LKr.js","assets/chunks/xtt-icon.LLrk0Clc.js","assets/chunks/xtt-button.OuwxJYSo.js","assets/chunks/button.vA-ieCK9.js","assets/chunks/form.II5ULLp0.js","assets/chunks/xtt-select.-K42hSoT.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}