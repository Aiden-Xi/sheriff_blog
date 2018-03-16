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
