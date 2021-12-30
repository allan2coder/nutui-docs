import{e as t,o as a,y as l}from"./vendor.js";const n={class:"markdown-body"},p=l(`<h1>Cell \u5355\u5143\u683C</h1><h3>\u4ECB\u7ECD</h3><p>\u5217\u8868\u9879\uFF0C\u53EF\u7EC4\u6210\u5217\u8868\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Cell, CellGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-tsx"><span class="hljs-keyword">const</span> testClick = <span class="hljs-function">(<span class="hljs-params">event: React.MouseEvent&lt;HTMLDivElement, globalThis.MouseEvent&gt;</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u70B9\u51FB\u4E8B\u4EF6&#39;</span>)
}

&lt;Cell title=<span class="hljs-string">&quot;\u6211\u662F\u6807\u9898&quot;</span> desc=<span class="hljs-string">&quot;\u63CF\u8FF0\u6587\u5B57&quot;</span>&gt;&lt;/Cell&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6211\u662F\u6807\u9898&quot;</span> <span class="hljs-attr">subTitle</span>=<span class="hljs-string">&quot;\u526F\u6807\u9898\u63CF\u8FF0&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u6587\u5B57&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Cell</span>&gt;</span></span>
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u70B9\u51FB\u6D4B\u8BD5&quot;</span>
    <span class="hljs-attr">click</span>=<span class="hljs-string">{(event:</span> <span class="hljs-attr">React.MouseEvent</span>&lt;<span class="hljs-attr">HTMLDivElement</span>, <span class="hljs-attr">globalThis.MouseEvent</span>&gt;</span>) =&gt;
    testClick(event)}
&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">Cell</span>&gt;</span>
</span></code></pre><h3>\u76F4\u63A5\u4F7F\u7528\u63D2\u69FD</h3><pre><code class="language-tsx">&lt;Cell title=<span class="hljs-string">&quot;\u6211\u662F\u6807\u9898&quot;</span> desc=<span class="hljs-string">&quot;\u63CF\u8FF0\u6587\u5B57&quot;</span>&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u81EA\u5B9A\u4E49\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/Cell&gt;
</code></pre><h3>\u94FE\u63A5 | \u5206\u7EC4\u7528\u6CD5</h3><pre><code class="language-tsx">&lt;CellGroup title=<span class="hljs-string">&quot;\u94FE\u63A5 | \u5206\u7EC4\u7528\u6CD5&quot;</span>&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u94FE\u63A5&quot;</span> <span class="hljs-attr">isLink</span>=<span class="hljs-string">{true}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Cell</span>&gt;</span></span>
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;URL \u8DF3\u8F6C&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;https://jd.com&quot;</span> <span class="hljs-attr">isLink</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;https://jd.com&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Cell</span>&gt;</span></span>
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8DEF\u7531\u8DF3\u8F6C \u2019/\u2018 &quot;</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;/&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Cell</span>&gt;</span></span>
&lt;/CellGroup&gt;
</code></pre><h3>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u7BAD\u5934\u533A\u57DF</h3><pre><code class="language-tsx">&lt;CellGroup title=<span class="hljs-string">&quot;\u81EA\u5B9A\u4E49\u53F3\u4FA7\u7BAD\u5934\u533A\u57DF&quot;</span>&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Switch&quot;</span> <span class="hljs-attr">extra</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">Switch</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Switch</span>&gt;</span>}&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">Cell</span>&gt;</span></span>
&lt;/CellGroup&gt;
</code></pre><h3>\u5355\u5143\u683C\u5C55\u793A\u56FE\u6807</h3><pre><code class="language-tsx">&lt;Cell title=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> icon=<span class="hljs-string">&quot;my&quot;</span> desc=<span class="hljs-string">&quot;\u5F20\u4E09&quot;</span> isLink={<span class="hljs-literal">true</span>}&gt;&lt;/Cell&gt;
</code></pre><h3>\u53EA\u5C55\u793A desc \uFF0C\u53EF\u901A\u8FC7 desc-text-align \u8C03\u6574\u5185\u5BB9\u4F4D\u7F6E</h3><pre><code class="language-tsx">&lt;Cell descTextAlign=<span class="hljs-string">&quot;left&quot;</span> desc=<span class="hljs-string">&quot;\u5F20\u4E09&quot;</span>&gt;&lt;/Cell&gt;
</code></pre><h2>API</h2><h3>Prop</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898\u540D\u79F0</td><td>String</td><td>-</td></tr><tr><td>sub-title</td><td>\u5DE6\u4FA7\u526F\u6807\u9898</td><td>String</td><td>-</td></tr><tr><td>desc</td><td>\u53F3\u4FA7\u63CF\u8FF0</td><td>String</td><td>-</td></tr><tr><td>desc-text-align</td><td>\u53F3\u4FA7\u63CF\u8FF0\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F <a href="https://www.w3school.com.cn/cssref/pr_text_text-align.asp">text-align</a></td><td>String</td><td>right</td></tr><tr><td>is-link</td><td>\u662F\u5426\u5C55\u793A\u53F3\u4FA7\u7BAD\u5934\u5E76\u5F00\u542F\u70B9\u51FB\u53CD\u9988</td><td>Boolean</td><td>false</td></tr><tr><td>icon</td><td>\u5DE6\u4FA7 <a href="#/icon">\u56FE\u6807\u540D\u79F0</a> \u6216\u56FE\u7247\u94FE\u63A5</td><td>String</td><td>-</td></tr><tr><td>url</td><td>\u70B9\u51FB\u540E\u8DF3\u8F6C\u7684\u94FE\u63A5\u5730\u5740</td><td>String</td><td>-</td></tr><tr><td>to</td><td>\u70B9\u51FB\u540E\u8DF3\u8F6C\u7684\u76EE\u6807\u8DEF\u7531\u5BF9\u8C61</td><td>String</td><td>-</td></tr><tr><td>replace</td><td>\u662F\u5426\u5728\u8DF3\u8F6C\u65F6\u66FF\u6362\u5F53\u524D\u9875\u9762\u5386\u53F2</td><td>Boolean</td><td>false</td></tr><tr><td>extra</td><td>\u5176\u4ED6</td><td>React.ReactNode</td><td>-</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u4E8B\u4EF6</td><td>event: React.MouseEvent&lt;HTMLDivElement, globalThis.MouseEvent&gt;</td></tr></tbody></table>`,23),e=[p],g={setup(c,{expose:s}){return s({frontmatter:{}}),(r,d)=>(a(),t("div",n,e))}};export{g as default};
