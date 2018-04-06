Vue.component('my-child', {
    props: {
        myMessage: {
            type: Number,
            default: 4,
            validator: function(value) {
                if (value < 10) {
                    console.warn('请输入正确的数据!!!')
                    return false
                }
                return true
            },
            message: '请输入正确的数据！！！'
        }
    },
    template: '<span>标题： {{ myMessage }}</span>'
})


// Vue.component('child', {
//     // 在 JavaScript 中使用 camelCase
//     props: ['myMessage'],
//     template: '<span>标题：{{ myMessage }}</span>'
// })

var vm = new Vue({
    el: '#app',
    data: {
        message: 'Hello Word!!!',
        rawHtml: '<span style="color: #fe23e3;">生命周期3333</span>',
        rawHtml2: '<span style="font-size: 3em; color: #3e8e41;">生命周期444444</span>',
        clickColor: 'aqua',
        isTrue: undefined,
        items: [
            {message: '222222'},
            {message: 'sss33333sss'},
            {message: 'ss444444ssss'}
        ],
        numbers: [1, 2, 3, 4, 5, 6, 7],
        checked: true,
        checkedNames: [],
        picked: 'One',
        selected: '',
        selected2: '',
        options: [
            {text: '请选择', value: ''},
            {text: 'One', value: 'A'},
            {text: 'Two', value: 'B'},
            {text: 'Three', value: 'C'}
        ],
        lazy_msg1: '',
        lazy_msg2: '',
        lazy_msg3: '',
        my_child_msg: null
    },
    computed: {
        //  计算属性的get方法
        reverseMessage: {
            get: function () {
                return this.message.split('').reverse().join('')
            },
            set: function (val) {
                this.message = val.split('').reverse().join('')
            }
        },
        evenNumbers: function () {
            return this.numbers.filter(function (value) {
                return value % 2 === 0
            })
        }
    },
    methods: {
        clickSpan: function () {
            alert('sdfsdfsdf');
        },
        changeComputedMessage: function (e) {
            this.reverseMessage = e.currentTarget.innerHTML
        },
        changeColor: function (e) {
            this.clickColor = 'yellow'
        },
        even: function (numbers) {
            return numbers.filter(function (value) {
                return value % 2 === 0
            })
        }
    }
})


