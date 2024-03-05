function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/xtt-list-next.DwQjsgHW.js","assets/chunks/reflect.u-rLhaQE.js","assets/chunks/base.C5bbslE4.js","assets/chunks/index.esm.AN5-tQ0m.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as e,a3 as n,A as h,o as k,c as p,a4 as E}from"./chunks/framework.Bf_irgTK.js";import"./chunks/com.l0sNRNKZ.js";import{G as g}from"./chunks/lil-gui.esm.CG3y4PpH.js";const r=E(`<h1 id="list-next-列表" tabindex="-1">List Next 列表 <a class="header-anchor" href="#list-next-列表" aria-label="Permalink to &quot;List Next 列表&quot;">​</a></h1><p>列表组件，用于展示一系列有序的信息。与 List 组件不同的是，List Next 组件基于 CSS 容器查询实现，List 组件基于 resizeObserver 实现。</p><section class="operate-wrapper"><div class="operate-content"><xtt-list-next id="operate" style="width:300px;"><xtt-list-item>Item 1</xtt-list-item><xtt-list-item>Item 2</xtt-list-item><xtt-list-item>Item 3</xtt-list-item><xtt-list-item>Item 4</xtt-list-item><xtt-list-item>Item 5</xtt-list-item><xtt-list-item>Item 6</xtt-list-item><xtt-list-item>Item 7</xtt-list-item><xtt-list-item>Item 8</xtt-list-item><xtt-list-item>Item 9</xtt-list-item><xtt-list-item>Item 10</xtt-list-item><xtt-list-item>Item 11</xtt-list-item><xtt-list-item>Item 12</xtt-list-item></xtt-list-next></div></section><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>默认情况下，列数会根据容器宽度自动计算。</p><p>默认宽度与列数的对应关系如下：</p><p>&gt; 1200px --&gt; 6 列</p><p>&gt; 800px --&gt; 4 列</p><p>&gt; 500px --&gt; 3 列</p><p>&gt; 200px --&gt; 2 列</p><p>&gt; 0px --&gt; 1 列</p><p>如果想要自定义宽度与列数的对应关系，可以通过监听宽度变化然后更改 <code>cols</code> 属性来实现。</p><blockquote><p>注意：list-next 没有 <code>xtt-resize</code> 事件。</p></blockquote><section class="wrap"><xtt-list-next style="resize:horizontal;"><xtt-list-item>Item 1</xtt-list-item><xtt-list-item>Item 2</xtt-list-item><xtt-list-item>Item 3</xtt-list-item><xtt-list-item>Item 4</xtt-list-item><xtt-list-item>Item 5</xtt-list-item><xtt-list-item>Item 6</xtt-list-item><xtt-list-item>Item 7</xtt-list-item><xtt-list-item>Item 8</xtt-list-item><xtt-list-item>Item 9</xtt-list-item><xtt-list-item>Item 10</xtt-list-item><xtt-list-item>Item 11</xtt-list-item><xtt-list-item>Item 12</xtt-list-item></xtt-list-next></section><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-next</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;resize: horizontal&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 1&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 2&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 3&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 4&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 5&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 6&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 7&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 8&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 9&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 10&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 11&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 12&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="cols" tabindex="-1">cols <a class="header-anchor" href="#cols" aria-label="Permalink to &quot;cols&quot;">​</a></h2><p>设置固定的列数</p><xtt-list-next cols="3" style="resize:horizontal;"><xtt-list-item>Item 1</xtt-list-item><xtt-list-item>Item 2</xtt-list-item><xtt-list-item>Item 3</xtt-list-item><xtt-list-item>Item 4</xtt-list-item><xtt-list-item>Item 5</xtt-list-item><xtt-list-item>Item 6</xtt-list-item><xtt-list-item>Item 7</xtt-list-item><xtt-list-item>Item 8</xtt-list-item><xtt-list-item>Item 9</xtt-list-item><xtt-list-item>Item 10</xtt-list-item><xtt-list-item>Item 11</xtt-list-item><xtt-list-item>Item 12</xtt-list-item></xtt-list-next><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-next</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cols</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;resize: horizontal&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 1&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 2&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 3&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 4&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 5&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 6&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 7&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 8&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 9&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 10&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 11&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Item 12&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xtt-list-next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,19),m=[r],I=JSON.parse('{"title":"List Next 列表","description":"","frontmatter":{},"headers":[],"relativePath":"components/list-next.md","filePath":"components/list-next.md"}'),d={name:"components/list-next.md"},A=Object.assign(d,{setup(x){let i;return e(async()=>{await Promise.all([n(()=>import("./chunks/xtt-list-next.DwQjsgHW.js"),__vite__mapDeps([0,1,2,3]))]);const s=document.getElementById("operate");i=new g({container:document.querySelector(".operate-wrapper")});const t={width:300,0:1,100:2,200:4,300:6},a=()=>{t.width>=300?s.cols=t[300]:t.width>=200?s.cols=t[200]:t.width>=100?s.cols=t[100]:s.cols=t[0]};i.add(t,"width",0,400).onChange(l=>{s.style.width=`${l}px`,a()}),a(),i.add(t,"0",0,10,1),i.add(t,"100",0,10,1),i.add(t,"200",0,10,1),i.add(t,"300",0,10,1)}),h(()=>{i.destroy()}),(s,t)=>(k(),p("div",null,m))}});export{I as __pageData,A as default};