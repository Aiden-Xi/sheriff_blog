1. 需要特别注意的事项： 缩进格式一定要标准，因为缩进格式不对，会报错。
``` IndentationError: unindent does not match any outer indentation level ```

2. 反斜杠可以用来转义，使用r可以让反斜杠不发生转义。。 如 r"this is a line with \n" 则\n会显示，并不是换行

3. 模板和函数的导入
    ```
    在 python 用 import 或者 from...import 来导入相应的模块。
    
    将整个模块(somemodule)导入，格式为： import somemodule
    
    从某个模块中导入某个函数,格式为： from somemodule import somefunction
    
    从某个模块中导入多个函数,格式为： from somemodule import firstfunc, secondfunc, thirdfunc
    
    将某个模块中的全部函数导入，格式为： from somemodule import *
    ```

4. 可以使用 ``` __doc__获取方法的文档。比如： 获取max方法的文档注释说明   max.__doc__ ```

5. 标准数据类型： 
    - Number（数字）： Python3 支持 int、float、bool、complex（复数）。
    - String（字符串）
    - List（列表）
    - Sets （集合）
    - Tuple （元组）
    - Dictionary （字典）
    
    注意事项：
    - 不可变数据类型（4个）： Number、 String、Sets、Tuple
    - 可变数据类型（2个）：List、Dictionary
    
6. 可以使用type() 和 isinstance() 判断变量类型
    ```
    注意事项：
    注意：在 Python2 中是没有布尔型的，它用数字 0 表示 False，
    用 1 表示 True。到 Python3 中，把 True 和 False 定义成关键字了，
    但它们的值还是 1 和 0，它们可以和数字相加。
    
    isinstance 和 type 的区别在于：
    
    class A:
        pass
    
    class B(A):
        pass
    
    isinstance(A(), A)  # returns True
    type(A()) == A      # returns True
    isinstance(B(), A)    # returns True
    type(B()) == A        # returns False
    区别就是:
    
    type()不会认为子类是一种父类类型。
    isinstance()会认为子类是一种父类类型。

    ```
    
7. 字符串
    - 索引值以 0 为开始值，-1 为从末尾的开始位置。
    - 加号 (+) 是字符串的连接符， 星号 (*) 表示复制当前字符串，紧跟的数字为复制的次数。实例如下：
        ```
        str = 'Runoob'
         
        print (str)          # 输出字符串
        print (str[0:-1])    # 输出第一个到倒数第二个的所有字符
        print (str[0])       # 输出字符串第一个字符
        print (str[2:5])     # 输出从第三个开始到第五个的字符
        print (str[2:])      # 输出从第三个开始的后的所有字符
        print (str * 2)      # 输出字符串两次
        print (str + "TEST") # 连接字符串
        ```
    - 可以在字符串前面添加一个 r，表示原始字符串 ``` print(r'Rub\noob')  => Rub\noob ```
    - 与 C 字符串不同的是，Python 字符串不能被改变。向一个索引位置赋值，比如word[0] = 'm'会导致错误。
    ```
    注意：
    1、反斜杠可以用来转义，使用r可以让反斜杠不发生转义。
    2、字符串可以用+运算符连接在一起，用*运算符重复。
    3、Python中的字符串有两种索引方式，从左往右以0开始，从右往左以-1开始。
    4、Python中的字符串不能改变。
    ```    

8. 列表 （List）
    ```
    注意：
    
    1、List写在方括号之间，元素用逗号隔开。
    2、和字符串一样，list可以被索引和切片。
    3、List可以使用+操作符进行拼接。
    4、List中的元素是可以改变的。
    ```

9. Tuple（元组）
   元组（tuple）与列表类似，不同之处在于元组的元素不能修改。元组写在小括号 () 里，元素之间用逗号隔开。
   
   元组中的元素类型也可以不相同：
   ```
    注意：
    
    1、与字符串一样，元组的元素不能修改。
    2、元组也可以被索引和切片，方法一样。
    3、注意构造包含0或1个元素的元组的特殊语法规则。
    tup1 = ()    # 空元组
    tup2 = (20,) # 一个元素，（重要重要） 需要在元素后添加逗号
    4、元组也可以使用+操作符进行拼接。
    ```

10. Set（集合）

    集合（set）是一个无序不重复元素的序列。
    
    基本功能是进行成员关系测试和删除重复元素。
    
    可以使用大括号 { } 或者 set() 函数创建集合，注意：创建一个空集合必须用 set() 而不是 { }，因为 { } 是用来创建一个空字典。
    ```
    # set可以进行集合运算
    a = set('abracadabra')
    b = set('alacazam')
     
    print(a)
     
    print(a - b)     # a和b的差集
     
    print(a | b)     # a和b的并集
     
    print(a & b)     # a和b的交集
     
    print(a ^ b)     # a和b中不同时存在的元素
    ```
    
11. Dictionary（字典）
    字典（dictionary）是Python中另一个非常有用的内置数据类型。
    
    列表是有序的对象集合，字典是无序的对象集合。两者之间的区别在于：字典当中的元素是通过键来存取的，而不是通过偏移存取。
    
    字典是一种映射类型，字典用"{ }"标识，它是一个无序的键(key) : 值(value)对集合。
    
    键(key)必须使用不可变类型。
    
    在同一个字典中，键(key)必须是唯一的。