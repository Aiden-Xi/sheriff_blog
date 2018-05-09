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
