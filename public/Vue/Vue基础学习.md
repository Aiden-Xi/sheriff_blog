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

6. 计算属性和监听器
    - methods 和 watch/computed 对比 [对比链接](https://blog.csdn.net/yuwenshi12/article/details/78561372)
    
7. Class 和 Style的绑定
    - 对象语法 - v-bind:class="{ active: isActive }"
    - 数组语法 - v-bind:class="[activeClass, errorClass]"
    - 数组语法三木运算符 - v-bind:class="[isActive ? activeClass : '', errorClass]"
    - 数组语法包含对象 - v-bind:class="[{active: isActive}, errorClass]"
    - 用在组建上 - 这些类将被添加到该组件的根元素上面
    
8. 条件渲染  v-if    v-else-if  v-else    v-show <br>
    **_注意事项：_**
    1. v-if vs v-show
    v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
    v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
    相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
    一般来说，**_v-if 有更高的切换开销_**，而 **_v-show 有更高的初始渲染开销_**。
    因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
    
    2. `v-if 与 v-for 一起使用, v-for 具有比 v-if 更高的优先级。`
    
9. 列表渲染
    1. 把一个数组对应一个元素
    2. 把一个对象使用value 或是 key进行循环
    3. 在使用v-for的时候 可以使用关键字 in  或是  of  作为分隔符
    4. 在使用对象循环的时候可以带value key index `v-for="(value, key, index) in objects"`
    5. 在遍历对象时，是按 Object.keys() 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下是一致的。
    
10. 数组更新检测
    Vue包含一组观察数组的变异方法， **_所以它们也将会触发视图更新_**
    ```vue
        push()
        pop()
        shift()
        unshift()
        splice()
        sort()
        reverse()
    ```
    _**不会导致视图更新的方法**_
    ```vue
        concat()
        filter()
        slice()

    ```
    注意事项：
    ```vue
        由于 JavaScript 的限制，Vue 不能检测以下变动的数组：
        
        当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
        当你修改数组的长度时，例如：vm.items.length = newLength
        举个例子：
        
        var vm = new Vue({
          data: {
            items: ['a', 'b', 'c']
          }
        })
        vm.items[1] = 'x' // 不是响应性的
        vm.items.length = 2 // 不是响应性的
        为了解决第一类问题，以下两种方式都可以实现和 vm.items[indexOfItem] = newValue 相同的效果，同时也将触发状态更新：
        
        // Vue.set
        Vue.set(vm.items, indexOfItem, newValue)
        // Array.prototype.splice
        vm.items.splice(indexOfItem, 1, newValue)
        你也可以使用 vm.$set 实例方法，该方法是全局方法 Vue.set 的一个别名：
        
        vm.$set(vm.items, indexOfItem, newValue)
        为了解决第二类问题，你可以使用 splice：
        
        vm.items.splice(newLength)
    ```
    
11. 对象检查更新事项
    ```vue
        还是由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除：
        
        var vm = new Vue({
          data: {
            a: 1
          }
        })
        // `vm.a` 现在是响应式的
        
        vm.b = 2
        // `vm.b` 不是响应式的
        对于已经创建的实例，Vue 不能动态添加根级别的响应式属性。但是，可以使用 Vue.set(object, key, value) 方法向嵌套对象添加响应式属性。例如，对于：
        
        var vm = new Vue({
          data: {
            userProfile: {
              name: 'Anika'
            }
          }
        })
        你可以添加一个新的 age 属性到嵌套的 userProfile 对象：
        
        Vue.set(vm.userProfile, 'age', 27)
        你还可以使用 vm.$set 实例方法，它只是全局 Vue.set 的别名：
        
        vm.$set(vm.userProfile, 'age', 27)
    ```

12. 2.2.0+ 的版本里，当在组件中使用 v-for 时，key 现在是必须的。
    



