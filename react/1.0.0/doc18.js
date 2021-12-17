import{e,o as s,y as a}from"./vendor.js";const d={class:"markdown-body"},n=a(`<h1>InputNumber \u6570\u5B57\u8F93\u5165\u6846</h1><h3>\u4ECB\u7ECD</h3><p>\u901A\u8FC7\u70B9\u51FB\u6309\u94AE\u63A7\u5236\u6570\u5B57\u589E\u51CF\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { InputNumber } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>;
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><p>\u521D\u59CB\u5316\u4E00\u4E2A\u9ED8\u8BA4\u503C</p><pre><code class="language-tsx">&lt;InputNumber modelValue={inputState.val1} /&gt;
</code></pre><pre><code class="language-tsx"><span class="hljs-keyword">const</span> [inputState, setInputState] = useState({
  <span class="hljs-attr">val1</span>: <span class="hljs-number">1</span>,
})
</code></pre><h3>\u6B65\u957F\u8BBE\u7F6E</h3><p>\u8BBE\u7F6E\u6B65\u957F <code>step</code> 5</p><pre><code class="language-tsx">&lt;InputNumber modelValue={inputState.val2} step=<span class="hljs-string">&quot;5&quot;</span> /&gt;
</code></pre><h3>\u9650\u5236\u8F93\u5165\u8303\u56F4</h3><p><code>min</code> \u548C <code>max</code> \u5C5E\u6027\u5206\u522B\u8868\u793A\u6700\u5C0F\u503C\u548C\u6700\u5927\u503C</p><pre><code class="language-tsx">&lt;InputNumber modelValue={inputState.val3} min=<span class="hljs-string">&quot;10&quot;</span> max=<span class="hljs-string">&quot;20&quot;</span> overlimit={overlimit} /&gt;
</code></pre><pre><code class="language-tsx"><span class="hljs-keyword">const</span> overlimit = <span class="hljs-function">(<span class="hljs-params">e: MouseEvent</span>) =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(e)
  Toast.warn(<span class="hljs-string">&#39;\u8D85\u51FA\u9650\u5236\u4E8B\u4EF6\u89E6\u53D1&#39;</span>)
}
</code></pre><h3>\u7981\u7528\u72B6\u6001</h3><p><code>disabled</code> \u7981\u7528\u72B6\u6001\u4E0B\u65E0\u6CD5\u70B9\u51FB\u6309\u94AE\u6216\u4FEE\u6539\u8F93\u5165\u6846\u3002</p><pre><code class="language-tsx">&lt;InputNumber modelValue={inputState.val4} disabled /&gt;
</code></pre><h3>\u53EA\u8BFB\u7981\u7528\u8F93\u5165\u6846</h3><p><code>readonly</code> \u8BBE\u7F6E\u53EA\u8BFB\u7981\u7528\u8F93\u5165\u6846\u8F93\u5165\u884C\u4E3A</p><pre><code class="language-tsx">&lt;InputNumber modelValue={inputState.val5} <span class="hljs-keyword">readonly</span> /&gt;
</code></pre><h3>\u652F\u6301\u5C0F\u6570\u70B9</h3><p>\u8BBE\u7F6E\u6B65\u957F <code>step</code> 0.1 <code>decimal-places</code> \u5C0F\u6570\u4FDD\u75591\u4F4D</p><pre><code class="language-tsx">&lt;InputNumber modelValue={inputState.val6} step=<span class="hljs-string">&quot;0.1&quot;</span> decimalPlaces=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-keyword">readonly</span> /&gt;
</code></pre><h3>\u652F\u6301\u5F02\u6B65\u4FEE\u6539</h3><p>\u901A\u8FC7 <code>change</code> \u4E8B\u4EF6\u548C <code>model-value</code> \u8FDB\u884C\u5F02\u6B65\u4FEE\u6539</p><pre><code class="language-tsx">&lt;InputNumber modelValue={inputState.val7} change={onChange} isAsync={<span class="hljs-literal">true</span>} /&gt;
</code></pre><pre><code class="language-tsx"><span class="hljs-keyword">const</span> onChange = <span class="hljs-function">(<span class="hljs-params">value: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">number</span></span>) =&gt;</span> {
  Toast.loading(<span class="hljs-string">&#39;\u5F02\u6B65\u6F14\u793A 2 \u79D2\u540E\u66F4\u6539&#39;</span>)
  <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
    inputState.val7 = <span class="hljs-built_in">Number</span>(value)
    setInputState({ ...inputState })
    Toast.hide()
  }, <span class="hljs-number">2000</span>)
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u6309\u94AE\u5927\u5C0F</h3><p>\u8BBE\u7F6E\u6B65\u957F <code>step</code> 0.1 <code>decimal-places</code> \u5C0F\u6570\u4FDD\u75591\u4F4D</p><pre><code class="language-tsx">&lt;InputNumber modelValue={inputState.val8} buttonSize=<span class="hljs-string">&quot;30&quot;</span> inputWidth=<span class="hljs-string">&quot;50&quot;</span> /&gt;
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>modelValue</td><td>\u521D\u59CB\u503C</td><td>String\u3001Number</td><td>-</td></tr><tr><td>inputWidth</td><td>\u8F93\u5165\u6846\u5BBD\u5EA6</td><td>String</td><td><code>40px</code></td></tr><tr><td>buttonSize</td><td>\u64CD\u4F5C\u7B26+\u3001-\u5C3A\u5BF8</td><td>String</td><td><code>20px</code></td></tr><tr><td>min</td><td>\u6700\u5C0F\u503C\u9650\u5236</td><td>String\u3001Number</td><td><code>1</code></td></tr><tr><td>max</td><td>\u6700\u5927\u503C\u9650\u5236</td><td>String\u3001Number</td><td><code>9999</code></td></tr><tr><td>step</td><td>\u6B65\u957F</td><td>String\u3001Number</td><td><code>1</code></td></tr><tr><td>decimalPlaces</td><td>\u8BBE\u7F6E\u4FDD\u7559\u7684\u5C0F\u6570\u4F4D</td><td>String\u3001Number</td><td><code>0</code></td></tr><tr><td>disabled</td><td>\u7981\u7528\u6240\u6709\u529F\u80FD</td><td>Boolean</td><td>false</td></tr><tr><td>readonly</td><td>\u53EA\u8BFB\u72B6\u6001\u7981\u7528\u8F93\u5165\u6846\u64CD\u4F5C\u884C\u4E3A</td><td>Boolean</td><td>false</td></tr><tr><td>isAsync</td><td>\u652F\u6301\u5F02\u6B65\u4FEE\u6539</td><td>Boolean</td><td>false</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>add</td><td>\u70B9\u51FB\u589E\u52A0\u6309\u94AE\u65F6\u89E6\u53D1</td><td>event: Event</td></tr><tr><td>reduce</td><td>\u70B9\u51FB\u51CF\u5C11\u6309\u94AE\u65F6\u89E6\u53D1</td><td>event: Event</td></tr><tr><td>overlimit</td><td>\u70B9\u51FB\u4E0D\u53EF\u7528\u7684\u6309\u94AE\u65F6\u89E6\u53D1</td><td>event: Event</td></tr><tr><td>change</td><td>\u503C\u6539\u53D8\u65F6\u89E6\u53D1</td><td>value: number , event : Event</td></tr><tr><td>blur</td><td>\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>event: Event</td></tr><tr><td>focus</td><td>\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>event: Event</td></tr></tbody></table>`,38),l=[n],h={setup(o,{expose:t}){return t({frontmatter:{}}),(r,c)=>(s(),e("div",d,l))}};export{h as default};