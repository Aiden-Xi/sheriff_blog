1. Transitions是下面几个属性的缩写
    - `transition-property` 指定过渡的属性值，比如`transition-property:opacity`就是只指定`opacity`属性参与这个过渡。
    -  `transition-duration` 指定这个过渡的持续时间
    - `transition-delay` 延迟过渡时间
    - `transition-timing-function` 指定过渡动画缓动类型，有 ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier()
      其中，linear线性过度，ease-in由慢到快，ease-out由快到慢，ease-in-out由慢到快在到慢。
      ```vue
      神解释：
      transition中的transition-timing-function属性让人心存芥蒂，
      其一堆ease相关的值（linear | ease-in | ease-out | ease-in-out | cubic-bezier），
      不太容易让人理解与记住。尤其其中cubic-bezier就是指贝塞尔曲线，与复杂的数学扯上的关系，不禁勾起了高中时数学的梦魇。
      其实呢，理一理，也还好。首先cubic-bezier这个基本上就不用鸟了，90%+的情况都用不到这个东西，所以，难得清闲，直接pass掉。
      linear很好记，线性嘛。至于ease-in | ease-out | ease-in-out，就是指缓动效果啦，说白了就是指开始时候慢慢动呢还是结束的时候慢慢动。
      那么in和out那个先慢慢动呢？啊，我们可以联想记忆，很好记的。我们都知道OOXX吧，ease-in中的in就表示进入，进入的时候显然一开始都是慢的，
      等瞄准就绪后才能快速冲刺进入，于是ease-in表示先慢后快；ease-out其out表示出来，出来肯定是先快后慢的，因为出来时临近洞口速度肯定要降下来，
      免得跑出来乱了节奏，于是ease-out表示先快后慢；最后，很好理解的，ease-in-out表示一进一出，也就是先慢后快再慢。
      ```
      
2. transform - 指变换 - 拉伸，压缩，旋转，偏移
