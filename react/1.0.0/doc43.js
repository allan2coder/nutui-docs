import{e as a,o as s,y as e}from"./vendor.js";const d={class:"markdown-body"},l=e(`<h1>TextArea \u6587\u672C\u57DF</h1><h3>\u4ECB\u7ECD</h3><p>\u6587\u672C\u6846\u5185\u8F93\u5165\u6216\u7F16\u8F91\u6587\u5B57\uFF0C\u652F\u6301\u9650\u5236\u8F93\u5165\u6570\u91CF\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript">
<span class="hljs-keyword">import</span> { TextArea } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>;

</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;{value1}&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">const</span> [value1, UpdateValue1] = useState(<span class="hljs-string">&#39;&#39;</span>)
</code></pre><h3>\u663E\u793A\u5B57\u6570\u7EDF\u8BA1</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;{value2}&quot;</span> <span class="hljs-attr">limitShow</span> <span class="hljs-attr">maxlength</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
</code></pre><h3>\u9AD8\u5EA6\u81EA\u5B9A\u4E49\uFF0C\u62C9\u4F38</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;{value3}&quot;</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">autosize</span> /&gt;</span>
</code></pre><h3>\u53EA\u8BFB\u3001\u7981\u7528</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">readonly</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;textarea\u53EA\u8BFB\u72B6\u6001&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;textarea\u7981\u7528\u72B6\u6001&quot;</span> <span class="hljs-attr">limitShow</span> <span class="hljs-attr">maxlength</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>defaultValue</td><td>\u521D\u59CB\u9ED8\u8BA4\u503C\uFF0C\u652F\u6301\u53CC\u5411\u7ED1\u5B9A</td><td>String</td><td>-</td></tr><tr><td>placeholder</td><td>\u8BBE\u7F6E\u5360\u4F4D\u63D0\u793A\u6587\u5B57</td><td>String</td><td><code>&#39;\u8BF7\u8F93\u5165\u5185\u5BB9&#39;</code></td></tr><tr><td>maxlength</td><td>\u9650\u5236\u6700\u957F\u8F93\u5165\u5B57\u7B26</td><td>String\u3001Number</td><td>-</td></tr><tr><td>rows</td><td>textarea \u7684\u9AD8\u5EA6</td><td>String\u3001Number</td><td><code>2</code></td></tr><tr><td>limitShow</td><td>textarea \u662F\u5426\u5C55\u793A\u8F93\u5165\u5B57\u7B26\u3002\u987B\u914D\u5408<code>max-length</code>\u4F7F\u7528</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>autosize</td><td>\u9AD8\u5EA6\u662F\u5426\u53EF\u62C9\u4F38</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>textAlign</td><td>\u6587\u672C\u4F4D\u7F6E,\u53EF\u9009\u503C<code>left</code>,<code>center</code>,<code>right</code></td><td>String</td><td><code>left</code></td></tr><tr><td>readonly</td><td>\u53EA\u8BFB\u5C5E\u6027</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>disabled</td><td>\u7981\u7528\u5C5E\u6027</td><td>Boolean</td><td><code>false</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u8F93\u5165\u5185\u5BB9\u65F6\u89E6\u53D1</td><td>val</td></tr><tr><td>focus</td><td>\u805A\u7126\u65F6\u89E6\u53D1</td><td>val</td></tr><tr><td>blur</td><td>\u5931\u7126\u65F6\u89E6\u53D1</td><td>val</td></tr></tbody></table>`,20),n=[l],u={setup(r,{expose:t}){return t({frontmatter:{}}),(c,p)=>(s(),a("div",d,n))}};export{u as default};
