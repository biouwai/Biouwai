import{_ as i,c as a,a2 as n,o as l}from"./chunks/framework.0Bx0CPYg.js";const g=JSON.parse('{"title":"CSS","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/HTML&CSS/CSS.md","filePath":"front-end/HTML&CSS/CSS.md","lastUpdated":1730040151000}'),t={name:"front-end/HTML&CSS/CSS.md"};function h(p,s,k,e,r,E){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-label="Permalink to &quot;CSS&quot;">​</a></h1><h2 id="_1-选择器及优先级" tabindex="-1">1.选择器及优先级 <a class="header-anchor" href="#_1-选择器及优先级" aria-label="Permalink to &quot;1.选择器及优先级&quot;">​</a></h2><p>CSS 选择器的权重规则可以总结如下：</p><ul><li>!important 会覆盖页面内任何位置的元素样式</li><li>内联样式，如 style=&quot;color: green&quot;，权值为 1000</li><li>ID 选择器，如#app，权值为 0100</li><li>类、伪类、属性选择器，如.foo, :first-child, div[class=&quot;foo&quot;]，权值为 0010</li><li>标签、伪元素选择器，如 div::first-line，权值为 0001</li><li>通配符、子类选择器、兄弟选择器、后代选择器，如*, &gt;, +，&#39; &#39;权值为 0000</li><li>继承的样式没有权值</li></ul><p>下面是一个权重计算的示例：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/_ 权重为 0001 _/ </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/_ 权重为 0010 _/ </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.class1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/_ 权重为 0100 _/ </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#id1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/_ 权重为 101 _/ </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#id1</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/_ 权重为 0011 _/ </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.class1</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/_ 权重为 0021 _/ </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.class1</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> .class2</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>根据权重的计算规则，从左到右比较，选择器的权重越高，其样式优先级越高，将更有可能应用到对应的元素上。</p><h2 id="_2-伪类和伪元素的区别" tabindex="-1">2.伪类和伪元素的区别 <a class="header-anchor" href="#_2-伪类和伪元素的区别" aria-label="Permalink to &quot;2.伪类和伪元素的区别&quot;">​</a></h2><ol><li>伪类--&gt;单冒号: 伪类是用于选择元素的特定状态或动作的关键字，例如 :hover、:active、:focus 等。表<strong>示元素的某种状态或行为</strong>，它们通常用于选择元素的特定状态并应用相应的样式。</li><li>伪元素--&gt;双冒号:： 伪元素是用于在文档中生成或插入特定内容的关键字，例如 ::before、::after、::first-line、::first-letter 等。它们允许开发人员在元素的特定位置添加样式或内容，无需在文档中实际插入额外的 HTML 元素。</li><li>总结：伪类选中是<strong>真实元素</strong>的特定行为或动作。伪元素是在元素中选择一个特定位置添加样式，<strong>而不需要真正的添加 HTML 元素</strong></li></ol><h2 id="_3-盒模型" tabindex="-1">3.盒模型 <a class="header-anchor" href="#_3-盒模型" aria-label="Permalink to &quot;3.盒模型&quot;">​</a></h2><p>box-sizing 属性用于控制元素的盒模型类型，常用的属性值有：</p><ul><li>content-box：默认值，使用标准的 W3C 盒模型，元素的宽度和高度<strong>仅包括内容区域（content）</strong>，不包括填充、边框和外边距。</li><li>border-box：使用怪异的 IE 盒模型，元素的宽度和高度包括内容区域（content）、填充（padding）和边框（border），但<strong>不包括外边距（margin）</strong>。即元素的宽度和高度指定的是内容区域加上填充和边框的总宽度和高度。</li><li>inherit：继承父元素的 box-sizing 属性值。</li><li>不管怎样，背景色都包含 padding</li></ul><h2 id="_4-css-常见单位" tabindex="-1">4.CSS 常见单位 <a class="header-anchor" href="#_4-css-常见单位" aria-label="Permalink to &quot;4.CSS 常见单位&quot;">​</a></h2><h2 id="_5-隐藏元素" tabindex="-1">5.隐藏元素 <a class="header-anchor" href="#_5-隐藏元素" aria-label="Permalink to &quot;5.隐藏元素&quot;">​</a></h2><ul><li>display:none; --&gt; 元素从文档流中移除，元素不在页面中占位置，不会绑定监听事件。</li><li>visibility:hidden;元素仍占空间，但不绑定监听事件，是继承属性。子孙可通过 visibility:visible 显示。</li></ul><h2 id="_6-css-动画" tabindex="-1">6.CSS 动画 <a class="header-anchor" href="#_6-css-动画" aria-label="Permalink to &quot;6.CSS 动画&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 定义动画关键帧 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@keyframes</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> rotate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  0%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    transform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rotate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">deg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  100%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    transform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rotate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">360</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">deg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 应用动画到元素 */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.element</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  animation-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: rotate; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 指定动画名称 */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  animation-duration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 动画持续时间 */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  animation-timing-function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">linear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 动画速度曲线 */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  animation-delay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 动画延迟时间 */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  animation-iteration-count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">infinite</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 动画重复次数，这里设置为无限循环 */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  animation-direction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">normal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 动画播放方向 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,17)]))}const o=i(t,[["render",h]]);export{g as __pageData,o as default};