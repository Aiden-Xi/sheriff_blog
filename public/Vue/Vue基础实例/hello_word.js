new Vue({
    el: '#app',
    data: {
        message: 'Hello Word!!!',
        rawHtml: '<span style="color: #fe23e3;">生命周期3333</span>',
        rawHtml2: '<span style="font-size: 3em; color: #3e8e41;">生命周期444444</span>',
        clickColor: 'aqua'
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
        }
    }
})


