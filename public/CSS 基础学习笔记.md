1. 样式层叠规则 （所有的样式会根据下面的规则层叠于一个新的虚拟样式表中，其中优先级依次增强）
2. 浏览器缺省设置
3. 外部样式表
4. 内部样式表（位于 标签内部）
5. 内联样式（在 HTML 元素内部）
6. 当使用 RGB 百分比时，即使当值为 0 时也要写百分比符号

```
p {color: rgb(255,0,0);}
p {color: rgb(100%,0%,0%);}
```

- 如果属性值为多个单词的时候需要使用引号

  ```
  p {font-family: "sans serif"}
  ```

- [选择器分组](http://www.w3school.com.cn/css/css_syntax_pro.asp)

- [派生选择器](http://www.w3school.com.cn/css/css_syntax_descendant_selector.asp)

  ```
  li strong {
  font-style: italic;
  font-weight: normal;
  }
  ```

- [后代选择器](http://www.w3school.com.cn/css/css_selector_descendant.asp)

- 后代选择器有一个容易被忽视的点，选中的后代元素，不论是多深都会被选中，添加的效果都会实现。ul em { color: red } 这样当前代码里面所有的em元素都会是设置为红色字体

  ```
  <ul>
  <li>List item 1
   <ol>
     <li>List item 1-1</li>
     <li>List item 1-2</li>
     <li>List item 1-3
       <ol>
         <li>List item 1-3-1</li>
         <li>List item <em>1-3-2</em></li>
         <li>List item 1-3-3</li>
       </ol>
     </li>
     <li>List item 1-4</li>
   </ol>
  </li>
  <li>List item 2</li>
  <li>List item 3</li>
  </ul>
  ```

- [子选择器](http://www.w3school.com.cn/css/css_selector_child.asp) 语法解释: 子选择器使用了大于号（子结合符）。

```
h1 > strong {color:red;}
```

1. [相邻元素选择器/兄弟选择器](http://www.w3school.com.cn/css/css_selector_adjacent_sibling.asp) 语法解释: 相邻兄弟选择器使用了加号（+），即相邻兄弟结合符（Adjacent sibling combinator）。 注意事项：

  <font color="red">请记住，用一个结合符只能选择两个相邻兄弟中的第二个元素。请看下面的选择器：</font>

  ```
  li + li {font-weight:bold;}
  ```

  <font color="red">上面这个选择器只会把列表中的第二个和第三个列表项变为粗体。第一个列表项不受影响。</font>

2. [id选择器](http://www.w3school.com.cn/css/css_syntax_id_selector.asp)

3. id 属性只能在每个 HTML 文档中出现一次

4. 不可以在内联元素中嵌入块级元素
5. ID选择器和类选择器的区别：
6. 只能在文档中使用一次与类不同，在一个 HTML 文档中，ID 选择器会使用一次，而且仅一次。
7. 不能使用 ID 词列表, 不同于类选择器，ID 选择器不能结合使用，因为 ID 属性不允许有以空格分隔的词列表。
8. ID 能包含更多含义, 并且id选择器是区分大小写的。

9. [类选择器](http://www.w3school.com.cn/css/css_syntax_class_selector.asp)

10. 类名的第一个字符不能使用数字，在火狐和IE里面无法识别。

11. 多个类选择器之前不能出现空格在使用的时候。（ .important.warning 这样才是对的 ）
12. 类名选择器的匹配规则是 包含于规则， 即：一个元素的类名包含选择时选中的类名数，则该元素能被选中。<br>
  ```

.important.urgent {background:silver;} 这里只能选中第一个p元素。后面的不能被选中。

```

11\. [属性选择器](http://www.w3school.com.cn/css/css_selector_attribute.asp)
12\. [如何插入样式表](http://www.w3school.com.cn/css/css_howto.asp) <font color=red>他们的优先级依次增高</font>
+ 外部样式表: 当样式需要应用于很多页面时，外部样式表将是理想的选择
```

<link rel="stylesheet" type="text/css" href="mystyle.css">

```
+ 内部样式表: 当单个文档需要特殊的样式时，就应该使用内部样式表。
```

<style type="text/css">
  hr {color: sienna;}
  p {margin-left: 20px;}
  body {background-image: url(&quot;images/back40.gif&quot;);}
</style>

```
+ 内联样式表: 由于要将表现和内容混杂在一起，内联样式会损失掉样式表的许多优势。
```
This is a paragraph
```

1. [CSS 背景](http://www.w3school.com.cn/css/css_background.asp)
2. 背景色 backgroud-color
3. 背景图像 background-image
4. 背景重复 background-repeat
5. 背景定位 background-position (关键字 百分数值 长度值)
6. 背景图像是否固定或者随着页面的其余部分滚动 background-attachment

7. [CSS 文本 - 需要实战练习](http://www.w3school.com.cn/css/css_text.asp)

+ 缩进文本 [text-indent](http://www.w3school.com.cn/cssref/pr_text_text-indent.asp)

+ 水平对齐 [text-align](http://www.w3school.com.cn/cssref/pr_text_text-align.asp)
+ 两端对齐 [justify]()
+ 字间距 [word-spacing](http://www.w3school.com.cn/cssref/pr_text_word-spacing.asp)
+ 字母间距 [letter-speacing](http://www.w3school.com.cn/cssref/pr_text_letter-spacing.asp)
+ 字符转换 [text-transform](http://www.w3school.com.cn/cssref/pr_text_text-transform.asp) 对应有四种值： 1.none 2.uppercase 3.lowercase 4.capitalize
+ 文本装饰 [text-decoration](http://www.w3school.com.cn/cssref/pr_text_text-decoration.asp)对应五种值： 1.none 2.underline 3\. overline 4.line-through 5.blink

  <font color="red">这里需要注意文本装饰可以跟多个参数, 横线添添加位置， 横线形状，颜色 如： text-decoration: overline wavy red; 表示文本上面添加红色波浪线, none 值会关闭原本应用到一个元素上的所有装饰。比如一个a标签的下划线链接将会被清除， text-decoration 值会替换而不是累积起来。</font>
  + 处理空白 [white-space](http://www.w3school.com.cn/cssref/pr_text_white-space.asp)
  每个参数使用情况说明

        |       值   |    空白符  |  换行符 | 自动换行 |
        |:---------:|:----------:|:------:|:-------:|
        | pre-line   | 合并       | 保留   |允许      |
        | normal     | 合并       | 忽略   |允许      |
        | nowrap     | 合并       | 忽略   |不允许    |
        | pre        | 保留       | 忽略   |不允许    |
        | pre-wrap   | 保留       | 保留   |允许      |

+ 文本方向 [direction](http://www.w3school.com.cn/cssref/pr_text_direction.asp) 默认值有两个 ltr（从左到右）  rtl（从右到左）
##### CSS 文本属性总结
color	设置文本颜色<br>
direction	设置文本方向。<br>
line-height	设置行高。<br>
letter-spacing	设置字符间距。<br>
text-align	对齐元素中的文本。<br>
text-decoration	向文本添加修饰。<br>
text-indent	缩进元素中文本的首行。<br>
text-shadow	设置文本阴影。CSS2 包含该属性，但是 CSS2.1 没有保留该属性。<br>
text-transform	控制元素中的字母。<br>
unicode-bidi	设置文本方向。<br>
white-space	设置元素中空白的处理方式。<br>
word-spacing	设置字间距。<br>

8. [CSS 链接](http://www.w3school.com.cn/css/css_link.asp)
<br>
注意事项：
    + 为了使定义生效，a:hover 必须位于 a:link 和 a:visited 之后！！
    + 为了使定义生效，a:active 必须位于 a:hover 之后！！
    <br>
    ```
    <style>
    a:link {color:#FF0000;}    /* 未被访问的链接 */
    a:visited {color:#00FF00;} /* 已被访问的链接 */
    a:hover {color:#FF00FF;}   /* 鼠标指针移动到链接上 */
    a:active {color:#0000FF;}  /* 正在被点击的链接 */
    </style>
    ```
创建高级连接框：
```
<!DOCTYPE html>

<style>
a:link,a:visited
{
display:block;
font-weight:bold;
font-size:14px;
font-family:Verdana, Arial, Helvetica, sans-serif;
color:#FFFFFF;
background-color:#98bf21;
width:120px;
text-align:center;
padding:4px;
text-decoration:none;
}

a:hover,a:active
{
background-color:#7A991A;
}
</style>

 [W3School](/index.html)

```

9. [CSS 列表](http://www.w3school.com.cn/css/css_list.asp) CSS 列表属性允许你放置、改变列表项标志，或者将图像作为列表项标志. <font color="red">ul无序列表， ol有序列表，在有序列表中根据type属性设置序号</font>
+ 列表类型，使用属性： [list-style-type](http://www.w3school.com.cn/cssref/pr_list-style-type.asp)进行设置。所属值：（disc, circle, square, none）
+ 列表图像，使用属性： [list-style-image](http://www.w3school.com.cn/cssref/pr_list-style-image.asp)进行设置。
+ 列表标志位置，使用属性：[list-style-position](http://www.w3school.com.cn/cssref/pr_list-style-position.asp)进行设置。所属值：（inside, outside, none）

<font color="red">简写列表样式, list-style 的值可以按任何顺序列出，而且这些值都可以忽略。只要提供了一个值，其它的就会填入其默认值。
</font>
```
li {list-style : url(example.gif) square inside}
```
+ [所有列表样式类型](http://www.w3school.com.cn/tiy/t.asp?f=csse_list-style-type_all)

10. [CSS 表格](http://www.w3school.com.cn/css/css_table.asp) 表格属性可以帮助您极大地改善表格的外观。

11. [CSS 轮廓 outline](http://www.w3school.com.cn/css/css_outline.asp)
<br>相关属性有：
[轮廓颜色](http://www.w3school.com.cn/cssref/pr_outline-color.asp)
[轮廓宽度](http://www.w3school.com.cn/cssref/pr_outline-width.asp)
[轮廓样式](http://www.w3school.com.cn/cssref/pr_outline-style.asp)

12. [CSS 框模型概述](http://www.w3school.com.cn/css/css_boxmodel.asp)
<br>
[CSS 内边距padding](http://www.w3school.com.cn/css/css_padding.asp) 属性值：padding-top  padding-left  padding-bottom  padding-right
<br>注意事项： <font color="red">如果一个段落的父元素是 div 元素，那么它的内边距要根据 div 的 <font color="yellow">width</font> 计算, 上下内边距与左右内边距一致；即上下内边距的百分数会相对于父元素 宽度 设置，而不是相对于高度。</font>
<br>[CSS 边框 border](http://www.w3school.com.cn/css/css_border.asp)
<br>
CSS 边框属性：
border	简写属性，用于把针对四个边的属性设置在一个声明。<br>
border-style	用于设置元素所有边框的样式，或者单独地为各边设置边框样式。<br>
border-width	简写属性，用于为元素的所有边框设置宽度，或者单独地为各边边框设置宽度。<br>
border-color	简写属性，设置元素的所有边框中可见部分的颜色，或为 4 个边分别设置颜色。<br>
border-bottom	简写属性，用于把下边框的所有属性设置到一个声明中。<br>
border-bottom-color	设置元素的下边框的颜色。<br>
border-bottom-style	设置元素的下边框的样式。<br>
border-bottom-width	设置元素的下边框的宽度。<br>
border-left	简写属性，用于把左边框的所有属性设置到一个声明中。<br>
border-left-color	设置元素的左边框的颜色。<br>
border-left-style	设置元素的左边框的样式。<br>
border-left-width	设置元素的左边框的宽度。<br>
border-right	简写属性，用于把右边框的所有属性设置到一个声明中。<br>
border-right-color	设置元素的右边框的颜色。<br>
border-right-style	设置元素的右边框的样式。<br>
border-right-width	设置元素的右边框的宽度。<br>
border-top	简写属性，用于把上边框的所有属性设置到一个声明中。<br>
border-top-color	设置元素的上边框的颜色。<br>
border-top-style	设置元素的上边框的样式。<br>
border-top-width	设置元素的上边框的宽度。<br>
<br>
[CSS 外边距 margin](http://www.w3school.com.cn/css/css_margin.asp)<br>
注意事项：<font color="red">百分数是相对于父元素的 width 计算的.</font>
<br>
[CSS 外边距合并](http://www.w3school.com.cn/css/css_margin_collapsing.asp): 外边距合并指的是，当两个垂直外边距相遇时，它们将形成一个外边距。
合并后的外边距的高度等于两个发生合并的外边距的高度中的较大者。

13. [display属性](http://www.w3school.com.cn/cssref/pr_class_display.asp)
<br>几个重要的特点解释：<br>
+ display:block的特点：<br>
1、block元素会独占一行，多个block元素会各自新起一行。默认情况下，block元素宽度自动填满其父元素宽度。<br>
2、block元素可以设置width,height属性。块级元素即使设置了宽度,仍然是独占一行。<br>
3、block元素可以设置margin和padding属性。<br>

+ display:inline的特点：<br>
1、inline元素不会独占一行，多个相邻的行内元素会排列在同一行里，直到一行排列不下，才会新换一行，其宽度随元素的内容而变化。<br>
2、inline元素设置width,height属性无效。<br>
3、inline元素的margin和padding属性，水平方向的padding-left, padding-right, margin-left, margin-right都产生边距效果；但竖直方向的padding-top, padding-bottom, margin-top, margin-bottom不会产生边距效果。<br>

思考： 由于span是行级元素，所以不能设置其宽度和高度；如果将span设置成block，那么又会自动换行。怎么让多个span在同一行显示，而且能够固定宽度呢？这就需要用到display:inline-block了。<br>
```
<head>  
     <style>  
         span{  
            background-color:#43be60;  
            width:100px;  
            height:50px;  
            margin-top:20px;  
            margin-left:20px;  
            display:inline-block;  
         }  
     </style>  
</head>  

<body>  
    <div style="background-color:#ededed;width:400px;height:400px;">  
         <span>1</span>  
         <span>10</span>  
         <span>100</span>  
         <span>1000</span>  
    </div>  
</body>
```

14. [箭头提示工具](http://www.runoob.com/css/css-tooltip.html)<br>
注意： transparent该值是用于color属性设置背景透明的。设置箭头的时候使用到了 伪类 <font color="red">:after</font>，
可以在该伪类下进行CSS设置，实例代码：<br>
```
.tooltip .tooltiptext::after {
    content: " ";
    position: absolute;
    top: 100%; /* 提示工具底部 */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
}
```

15. [媒体类型](http://www.runoob.com/css/css-mediatypes.html)<br>
媒体类型	描述<br>
all	用于所有的媒体设备。<br>
aural	用于语音和音频合成器。<br>
braille	用于盲人用点字法触觉回馈设备。<br>
embossed	用于分页的盲人用点字法打印机。<br>
handheld	用于小的手持的设备。<br>
print	用于打印机。<br>
projection	用于方案展示，比如幻灯片。<br>
screen	用于电脑显示器。<br>
tty	用于使用固定密度字母栅格的媒体，比如电传打字机和终端。<br>
tv	用于电视机类型的设备。<br><br><br>
16. [所有CSS文本的属性](http://www.runoob.com/css/css-text.html)<br>
所有CSS文本属性。<br>
属性	描述<br>
color	设置文本颜色<br>
direction	设置文本方向。<br>
letter-spacing	设置字符间距<br>
line-height	设置行高<br>
text-align	对齐元素中的文本<br>
text-decoration	向文本添加修饰<br>
text-indent	缩进元素中文本的首行<br>
text-shadow	设置文本阴影<br>
text-transform	控制元素中的字母<br>
unicode-bidi	设置或返回文本是否被重写<br>
vertical-align	设置元素的垂直对齐<br>
white-space	设置元素中空白的处理方式<br>
word-spacing	设置字间距<br>

17. 按钮的禁用属性 - cursor: not-allowed <br><br>
