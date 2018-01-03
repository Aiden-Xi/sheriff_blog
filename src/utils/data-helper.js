import { notification } from 'antd'
import HttpHelper from './http-helper'

export default class Datahelper {
    constructor() {
        this.http = new HttpHelper()
        this.session_key = Cookies.get('user_session_key')
        this.page_buttons = JSON.parse(localStorage.getItem('pages_buttons'))
    }

    /**
     * 从arrary 中删除一个数据
     * @param array
     * @param value
     * @returns {*}
     */
    delete_e_from_array(array, value) {
        const index = array.indexOf(value);
        if (index > -1) {
            return array.splice(index, 1)
        }
        return array
    }

    /**
     * 是否属于电话号码
     * @param phone
     * @returns {boolean}
     */
    isPhoneNumber(phone) {
        const myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (!myreg.test(phone)) {
            return false;
        }
        return true
    }


    /**
     * 判断对象本身是否为空
     * @param obj
     * @returns {boolean}
     */
    isOwnEmpty(obj) {
        for (const name in obj) {
            if (obj.hasOwnProperty(name)) {
                return false;
            }
        }
        return true;
    }

    /**
     * 对字符串排序并且进行反转
     * @param a
     * @returns {string}
     */
    sortChars(a) {
        return a.split('').sort(
        ).reverse().join('');
    }

    /**
     * 格式化日期参数
     * @param date
     * @returns {string}
     * @constructor
     */
    FormatDate(date) {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    FormatDatetime(date) {
        const minutes = date.getMinutes() < 10 ? `0${date.getMinutes().toString()}` : date.getMinutes()
        const second = date.getSeconds() < 10 ? `0${date.getSeconds().toString()}` : date.getSeconds()
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${minutes}:${second}`
    }

    /**
     * 深度拷贝 防止相同绑定数据同时需改
     * @param oldObj
     * @returns {any}
     */

    deepCopy(oldObj) {
        let newObj = oldObj;
        if (oldObj && typeof oldObj === 'object') {
            newObj = Object.prototype.toString.call(oldObj) === '[object Array]' ? [] : {};
            for (const i in oldObj) {
                if (oldObj.hasOwnProperty(i)) {
                    newObj[i] = this.deepCopy(oldObj[i]);
                }
            }
        }
        return newObj;
    }

    // 取数组的并集
    mergeArr(arr) {
        let result = []
        for (const item of arr) {
            result = result.concat(item)
        }

        return Array.from(new Set(result))
    }

    // 得到浏览器的类型
    getBrowserType() {
        const userAgent = navigator.userAgent
        const isOpera = userAgent.indexOf('Opera') > -1
        if (isOpera) {
            return 'Opera'
        }
        if (userAgent.indexOf('Firefox') > -1) {
            return 'FF'
        }
        if (userAgent.indexOf('Chrome') > -1) {
            return 'Chrome'
        }
        if (userAgent.indexOf('Safari') > -1) {
            return 'Safari'
        }
        if (userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera) {
            return 'IE'
        }
    }

    // 写cookies
    setCookie(name, value) {
        const days = 30
        const exp = new Date()
        exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000)
        let encode_result = encodeURIComponent(String(value))
            .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

        document.cookie = `${name}=${encode_result};path=/;`
    }

    // 读取cookies
    getCookies(name) {
        let arr, reg = new RegExp(`(^|)${name}=([^;]*)(;|$)`)
        if (arr = document.cookie.match(reg)) {
            return decodeURIComponent(arr[2])
        } else {
            return null
        }
    }

    // 删除cookies
    delCookies(name) {
        const exp = new Date()
        exp.setTime(exp.getTime() - 1)
        const cval = this.getCookies(name)
        if (cval) {
            document.cookie = `${name}=${cval};expires=${exp.toUTCString()}`
        }
    }

    // 得到元素距离顶部的距离
    getObjOffsetTop(obj){
        let top = obj.offsetTop
        let current = obj.offsetParent
        if(current){
            top+=current.offsetTop
            current = current.offsetParent
        }

        return top
    }

    // 返回对象的属性(keys)数组
    objectKeys(obj) {
        const arr = []
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                arr.push(key)
            }
        }
        return arr
    }

    // 返回对象的属性值(values)数组
    objectValues(obj) {
        const arr = []
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                arr.push(obj[key])
            }
        }
        return arr
    }

    // 返回对象的键值对数组([key, value])
    objectEntries(obj) {
        const arr = []
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                arr.push([key, obj[key]])
            }
        }
        return arr
    }
}
