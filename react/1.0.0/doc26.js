import{e as t,o as a,y as n}from"./vendor.js";const l={class:"markdown-body"},p=n(`<h1>Notify \u6D88\u606F\u901A\u77E5</h1><h3>\u4ECB\u7ECD</h3><p>\u5728\u9875\u9762\u9876\u90E8\u5C55\u793A\u6D88\u606F\u63D0\u793A</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Notify } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>;
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-tsx"> &lt;Cell title=<span class="hljs-string">&quot;\u57FA\u7840\u7528\u6CD5&quot;</span>
 click={<span class="hljs-function">(<span class="hljs-params">event: React.MouseEvent</span>) =&gt;</span> { 
    baseNotify(<span class="hljs-string">&#39;\u57FA\u7840\u7528\u6CD5&#39;</span>)
 }}
&gt;&lt;/Cell&gt;
<span class="hljs-keyword">const</span> baseNotify = <span class="hljs-function">(<span class="hljs-params">msg: <span class="hljs-built_in">string</span></span>) =&gt;</span> {
    Notify.text(msg,{
      <span class="hljs-attr">onClosed</span>: <span class="hljs-function">() =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;close&#39;</span>);
      },
      <span class="hljs-attr">onClick</span>: <span class="hljs-function">() =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;click&#39;</span>);
      }
    })
}
</code></pre><h2>\u901A\u77E5\u7C7B\u578B</h2><h3>\u4E3B\u8981\u901A\u77E5</h3><pre><code class="language-tsx">Notify.primary(<span class="hljs-string">&#39;\u901A\u77E5\u5185\u5BB9&#39;</span>)
</code></pre><h3>\u6210\u529F\u901A\u77E5</h3><pre><code class="language-tsx">
Notify.success(<span class="hljs-string">&#39;\u901A\u77E5\u5185\u5BB9&#39;</span>)

</code></pre><h3>\u5371\u9669\u901A\u77E5</h3><pre><code class="language-tsx">Notify.danger(msg)
</code></pre><h3>\u8B66\u544A\u901A\u77E5</h3><pre><code class="language-tsx">Notify.warn(msg)

<span class="hljs-keyword">const</span> cusBgNotify = <span class="hljs-function">(<span class="hljs-params">msg: <span class="hljs-built_in">string</span></span>) =&gt;</span> {
    Notify.text(msg, { <span class="hljs-attr">color</span>: <span class="hljs-string">&#39;#ad0000&#39;</span>, <span class="hljs-attr">background</span>: <span class="hljs-string">&#39;#ffe1e1&#39;</span> })
}
<span class="hljs-keyword">const</span> timeNotify = <span class="hljs-function">(<span class="hljs-params">msg: <span class="hljs-built_in">string</span></span>) =&gt;</span> {
    Notify.text(msg, { <span class="hljs-attr">duration</span>: <span class="hljs-number">10000</span> })
}
</code></pre><h2>\u81EA\u5B9A\u4E49</h2><h3>\u81EA\u5B9A\u4E49\u6837\u5F0F</h3><pre><code class="language-tsx">Notify.text(msg, { <span class="hljs-attr">color</span>: <span class="hljs-string">&#39;#ad0000&#39;</span>, <span class="hljs-attr">background</span>: <span class="hljs-string">&#39;#ffe1e1&#39;</span>,<span class="hljs-attr">className</span>:<span class="hljs-string">&#39;aa&#39;</span> })

</code></pre><h3>\u81EA\u5B9A\u4E49\u65F6\u957F</h3><pre><code class="language-tsx">
<span class="hljs-keyword">const</span> timeNotify = <span class="hljs-function">(<span class="hljs-params">msg: <span class="hljs-built_in">string</span></span>) =&gt;</span> {
    Notify.text(msg, { <span class="hljs-attr">duration</span>: <span class="hljs-number">10000</span> })
}

&lt;Button <span class="hljs-keyword">type</span>=<span class="hljs-string">&quot;primary&quot;</span> onClick={<span class="hljs-function">()=&gt;</span>{
    Notify.hide()
}}&gt;
\u70B9\u6211\u5173\u95ED\u901A\u544A\u680F
&lt;/Button&gt;
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u63D0\u793A\u7684\u4FE1\u606F\u7C7B\u578B\uFF08primary\uFF0Csuccess \uFF0Cdanger\uFF0Cwarning\uFF09</td><td>String</td><td>\u2018danger\u2019</td></tr><tr><td>message</td><td>\u5C55\u793A\u6587\u6848\uFF0C\u652F\u6301\u901A\u8FC7\\n\u6362\u884C</td><td>Boolean</td><td>false</td></tr><tr><td>duration</td><td>\u5C55\u793A\u65F6\u957F(ms)\uFF0C\u503C\u4E3A 0 \u65F6\uFF0Cnotify \u4E0D\u4F1A\u6D88\u5931</td><td>String</td><td>3000</td></tr><tr><td>color</td><td>\u5B57\u4F53\u989C\u8272</td><td>String</td><td>\u7A7A</td></tr><tr><td>background</td><td>\u80CC\u666F\u989C\u8272</td><td>String</td><td>\u7A7A</td></tr><tr><td>className</td><td>\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>String/Number</td><td>1</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>onClick</td><td>\u70B9\u51FB\u4E8B\u4EF6\u56DE\u8C03</td><td>\u65E0</td></tr><tr><td>onClosed</td><td>\u5173\u95ED\u4E8B\u4EF6\u56DE\u8C03</td><td>\u65E0</td></tr></tbody></table>`,27),c=[p],i={setup(r,{expose:s}){return s({frontmatter:{}}),(o,d)=>(a(),t("div",l,c))}};export{i as default};
