1. 让UI从URL中解耦出来 ---> 使用绝对路径可以实现（<font color=#DC143C>动态路由里面无法使用绝对路径</font>）
（<font color=#FF7F50>但是这样会带来一个问题：访问相对路径的URL会跳转到错误页面，可以使用提供的API：Redirect来处理这个问题</font>）
实例代码： {/* 跳转 /inbox/messages/:id 到 /messages/:id */}

  ```
  <Redirect from="messages/:id" to="/messages/:id" />
  ```

2. 进入离开的两个钩子方法使用 onEnter  onLeave。（场景： 可以在离开进入对数据持久化处理）

3. route的书写方式可以直接使用JSX, 也可以使用原生的route数组对象。
实例： JSX：

    ```
    import { Redirect } from 'react-router'
    React.render({
      <Router>
        <Route path="/" component={App}>
          <IndexRoute component={Dashboard} />
          <Route path="about" component={About} />
          <Route path="inbox" component={Inbox}>
            <Route path="/message/:id" component={Message} />
            // 跳转 /inbox/messages/:id 到 /messages/:id
            <Redirect from="messages/:id" to="/messages/:id" />
          </Route>
        </Route>
      </Router>
    }, document.body)
    ```
  实例： route原生数组对象
  
  ```
  const routeConfig = [
    { path: '/',
      component: App,
      indexRoute: { component: Dashboard },
      childRoutes: [
        { path: 'about', component: About },
        { path: 'inbox',
          component: Inbox,
          childRoutes: [
            { path: '/messages/:id', component: Message },
            { path: 'messages/:id',
              onEnter: function (nextState, replaceState) {
                replaceState(null, '/messages/' + nextState.params.id)
              }
            }
          ]
        }
      ]
    }
  ]

  React.render(<Router routes={routeConfig} />, document.body)
  ```

4. [路由配置原理](http://react-guide.github.io/react-router-cn/docs/guides/basics/RouteMatching.html)
路由拥有三个属性来决定是否“匹配“一个 URL：
  1. 嵌套关系
  2. 路径语法
  3. 优先级

5. [IndexRoute 和 IndexLink的配合使用](http://react-guide.github.io/react-router-cn/docs/guides/basics/IndexRoutes.html)

6. 动态路由设置（在使用相对路径的时候动态路由设置是不能实现的）
Route可以定义三个函数方法： getChildRoutes   getIndexRoute  getComponents.
实例： 配合webpack分拆繁琐的构架。
 ```
 const CourseRoute = {
   path: 'course/:courseId',

   getChildRoutes(location, callback) {
     require.ensure([], function (require) {
       callback(null, [
         require('./routes/Announcements'),
         require('./routes/Assignments'),
         require('./routes/Grades'),
       ])
     })
   },

   getIndexRoute(location, callback) {
     require.ensure([], function (require) {
       callback(null, require('./components/Index'))
     })
   },

   getComponents(location, callback) {
     require.ensure([], function (require) {
       callback(null, require('./components/Course'))
     })
   }
 }
 ```

7. React Router 提供了 routerWillLeave钩子方法，可以根据该方法进行相关业务实现。[链接](http://react-guide.github.io/react-router-cn/docs/guides/advanced/ConfirmingNavigation.html)

8. [服务端渲染](http://react-guide.github.io/react-router-cn/docs/guides/advanced/ServerRendering.html)

9. [组件生命周期](http://react-guide.github.io/react-router-cn/docs/guides/advanced/ComponentLifecycle.html)

10. [API文档简介](http://react-guide.github.io/react-router-cn/docs/API.html)
