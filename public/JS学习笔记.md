1. 变量提升(hoisting)： 函数声明和变量声明总是会被解释器悄悄的“提升”到方法体的顶部。
注意事项： 初始化并不会提升。
实例中 1 和 2 输出的结果是一样的，但是实例 3 中输出的结果y是 undefined

```
实例1：
var x = 5; // 初始化 x
var y = 7; // 初始化 y

elem = document.getElementById("demo"); // 查找元素
elem.innerHTML = x + " " + y;           // 显示 x 和 y

实例2：
var x = 5; // 初始化 x
y = 7;

elem = document.getElementById("demo"); // 查找元素
elem.innerHTML = x + " " + y;           // 显示 x 和 y
var y;

实例3：
var x = 5; // 初始化 x

elem = document.getElementById("demo"); // 查找元素
elem.innerHTML = x + " " + y;           // 显示 x 和 y

var y = 7; // 初始化 y
```

2. [严格模式](http://www.runoob.com/js/js-strict.html) use strict

```
实例： 禁止this关键字指向全局对象
// 返回false，因为"this"指向全局对象，"!this"就是false
function f() {
  return !this;
}

// 返回true，因为严格模式下，this的值为undefined，所以"!this"为true。
function f(){
    "use strict";
    return !this;
}

// 使用构造函数时，如果忘了加new，this不再指向全局对象，而是报错。
function f(){
    "use strict";
    this.a = 1;
};
f();      // 报错，this未定义
new f();  // 可以正常执行，返回结果 {a: 1}

```

3. 加法和链接注意事项，因为在js里面 加法是两个数字相加， 链接是两个字符串链接。<br>
但是在js里面 都是通过  ‘+’ 运算符。

4. JS 语法解析是判断一行代码结束的时候，当前一行代码是否是完整的语句。如果是，则会默认添加分号表示当前行代码到此结束。

5. 函数可以自调用，通过添加括号，来说明他是一个函数表达式。并且实现自调用。

```
(function () {
    var x = "Hello!!";      // 我将调用自己
})();

(function () {
    document.getElementById("demo").innerHTML = "Hello! 我是自己调用的";
})();
```

6. call() 和 apply()使用注意事项：

```
两个方法都使用了对象本身作为第一个参数。
两者的区别在于第二个参数： apply传入的是一个参数数组，也就是将多个参数组合成为一个数组传入，而call则作为call的参数传入（从第二个参数开始）。

在 JavaScript 严格模式(strict mode)下, 在调用函数时第一个参数会成为 this 的值， 即使该参数不是一个对象。

在 JavaScript 非严格模式(non-strict mode)下, 如果第一个参数的值是 null 或 undefined, 它将使用全局对象替代。
```

7. 数字方法
  - toFixed(x)  保留x位小数  9.182.toFixed(2) = '9.18'
  - toPrecision(x) 保留x位有效数字  9.182.toPrecision(2) = '9.2'
