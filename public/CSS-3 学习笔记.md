1. CSS3 边框<br>
  边框有如下相关的属性： border-radius(圆角), box-shadow(盒阴影), border-image(边界图片).

2. CSS 3 圆角<br>

3. CSS 3 背景<br>
  背景相关属性：

  - background-image
  - background-size
  - background-origin
  - background-clip

4. CSS 3 渐变<br>
  渐变相关的属性有两个：

  - linear-gradients: 线性渐变（向下/向上/向左/向右/对角方向）
  - radial-gradients: 径向渐变（由中心d定义）

5. CSS 3 文本效果<br>
  文本效果相关属性值：

  - text-shadow
  - box-shadow
  - text-overflow
  - word-wrap
  - word-break

6. CSS 3 字体<br>
  字体所对应的基本属性：@font-face

  - font-family
  - src
  - font-stretch
  - font-style
  - font-weight
  - unicode-range

    ```
    <style>
       @font-face
       {
           font-family: myFirstFont;
           src: url(sansation_light.woff);
       }

       div
       {
           font-family:myFirstFont;
       }
    </style>
    ```

7. CSS 3 2D 3D转换 - transform:<br>
  转换的基本属性：

  - translate - 移动
  - rotate - 旋转
  - scale - 缩放
  - skew - 倾斜
  - matrix - 将2D对应的其他方法合并为一个方法，该方法可以接收6个参数

8. CSS 3 过度 - transition:<br>
  实现这点，必须规定两项内容：

  - 指定要添加效果的CSS属性
  - 指定效果的持续时间。

9. CSS 3 动画 - @keyframes <br>
    动画属性：  

属性	描述
@keyframes	                 规定动画。<br>
animation               	 所有动画属性的简写属性，除了 animation-play-state 属性。<br>
animation-name	             规定 @keyframes 动画的名称。<br>
animation-duration	         规定动画完成一个周期所花费的秒或毫秒。默认是 0。<br>
animation-timing-function    规定动画的速度曲线。默认是 "ease"。<br>
animation-delay	             规定动画何时开始。默认是 0。<br>
animation-iteration-count	 规定动画被播放的次数。默认是 1。<br>
animation-direction	         规定动画是否在下一周期逆向地播放。默认是 "normal"。<br>
animation-play-state	     规定动画是否正在运行或暂停。默认是 "running"。<br>

10. CSS 3 多列<br>
    多列属性：<br>
    - column-count - 多列数量
    - column-gap - 多列中间列之间的间距
    - column-width - 主要用来定义多列中每列的宽度
    - column-rule - 将多个颜色汇总 （包括以下三种样式）
    - column-rule-style - 列分割样式
    - column-rule-width - 列分割宽度
    - column-rule-colir - 列分割颜色

11. CSS 3 用户界面<br>
    CSS 3 新增用户界面属性：
    - resize - 指定一个元素是否应该由用户去调整大小。
    - box-sizing - 允许您以确切的方式定义适应某个区域的具体内容。
    - outline-offset - 对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓。
