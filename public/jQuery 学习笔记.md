1. 文档就绪事件。 ready

    ```
    $(document).ready(function() {
      // 编写jQuery代码。。。
    });

    // 简洁写法：
    $(functiond() {
      // 编写jQuery代码。。。
    });

    ```

2. [jQuery选择器](http://www.runoob.com/jquery/jquery-selectors.html)
  - 选取所有元素 $('*')
  - 选取当前HTML元素  $(this)
  - 选取class为intro的<p>元素 $('p.intro')
  - 选取第一个p元素 $('p:first')
  - 选取第一个 ul 元素的第一个 li 元素  $('ul li:first')
  - 选取每个 ul 元素的第一个 li 元素 $('ul li:first-child')
  - 选取带有href属性的元素 $('[href]')
  - 选取所有target属性值等于'_blank'的 a 元素  $('a[target='_blank']')
  - 选取所有 target 属性值不等于 '_blank' 的 <a> 元素  $('a[target!='_blank']')
  - 选取所有 type='button' 的 <input> 元素 和 <button> 元素  $(':button')
  - 选取偶数位置的 tr 元素   $('tr:even')
  - 选取奇数位置的 tr 元素   $('tr:odd')

3. jQuery 事件

  ```
  鼠标事件	    键盘事件	      表单事件	   文档/窗口事件
  click	      keypress	    submit	    load
  dblclick	   keydown	    change	    resize
  mouseenter	 keyup	      focus	      scroll
  mouseleave	 blur	       unload
  ```

注意事项：
  - <font style='color: red; font-size: 18px'>dblclick 双击鼠标触发事件</font>
  - <font style='color: red; font-size: 18px'>mouseenter 鼠标滑进指定元素触发事件</font>
  - <font style='color: red; font-size: 18px'>mouseleave 鼠标滑出指定元素触发事件</font>
  - <font style='color: red; font-size: 18px'>mouseup 在元素上松开鼠标按钮时触发事件</font>
  - <font style='color: red; font-size: 18px'>hover 光标悬停在指定元素触发事件</font>
  - <font style='color: red; font-size: 18px'>focus 获取焦点触发事件</font>
  - <font style='color: red; font-size: 18px'>blur 失去焦点触发事件</font>

一. keypress,keydown,keyup的区别:

   1.keydown：在键盘上按下某键时发生,一直按着则会不断触发（opera浏览器除外）, 它返回的是键盘代码;
   2.keypress：在键盘上按下一个按键，并产生一个字符时发生, 返回ASCII码。注意: shift、alt、ctrl等键按下并不会产生字符，所以监听无效 ,换句话说, 只有按下能在屏幕上输出字符的按键时keypress事件才会触发。若一直按着某按键则会不断触发。
   3.keyup：用户松开某一个按键时触发, 与keydown相对, 返回键盘代码.
  二.两种常用用法举例

  ```
  案例1:获取按键代码或字符的ASCII码

  $(window).keydown( function(event){
     // 通过event.whitch可以拿到按键代码.  如果是keypress事件中,则拿到ASCII码.
  } );
  案例2:传递数据给事件处理函数

  语法:

  jQueryObject.keydown( [[ data ,]  handler ] );
   data: 通过event.data传递给事件处理函数的任意数据;
   handler: 指定的事件处理函数;
  举例:

  // 只允许按下的字母键生效, 65~90是所有小写字母的键盘代码范围.
  var validKeys = { start: 65, end: 90  };
  $("#keys").keydown( validKeys, function(event){
      var keys = event.data;  //拿到validKeys对象.
      return event.which >= keys.start && event.which <= keys.end;
  } );
```

3. jQuery 效果
  - 隐藏、显示： 对应的方法有， hide()隐藏, show()显示,  toggle()方法可以切换隐藏、显示
  - 淡入淡出： 对应四种方法， fadeIn(用于淡入已隐藏的元素)， fadeOut(用户淡出可见元素),  fadeToggle(可以再fadeIn 和 fadeOut 之间进行切换) fadeTo(准许渐变为给定的不透明度，介于 0--1之间)
  - 滑动：  对应的方法有： slideDown(滑下)  slideUp(滑上)  slideToggle(在两者之间切换)
  - 动画：   对应方法 - animate({params},speed,callback); 要记得首先把元素的 CSS position 属性设置为 relative、fixed 或 absolute！
  动画可以使用： 相对值， 预定义值， 动画队列。
  - 停止动画：对应方法 stop()， 可以携带两个布尔值的参数，第一个控制动画是否完全停止，第二个是判断动画停止之后是否需要执行完动作。
  - callback：
  - 链：通过 jQuery，可以把动作/方法链接在一起。Chaining 允许我们在一条语句中运行多个 jQuery 方法（在相同的元素上）。

  注意事项：
  1. 如果元素已淡出，则 fadeToggle() 会向元素添加淡入效果。
  2. 如果元素已淡入，则 fadeToggle() 会向元素添加淡出效果。
  3. 可以用 animate() 方法来操作所有 CSS 属性吗？
    是的，几乎可以！不过，需要记住一件重要的事情：当使用 animate() 时，必须使用 Camel 标记法书写所有的属性名，比如，必须使用 paddingLeft 而不是 padding-left，使用 marginRight 而不是 margin-right，等等。

4. jQuery获取内容和属性    
  - text() 获取文本内容
  - html() 获取所选元素的内容（包括HTML标记）
  - val() 设置或是返回变淡字段的值
  - attr('属性名称')  获取属性的值 使用方法跟以上三种不同，需要明确属性名称，后面跟设置的新属性值。
  并且准许设置多个属性值，里面跟obj对象，key是属性名称， value是新的属性值

  注意事项：他们都有回调函数  如果text html val 括号里面跟着参数， 说明是设置文本内容。。。。

5. 添加元素
  - append() 在被选元素的结尾插入内容 (被选元素内部， 可以同时添加多个元素)
  - prepend() 在被选元素的开头插入内容 (被选元素内部， 可以同时添加多个元素)
  - after() 在被选元素之后插入内容 （可以同时添加多个元素）
  - before() 在被选元素之前插入内容 （可以同时添加多个元素）

  <br>

  总结：
  - 都可以同时插入多个元素
  - append/prepend 是在选择元素内部嵌入。
  - after/before 是在元素外面追加。

6. 删除元素
  - remove() 删除被选元素（以及其子元素）
  - empty() 从被选的元素中删除子元素, 当前被选元素不会被删除。

7. 获取并设置CSS类
  - addClass() 向被选元素添加一个或多个类
  - removeClass() 从被选元素删除一个或多个类
  - toggleClass() 对被选元素进行 添加 / 删除 类的切换
  - css() 设置或返回样式的属性

8. 尺寸
  - width()  内容宽高
  - height()  方法设置或返回元素的宽度（不包括内边距、边框或外边距）
  - innerWidth()  包括padding部分不包括边框的宽高
  - innerHeight() 方法返回元素的高度（包括内边距）。
  - outerWidth() outerWidth(true) 带参数是包括margin部分，如果不带参数就是指包含边框宽高， margin部分不包含
  - outerHeight() outerHeight(true)

  9. 遍历
    - 向上遍历DOM树，
    parent() 方法返回被选元素的直接父元素。该方法只会向上一级对 DOM 树进行遍历.
    parents(), 方法返回被选元素的所有祖先元素，它一路向上直到文档的根元素.
    parentsUntil() 方法返回介于两个给定元素之间的所有祖先元素

    - 向下遍历DOM树
    children() 方法返回被选元素的所有直接子元素。
    find() 方法返回被选元素的后代元素，一路向下直到最后一个后代。

10. 同胞（siblings）
    - siblings()  方法返回被选元素的所有同胞元素.添加参数，可以进行过滤。
    - next()  方法返回被选元素的下一个同胞元素。该方法只返回一个元素。
    - nextAll() 方法返回被选元素的所有跟随的同胞元素, 可以添加参数过滤筛选。
    - nextUntil() 方法返回介于两个给定参数之间的所有跟随的同胞元素。

    方法的工作方式与上面的方法类似，只不过方向相反而已：它们返回的是前面的同胞元素（在 DOM 树中沿着同胞之前元素遍历，而不是之后元素遍历）。
    - prev()
    - prevAll()
    - prevUntil()

11. 过滤
    - first() 方法返回被选元素的首个元素。 可以添加参数，过滤。
    - last() 方法返回被选元素的最后一个元素。 可以添加参数，过滤。
    - eq() 方法返回被选元素中带有指定索引号的元素。索引号是从 0 开始的。
    - filter() 方法允许您规定一个标准。不匹配这个标准的元素会被从集合中删除，匹配的元素会被返回。
    - not() 方法返回不匹配标准的所有元素。
    
12. 选择器
    - :first-child	$("p:first-child")	属于其父元素的第一个子元素的所有 p 元素
    - :first-of-type	$("p:first-of-type")	属于其父元素的第一个 p 元素的所有 p 元素
    - :last-child	$("p:last-child")	属于其父元素的最后一个子元素的所有 p 元素
    - :last-of-type	$("p:last-of-type")	属于其父元素的最后一个 p 元素的所有 p 元素
    - :nth-child(n)	$("p:nth-child(2)")	属于其父元素的第二个子元素的所有 p 元素
    - :nth-last-child(n)	$("p:nth-last-child(2)")	属于其父元素的第二个子元素的所有 p 元素，从最后一个子元素开始计数
    - :nth-of-type(n)	$("p:nth-of-type(2)")	属于其父元素的第二个 p 元素的所有 p 元素
    - :nth-last-of-type(n)	$("p:nth-last-of-type(2)")	属于其父元素的第二个 p 元素的所有 p 元素，从最后一个子元素开始计数
    - :only-child	$("p:only-child")	属于其父元素的唯一子元素的所有 p 元素
    - :only-of-type	$("p:only-of-type")	属于其父元素的特定类型的唯一子元素的所有 p 元素
    
    ```
        1.基本选择器
        $("#id")            //ID选择器
        $("div")            //元素选择器
        $(".classname")     //类选择器
        $(".classname,.classname1,#id1")     //组合选择器
        
        2.层次选择器
        $("#id>.classname ")    //子元素选择器
        $("#id .classname ")    //后代元素选择器
        $("#id + .classname ")    //紧邻下一个元素选择器
        $("#id ~ .classname ")    //兄弟元素选择器
        
        3.过滤选择器(重点)
        $("li:first")    //第一个li
        $("li:last")     //最后一个li
        $("li:even")     //挑选下标为偶数的li
        $("li:odd")      //挑选下标为奇数的li
        $("li:eq(4)")    //下标等于4的li
        $("li:gt(2)")    //下标大于2的li
        $("li:lt(2)")    //下标小于2的li
        $("li:not(#runoob)") //挑选除 id="runoob" 以外的所有li
        
        3.2内容过滤选择器
        $("div:contains('Runob')")    // 包含 Runob文本的元素
        $("td:empty")                 //不包含子元素或者文本的空元素
        $("div:has(selector)")        //含有选择器所匹配的元素
        $("td:parent")                //含有子元素或者文本的元素
        
        3.3可见性过滤选择器
        $("li:hidden")       //匹配所有不可见元素，或type为hidden的元素
        $("li:visible")      //匹配所有可见元素
        
        3.4属性过滤选择器
        $("div[id]")        //所有含有 id 属性的 div 元素
        $("div[id='123']")        // id属性值为123的div 元素
        $("div[id!='123']")        // id属性值不等于123的div 元素
        $("div[id^='qq']")        // id属性值以qq开头的div 元素
        $("div[id$='zz']")        // id属性值以zz结尾的div 元素
        $("div[id*='bb']")        // id属性值包含bb的div 元素
        $("input[id][name$='man']") //多属性选过滤，同时满足两个属性的条件的元素
        
        3.5状态过滤选择器
        $("input:enabled")    // 匹配可用的 input
        $("input:disabled")   // 匹配不可用的 input
        $("input:checked")    // 匹配选中的 input
        $("option:selected")  // 匹配选中的 option
        
        4.表单选择器
        $(":input")      //匹配所有 input, textarea, select 和 button 元素
        $(":text")       //所有的单行文本框，$(":text") 等价于$("[type=text]")，推荐使用$("input:text")效率更高，下同
        $(":password")   //所有密码框
        $(":radio")      //所有单选按钮
        $(":checkbox")   //所有复选框
        $(":submit")     //所有提交按钮
        $(":reset")      //所有重置按钮
        $(":button")     //所有button按钮
        $(":file")       //所有文件域
    ```
    
13. jQuery效果方法
    - animate() 对被选元素使用自定义动画
    - clearQueue() 对被选元素移除所有未执行排队函数（任未执行）
    - delay() 对被选元素所有派对函数设置延迟
    - dequeue()  移除下一个执行函数，但是函数继续执行
    - fadeIn() 逐渐改变被选元素的不透明度，由隐藏到可见
    - fadeOut() 逐渐改变被选元素的不透明度，由可见到隐藏
    - fadeTo() 把被选元素透明度逐渐改变为被选透明度
    - fadeToggle() 在fadeIn 和 fadeOut之间进行切换
    - finish() 对被选元素停止、移除并且完成所有排队动画
    - hide() 隐藏被选元素
    - queue() 显示被选元素的队列
    - show() 显示被选元素
    - slideDown() 通过被选元素的高度来控制元素滑动
    - slideToggle() 在slideDown  和 slideUp之间进行切换
    - stop() 停止被选元素上，当前正在运行的动画
    - toggle() 在hide 和 show 之间进行切换
       
14. [HTML / CSS 方法](http://www.runoob.com/jquery/jquery-ref-html.html)
   
15. [jQuery遍历方法](http://www.runoob.com/jquery/jquery-ref-traversing.html)
        
    
    
        
        
        
        
    
    
