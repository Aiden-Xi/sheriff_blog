1. 类选择器 - 也称为元素选择器
2. 选择器分组
3. 声明分组
4. 通配符选择器
5. 多类选择器， 注意：<font color="red">多类选择器在使用的时候中间是不能出现空格的, 类名的顺序不限</font><br>
```
.important {font-weight:bold;}
.warning {font-style:italic;}
.important.warning {background:silver;}   // 这里是直接将两各类名连写。不能有空格
```
6. ID选择器 [ID选择器和类选择器的区别(http://www.w3school.com.cn/css/css_selector_id.asp)<br>
区别 1：只能在文档中使用一次
与类不同，在一个 HTML 文档中，ID 选择器会使用一次，而且仅一次。

区别 2：不能使用 ID 词列表
不同于类选择器，ID 选择器不能结合使用，因为 ID 属性不允许有以空格分隔的词列表。

区别 3：ID 能包含更多含义
类似于类，可以独立于元素来选择 ID。有些情况下，您知道文档中会出现某个特定 ID 值，但是并不知道它会出现在哪个元素上，所以您想声明独立的 ID 选择器。
<font color="red">在HTML和XHTML文档中类选择器和ID选择器是区分大小写的</font>

7. 属性选择器 - 多个属性选择一起使用，需要将多个属性连接在一起<br>
```
a[href][title] {color:red;}
```
8. 后代选择器 - 注意事项：有关后代选择器有一个易被忽视的方面，即两个元素之间的层次间隔可以是无限的。
9. 相邻兄弟选择器
10. 伪类
11. 伪元素
