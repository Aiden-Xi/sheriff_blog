1. 在引用数据的是，相关代码需要填写在body里面。
2. Vue里面的指令带有 'v-'开头。
3. 不要在选项属性或回调上使用箭头函数
```

 不要在选项属性或回调上使用箭头函数，比如 created: () => console.log(this.a)
或 vm.$watch('a', newValue => this.myMethod())。
因为箭头函数是和父级上下文绑定在一起的，this 不会是如你所预期的 Vue 实例，
经常导致 Uncaught TypeError: Cannot read property of undefined 或
Uncaught TypeError: this.myMethod is not a function 之类的错误。
 ```

4. [Vue生命周期图示](https://cn.vuejs.org/v2/guide/instance.html)

5. 模板语法
    - 插值 - 文本
    - 插值 - 原始HTML
    - 特性
    - 使用 JavaScript 表达式， 注意是表达式，控制流是不能使用的最好使用三元表达式
    - 指令 (Directives) 是带有 v- 前缀的特殊属性。指令属性的值预期是单个 JavaScript 表达式 (v-for 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。
    - 参数 - 一些指令能够接收一个“参数”，在指令名称之后以冒号表示。
    - 修饰符 修饰符 (Modifiers) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定
    - 缩写 v-bind  v-on缩写如下：
    ```
    # v-bind 缩写
    <!-- 完整语法 -->
    <a v-bind:href="url">...</a>
    <!-- 缩写 -->
    <a :href="url">...</a>

    v-on 缩写
    <!-- 完整语法 -->
    <a v-on:click="doSomething">...</a>
    <!-- 缩写 -->
    <a @click="doSomething">...</a>

    ```
