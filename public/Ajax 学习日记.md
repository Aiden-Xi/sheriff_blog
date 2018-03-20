1. load() 方法， load(url, data, callback), url参数必须传递，data是进行请求的时候需要携带的参数，callback是 load() 方法完成后所执行的函数名称。 将load()之后的数据，添加到调用者里面。一般都是load一个文件， 然后文件里面是html元素。 并且可以在url里面指定元素。 未被选中的元素不会添加到调用者的内容里面。

2. GET - 从指定的资源请求数据 <br/>  $.get(URL,callback); <br/>
必需的 URL 参数规定您希望请求的 URL。<br/>
可选的 callback 参数是请求成功后所执行的函数名。<br/>

3. POST - 向指定的资源提交要处理的数据 <br/>
$.post(URL,data,callback); <br/>
必需的 URL 参数规定您希望请求的 URL。<br/>
可选的 data 参数规定连同请求发送的数据。<br/>
可选的 callback 参数是请求成功后所执行的函数名。<br/>
下面的例子使用 $.post() 连同请求一起发送数据<br/>
