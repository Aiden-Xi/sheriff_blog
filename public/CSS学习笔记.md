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
