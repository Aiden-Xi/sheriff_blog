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
        
            如果需要添加多个属性，可以使用Lodash的_.extend方法 或是 Object.assign()
            但是需要注意，不能这么使用
            Object.assign(vm.userPfofile, {
                age: 27,
                favoriteColor: 'Vue Green'
            })   这样是不能使用响应式效果的。
            
            正确的使用方法应该是这样的：
            vm.userProfile = Object.assign({}, vm.userProfile, {
                age: 23,
                favoriteColor: 'Vue Green'
            })
        
        ```

12. 2.2.0+ 的版本里，当在组件中使用 v-for 时，key现在是必须的。

13. 事件处理
    - 监听事件 - v-on, 可以使用缩写的方法， @click, @keyup ......
    - 事件处理方法， 可以使用v-on绑定一个方法，在js里面调用
        ```vue
            <div id="example-2">
              <!-- `greet` 是在下面定义的方法名 -->
              <button v-on:click="greet">Greet</button>
            </div> 
        
            <script>
              var example2 = new Vue({
                     el: '#example-2',
                     data: {
                       name: 'Vue.js'
                     },
                     // 在 `methods` 对象中定义方法
                     methods: {
                       greet: function (event) {
                         // `this` 在方法里指向当前 Vue 实例
                         alert('Hello ' + this.name + '!')
                         // `event` 是原生 DOM 事件
                         if (event) {
                           alert(event.target.tagName)
                         }
                       }
                     }
                   })
                   
                   // 也可以用 JavaScript 直接调用方法
                   example2.greet() // => 'Hello Vue.js!'        
            </script>
        ```
    - 内联处理器中的方法 - v-on可以直接绑定方法并且在触发的时候调用
        ```vue
            <div id="example-3">
              <button v-on:click="say('hi')">Say hi</button>
              <button v-on:click="say('what')">Say what</button>
            </div>
            
            <script>    
                new Vue({
                  el: '#example-3',
                  methods: {
                    say: function (message) {
                      alert(message)
                    }
                  }
                })
            </script>
            
        ```
    
14. 事件修饰符 - 修饰符是由点开头的指令后缀来表示的
    - .stop
    - .prevent
    - .capture
    - .self
    - .once
        ```vue
            <!-- 阻止单击事件继续传播 -->
            <a v-on:click.stop="doThis"></a>
            
            <!-- 提交事件不再重载页面 -->
            <form v-on:submit.prevent="onSubmit"></form>
            
            <!-- 修饰符可以串联 -->
            <a v-on:click.stop.prevent="doThat"></a>
            
            <!-- 只有修饰符 -->
            <form v-on:submit.prevent></form>
            
            <!-- 添加事件监听器时使用事件捕获模式 -->
            <!-- 即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理 -->
            <div v-on:click.capture="doThis">...</div>
            
            <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
            <!-- 即事件不是从内部元素触发的 -->
            <div v-on:click.self="doThat">...</div>
            
        
            使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，
            用 v-on:click.prevent.self 会阻止所有的点击，
            而 v-on:click.self.prevent 只会阻止对元素自身的点击。
    
        ```
    
15. 按键修饰符 - Vue 允许为 v-on 在监听键盘事件时添加按键修饰符
    全部按键别名：
    - .enter
    - .tab
    - .delete(捕获 '删除' 和 "退格"键)
    - .esc
    - .space
    - .up
    - .down
    - .left
    - .right
    
    注意事项： 
    可以通过全局 ``` config.KeyCondes ``` 对象自定义按钮修饰符别名：
    ``` Vue.config.KeyCondes.f1 = 112 ```
    
    ```vue
        <!-- 只有在 `keyCode` 是 13 时调用 `vm.submit()` -->
        <input v-on:keyup.13="submit">
    
        记住所有的 keyCode 比较困难，所以 Vue 为最常用的按键提供了别名：
        
        <!-- 同上 -->
        <input v-on:keyup.enter="submit">
        
        <!-- 缩写语法 -->
        <input @keyup.enter="submit">

    ```
    
16. 系统修饰符 - 可以通过修饰符来实现仅在按下相应按键时才触发鼠标或是键盘事件的监听器
    - .ctrl
    - .alt
    - .shift
    - .meta
    ``` 在 Mac 系统键盘上，meta 对应 command 键 (⌘)。在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)。 ```
    - .exact - 修饰符允许你控制由精确的系统修饰符组合触发的事件。
    
17. 鼠标按钮修饰符 - 这些修饰符会限制处理函数仅响应特定的鼠标按钮。
    - .left
    - .right
    - .middle
    
18. 表单输入绑定 v-model
        ```vue
        v-model 会忽略所有表单元素的 value、checked、selected 特性的初始值而总是将 Vue 实例的数据作为数据来源。
        你应该通过 JavaScript 在组件的 data 选项中声明初始值。
        ```
    
    **_修饰符_**
    - .lazy - 在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。你可以添加 lazy 修饰符，从而转变为使用 change 事件进行同步
    - .number - 如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符
    - .trim - 如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符
    
19. 组件
    - 请注意，对于自定义标签的命名 Vue.js 不强制遵循 W3C 规则 (小写，并且包含一个短杠)，尽管这被认为是最佳实践。
        ```
           Vue.component('my-component', {
             // 选项
           })
           这里可以看出 自定义的组件名称使用小写字母， 并且使用短杆
        ```
    - 组件在注册之后，便可以作为自定义元素 <my-component></my-component> 在一个实例的模板中使用。注意确保在初始化根实例之前注册组件
        ```
            // 注册 - 先注册
            Vue.component('my-component', {
              template: '<div>A custom component!</div>'
            })
            
            // 创建根实例
            new Vue({
              el: '#example'
            })
        ```
    - 全局注册
    - 局部注册
    - DOM 模板解析注意事项<br>
    **`注意事项：`** <br>
        ```
        当使用 DOM 作为模板时 (例如，使用 el 选项来把 Vue 实例挂载到一个已有内容的元素上)，
        你会受到 HTML 本身的一些限制，因为 Vue 只有在浏览器解析、规范化模板之后才能获取其内容。
        尤其要注意，像 <ul>、<ol>、<table>、<select> 这样的元素里允许包含的元素有限制，
        而另一些像 <option> 这样的元素只能出现在某些特定元素的内部。
        
        
        应当注意，如果使用来自以下来源之一的字符串模板，则没有这些限制：
        1. <script type="text/x-template">
        2. JavaScript 内联模板字符串
        3. .vue 组件
        ```
    
20. 组件组合
    - 父子组件的关系可以总结为 prop 向下传递，事件向上传递。
    父组件通过 prop 给子组件下发数据，子组件通过事件给父组件发送消息。看看它们是怎么工作的
    - 使用 Prop 传递数据, 组件实例的作用域是孤立的。这意味着不能 (也不应该) 在子组件的模板内直接引用父组件的数据。
    父组件的数据需要通过 prop 才能下发到子组件中
    - [camelCase vs. kebab-case](https://cn.vuejs.org/v2/guide/components.html#camelCase-vs-kebab-case)  在使用模板的时候，千万需要注意这点。
        ```
            HTML 特性是不区分大小写的。所以，当使用的不是字符串模板时，camelCase (驼峰式命名) 的 prop 需要转换为相对应的 kebab-case (短横线分隔式命名)：
            
            Vue.component('child', {
              // 在 JavaScript 中使用 camelCase
              props: ['myMessage'],
              template: '<span>{{ myMessage }}</span>'
            })
            <!-- 在 HTML 中使用 kebab-case -->
            <child my-message="hello!"></child>
            如果你使用字符串模板，则没有这些限制。
        ```
    - 字面量语法 vs 动态语法
    - 单项数据流 
        ``` 
        解释为什么在子组件的data为什么一定要对应的是function：
        **注意在 JavaScript 中对象和数组是引用类型，指向同一个内存空间，如果 prop 是一个对象或数组，在子组件内部改变它会影响父组件的状态。**
        ```
    - props 验证
    - 非 Prop 特性

21. 自定义事件 - 子组件向父组件通信。
    - 使用 v-on 绑定自定义事件
    - 载荷 (payload) 
    - 给组件绑定原生事件， 可以使用修饰符 
        ``` 
        .native    <my-component v-on:click.native="doTheThing"></my-component>
         
         从 2.3.0 起我们重新引入了 .sync 修饰符，但是这次它只是作为一个编译时的语法糖存在。它会被扩展为一个自动更新父组件属性的 v-on 监听器。
         
         如下代码
         
         <comp :foo.sync="bar"></comp>
         会被扩展为：
         
         <comp :foo="bar" @update:foo="val => bar = val"></comp>
        ```
    
22. 自定义组件的 ```v-model```
    - 编译作用域 -> 父组件模板的内容在父组件作用域内编译；子组件模板的内容在子组件作用域内编译。
    - 单个插槽 -> 除非子组件模板包含至少一个 <slot> 插口，否则父组件的内容将会被丢弃。
    当子组件模板只有一个没有属性的插槽时，父组件传入的整个内容片段将插入到插槽所在的 DOM 位置，并替换掉插槽标签本身。
    - 具名插槽
    - 作用域插槽
    
23. 动态绑定组件 - 并且可以使用[keep-alive](https://cn.vuejs.org/v2/api/#keep-alive)将被替换的组件保存在内存中，避免再次渲染。
    - 注意，```<keep-alive>``` 是用在其一个直属的子组件被开关的情形。如果你在其中有 ```v-for``` 则不会工作。
    如果有上述的多个条件性的子元素，```<keep-alive>``` 要求同时只有一个子元素被渲染。

24. 杂项
    - 编写可复用组件
    - 子组件引用 -> $refs 只在组件渲染完成后才填充，并且它是非响应式的。它仅仅是一个直接操作子组件的应急方案——应当避免在模板或计算属性中使用 $refs。
    - 异步组件 -> Vue.js 只在组件需要渲染时触发工厂函数，并且把结果缓存起来，用于后面的再次渲染。
    - 高级异步组件 - 注意，当一个异步组件被作为 vue-router 的路由组件使用时，这些高级选项都是无效的，因为在路由切换前就会提前加载所需要的异步组件。
    另外，如果你要在路由组件中使用上述写法，需要使用 vue-router 2.4.0 以上的版本。
    - 组件明明约定   `PascalCase 是最通用的声明约定而 kebab-case 是最通用的使用约定。`
    **_注意事项_**： 如果组件未经 slot 元素传入内容，你甚至可以在组件名后使用 / 使其自闭合。
        ```vue
        // 在组件定义中
        components: {
          // 使用 kebab-case 注册
          'kebab-cased-component': { /* ... */ },
          // 使用 camelCase 注册
          'camelCasedComponent': { /* ... */ },
          // 使用 PascalCase 注册
          'PascalCasedComponent': { /* ... */ }
        }
    
        在 HTML 模板中，请使用 kebab-case：
        ```
    - 递归组件 - 组件在它的模板内可以递归地调用自己。不过，只有当它有 name 选项时才可以。 
递归调用可能会进入死循环，因此必须保证在最后有终止条件。
    - [组件间的循环引用](https://cn.vuejs.org/v2/guide/components.html#%E7%BB%84%E4%BB%B6%E9%97%B4%E7%9A%84%E5%BE%AA%E7%8E%AF%E5%BC%95%E7%94%A8) 
    - 内联模板
    - X-template -> 这在有很多大模板的演示应用或者特别小的应用中可能有用，其它场合应该避免使用，因为这将模板和组件的其它定义分离了
    - 对低开销的静态组件使用 v-once
    
25. 进入/离开&列表过渡
     - 单元素/组件过渡
         ```
            当插入或删除包含在 transition 组件中的元素时，Vue 将会做以下处理：
            1. 自动嗅探目标元素是否应用了 CSS 过渡或动画，如果是，在恰当的时机添加/删除 CSS 类名。
            
            2. 如果过渡组件提供了 JavaScript 钩子函数，这些钩子函数将在恰当的时机被调用。
            
            3. 如果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 操作 (插入/删除) 在下一帧中立即执行。(注意：此指浏览器逐帧动画机制，和 Vue 的 nextTick 概念不同)
    
         ```
     - 过渡的类名  
        ```vue
           1. v-enter：定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。
           
           2. v-enter-active：定义过渡的状态。在元素整个过渡过程中作用，在元素被插入时生效，在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。
           
           3. v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入一帧后生效 (与此同时 v-enter 被删除)，在 transition/animation 完成之后移除。
           
           4. v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。
           
           5. v-leave-active：定义过渡的状态。在元素整个过渡过程中作用，在离开过渡被触发后立即生效，在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。
           
           6. v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发一帧后生效 (与此同时 v-leave 被删除)，在 transition/animation 完成之后移除。
        ``` 
     - CSS 动画
     - 自定义过渡的类名
        ```vue
            enter-class
            enter-active-class
            enter-to-class (2.1.8+)
            leave-class
            leave-active-class
            leave-to-class (2.1.8+)
        ```
     - 同时使用过渡和动画
     - 显性的过渡持续时间 可以使用transition对应的duration属性定制
     - JavaScript 钩子 - 当只用 JavaScript 过渡的时候， 在 `enter` 和 `leave` 中，回调函数 done 是必须的 。否则，它们会被同步调用，过渡会立即完成。
     注意事项： **推荐对于仅使用 JavaScript 过渡的元素添加 v-bind:css="false"，Vue 会跳过 CSS 的检测。这也可以避免过渡过程中 CSS 的影响。**
     ```vue
        <transition
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:after-enter="afterEnter"
          v-on:enter-cancelled="enterCancelled"
        
          v-on:before-leave="beforeLeave"
          v-on:leave="leave"
          v-on:after-leave="afterLeave"
          v-on:leave-cancelled="leaveCancelled"
        >
          <!-- ... -->
        </transition>     
     ```
     - 初始渲染的过渡
     
     - 多个元素的过渡 - 当有相同标签名的元素切换时，需要通过 key 特性设置唯一的值来标记以让 Vue 区分它们，否则 Vue 为了效率只会替换相同标签内部的内容。
     即使在技术上没有必要，给在 <transition> 组件中的多个元素设置 key 是一个更好的实践。
     
     - 过渡模式
        ```vue
           in-out：新元素先进行过渡，完成之后当前元素过渡离开。
           out-in：当前元素先进行过渡，完成之后新元素过渡进入。
        ```
     - 多个组件过渡 - 多个组件的过渡简单很多 - 我们不需要使用 key 特性
     - 列表过渡 - `transition-group`
        1. 单个节点
        2. 同一时间渲染多个节点中的一个
     - 列表的排序过渡   
     - 可复用的过渡
     
        
    
    



