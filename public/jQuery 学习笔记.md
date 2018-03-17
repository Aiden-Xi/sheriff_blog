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
  - width()
