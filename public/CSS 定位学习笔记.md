1. [CSS 定位概述](http://www.w3school.com.cn/css/css_positioning.asp)
<br>
一切皆为框， 可以通过  display  属性设置生成的元素是否有框。
<br>注意事项：在类似div的块级元素中直接写文本内容，也会被当做段落处理。这种框成为 《无名块框》
2. [CSS 定位机制](http://www.w3school.com.cn/css/css_positioning.asp)
CSS 有三种基本的定位机制：普通流、浮动、绝对定位。
<br><br>
position属性值的含义：<br>
1、 static <br>
元素框正常生成。块级元素生成一个矩形框，作为文档流的一部分，行内元素则会创建一个或多个行框，置于其父元素中。
<br><br>
2、relative<br>
元素框偏移某个距离。元素仍保持其未定位前的形状，它原本所占的空间仍保留。<br><br>
3、absolute<br>
元素框从文档流完全删除，并相对于其包含块定位。包含块可能是文档中的另一个元素或者是初始包含块。元素原先在正常文档流中所占的空间会关闭，就好像元素原来不存在一样。元素定位后生成一个块级框，而不论原来它在正常流中生成何种类型的框。<br><br>
4、fixed<br>
元素框的表现类似于将 position 设置为 absolute，不过其包含块是视窗本身。<br><br>

|       值   |    描述 |
|:---------:|:----------:|
| absolute   | <font color="red">生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位.</font><br>元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。|
| fixed        | 生成绝对定位的元素，相对于浏览器窗口进行定位。<br>元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。       |
| relative     | 生成相对定位的元素，相对于其正常位置进行定位。<br>因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。|
| static     | 默认值。<br>没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。       |
| inherit   | 规定应该从父元素继承 position 属性的值。       |

3. [相对定位](http://www.w3school.com.cn/css/css_positioning_relative.asp)
<br>
设置为相对定位的元素框会偏移某个距离。元素仍然保持其未定位前的形状，它原本所占的空间仍保留。
4. [绝对定位](http://www.w3school.com.cn/css/css_positioning_absolute.asp)
<br>
设置为绝对定位的元素框从文档流完全删除，并相对于其包含块定位，包含块可能是文档中的另一个元素或者是初始包含块。元素原先在正常文档流中所占的空间会关闭，就好像该元素原来不存在一样。元素定位后生成一个块级框，而不论原来它在正常流中生成何种类型的框。(和相对定位的祖先元素定位)<br>
<font color="red">对于定位的主要问题是要记住每种定位的意义。所以，现在让我们复习一下学过的知识吧：相对定位是“相对于”元素在文档中的初始位置，而绝对定位是“相对于”最近的已定位祖先元素，如果不存在已定位的祖先元素，那么“相对于”最初的包含块。</font>
5. [浮动](http://www.w3school.com.cn/css/css_positioning_floating.asp)
<br>
浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。
由于浮动框不在文档的普通流中，所以文档的普通流中的块框表现得就像浮动框不存在一样。
6. [CSS clear属性](http://www.w3school.com.cn/cssref/pr_class_clear.asp)
<br>clear 属性规定元素的哪一侧不允许其他浮动元素。
