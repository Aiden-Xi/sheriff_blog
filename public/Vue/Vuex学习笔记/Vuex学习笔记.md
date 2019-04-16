1. 可以使用mapState 辅助函数方法使用多个状态的处理
并且在mapState里面，可以使用字符串参数，代替箭头函数
    ```
    // 在单独构建的版本中辅助函数为 Vuex.mapState
    import { mapState } from 'vuex'

    export default {
    computed: mapState({
        // 箭头函数可使代码更简练
        count: state => state.count,

        // 传字符串参数 'count' 等同于 `state => state.count`
        countAlias: 'count',

        // 为了能够使用 `this` 获取局部状态，必须使用常规函数
        countPlusLocalState (state) {
        return state.count + this.localCount
        }
    })
    }
    ```

2. mutation 必须是同步函数

3. Vuex 并不限制你的代码结构。但是，它规定了一些需要遵守的规则：
    - 应用层级的状态应该集中到单个 store 对象中。
    - 提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。
    - 异步逻辑都应该封装到 action 里面。