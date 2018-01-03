
import axios from 'axios'
import ApiConfig from './constant/api'
const uuidV4 = require('uuid/v4')

export default class HttpHelper {

    /**
     * 获取access token 
     */
    getToken() {
        const url = `/${ApiConfig.api_url}oauth/token.json?`
        const params = {
            client_id: ApiConfig.api_uid,
            client_secret: ApiConfig.api_secret,
            grant_type: 'client_credentials'
        }
        return axios.post(url, params)
    }

    /**
     * 自定义封装请求
     * @param url
     * @param params
     * @param type
     * @returns {*}
     * @constructor
     */
    REQUEST(url, params, type) {
        const instance = axios.create({
            baseURL: ApiConfig.api_url
        })
        const token = JSON.parse(localStorage.getItem('token'))
        if (token === null || !token.access_token || token.created_at + token.expires_in < new Date().getTime() / 1000) {
            return this.getToken().then((response) => {
                const data = response.data
                const tokenObj = {
                    created_at: data.created_at,
                    expires_in: data.expires_in,
                    access_token: data.access_token
                }

                localStorage.setItem('token', JSON.stringify(tokenObj))
                // let timestamp = (Math.floor(new Date().getTime() / 1000)).toString()
                // let salt = "+" + timestamp + tokenObj.access_token + "+";
                // params['salt'] = MD5(salt)
                params['access_token'] = data.access_token

                switch (type) {
                    case 'get':
                        // user_session_key失效时，取得cookie中的账户重新获取session_key,然后再次发请求
                        return instance.get(url, { params }).then((res)=>{
                            if(res.data.status.code === '50001'){
                                return this.signIn().then(()=>{
                                    return instance.get(url, { params })
                                })
                            }
                            return res
                        })
                    case 'post':
                        return instance.post(url, params).then((res)=>{
                            if(res.data.status.code === '50001'){
                                return this.signIn().then(()=>{
                                    return instance.post(url, params)
                                })
                            }
                            return res
                        })
                    case 'put':
                        return instance.put(url, params).then((res)=>{
                            if(res.data.status.code === '50001'){
                                return this.signIn().then(()=>{
                                    return instance.put(url, params)
                                })
                            }
                            return res
                        })
                    case 'delete':
                        return instance.delete(url, { params }).then((res)=>{
                            if(res.data.status.code === '50001'){
                                return this.signIn().then(()=>{
                                    return instance.delete(url, { params })
                                })
                            }
                            return res
                        })
                    case 'patch':
                        return instance.patch(url, params).then((res)=>{
                            if(res.data.status.code === '50001'){
                                return this.signIn().then(()=>{
                                    return instance.patch(url, params)
                                })
                            }
                            return res
                        })
                }
            }).catch((res) => {
                console.log(res)
            })
        } else {
            params['access_token'] = token.access_token

            switch (type) {
                case 'get':
                    // user_session_key失效时，取得cookie中的账户重新获取session_key,然后再次发请求
                    return instance.get(url, { params }).then((res)=>{
                        if(res.data.status.code === '50001'){
                            return this.signIn().then(()=>{
                                return instance.get(url, { params })
                            })
                        }
                        return res
                    })
                case 'post':
                    return instance.post(url, params).then((res)=>{
                        if(res.data.status.code === '50001'){
                            return this.signIn().then(()=>{
                                return instance.post(url, params)
                            })
                        }
                        return res
                    })
                case 'put':
                    return instance.put(url, params).then((res)=>{
                        if(res.data.status.code === '50001'){
                            return this.signIn().then(()=>{
                                return instance.put(url, params)
                            })
                        }
                        return res
                    })
                case 'delete':
                    return instance.delete(url, { params }).then((res)=>{
                        if(res.data.status.code === '50001'){
                            return this.signIn().then(()=>{
                                return instance.delete(url, { params })
                            })
                        }
                        return res
                    })
                case 'patch':
                    return instance.patch(url, params).then((res)=>{
                        if(res.data.status.code === '50001'){
                            return this.signIn().then(()=>{
                                return instance.patch(url, params)
                            })
                        }
                        return res
                    })
            }
        }
    }

    /**
     * 登录接口 
     */
    signIn(){
        const type = 'post'
        const url = '/api/users/sign_in.json'
        const params = {
            account: Cookies.get('name'),
            password: Cookies.get('pass')
        }

        return this.REQUEST(url, params, type).then((res) => {
            const status = res.data.status
            if (status.code === '20000') {
                const user = res.data.data.user
                Cookies.set('user_session_key', user.user_session_key)
            }
        }).catch((e) => {
            console.log(e)
        })
    }

    // 将对象或数组转换成formdata的格式
    objectToFormData (obj, form, namespace) {
        var fd = form || new FormData();
        var formKey;
        if(obj instanceof Array){
            for(var item of obj ){
                if(typeof item === 'object' && !(item instanceof File)){
                    this.objectToFormData(item, fd, `${namespace}[]`);
                }else{
                    fd.append(`${namespace}[]`,item)
                }

            }
        }else{
            for(var property in obj) {
                if(obj.hasOwnProperty(property) && obj[property]) {

                    if(namespace) {
                        formKey = namespace + '[' + property + ']';
                    } else {
                        formKey = property;
                    }

                    // if the property is an object, but not a File,
                    // use recursivity.
                    if(typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
                        this.objectToFormData(obj[property], fd, formKey);
                    } else {

                        // if it's a string or a File object
                        fd.append(formKey, obj[property]);
                    }

                }
            }
        }
        return fd;

    };

    /**
     * 上传文件请求
     * @param url   请求地址(string)
     * @param params  请求参数（obj）
     * @param type   请求类型(string)
     * @param callback   回调函数（function）
     */
    uploadFile(url, params, type, callback) {
        const token = JSON.parse(localStorage.getItem('token'))
        if (token === null || !token.access_token || token.created_at + token.expires_in < new Date().getTime() / 1000) {
            return this.getToken().then((response) => {
                const data = response.data
                const tokenObj = {
                    created_at: data.created_at,
                    expires_in: data.expires_in,
                    access_token: data.access_token
                }

                localStorage.setItem('token', JSON.stringify(tokenObj))
                const formData = new FormData()
                const xhr = new XMLHttpRequest()

                formData.append('access_token', data.access_token)
                let resultdata = this.objectToFormData(params,formData)

                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        callback(JSON.parse(xhr.response))
                    }
                }

                xhr.open(type, url, true)
                xhr.setRequestHeader('Content-Type', 'multipart/form-data')
                xhr.send(resultdata)
            }).catch((res) => {
                console.log(res)
            })
        } else {
            const formData = new FormData()
            const xhr = new XMLHttpRequest()

            formData.append('access_token', token.access_token)
            let resultdata = this.objectToFormData(params,formData)

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    callback(JSON.parse(xhr.response))
                }
            }

            xhr.open(type, url, true)
            xhr.send(resultdata)
        }
    }


    uploadFiles(url, params, files = {}, name, type = 'post') {
        const token = JSON.parse(localStorage.getItem('token'))
        if (token === null || !token.access_token || token.created_at + token.expires_in < new Date().getTime() / 1000) {
            return this.getToken().then((response) => {
                const data = response.data
                const tokenObj = {
                    created_at: data.created_at,
                    expires_in: data.expires_in,
                    access_token: data.access_token
                }

                localStorage.setItem('token', JSON.stringify(tokenObj))
                const formData = new FormData()
                const xhr = new XMLHttpRequest()
                for (const key in params) {
                    if (Array.isArray(params[key])) {
                        // 如果是数组\
                        params[key].forEach((v) => {
                            formData.append(`${key}[]`, v)
                        })
                    } else {
                        formData.append(key, params[key])
                    }
                }

                files.forEach((file) => {
                    formData.append(name, file)
                })
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        return new Promise((resolve, reject) => {
                            resolve(JSON.parse(xhr.response))
                        })
                    }
                }
                formData.append('access_token', data.access_token)
                xhr.open(type, url, true)
                xhr.send(formData)
            })
        } else {
            return new Promise((resolve, reject) => {
                const formData = new FormData()
                const xhr = new XMLHttpRequest()

                formData.append('access_token', token.access_token)

                for (const key in params) {
                    if (Array.isArray(params[key])) {
                        // 如果是数组\
                        params[key].forEach((v) => {
                            formData.append(`${key}[]`, v)
                        })
                    } else {
                        formData.append(key, params[key])
                    }
                }

                files.forEach((file) => {
                    formData.append(name, file)
                })
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        resolve(JSON.parse(xhr.response))
                    }
                }

                xhr.open(type, url, true)
                xhr.send(formData)
            })
        }
    }

    // 批量上传多组文件
    uploadatchFiles(url, params, files = {}, names, type = 'post') {
        const token = JSON.parse(localStorage.getItem('token'))
        if (token === null || !token.access_token || token.created_at + token.expires_in < new Date().getTime() / 1000) {
            return this.getToken().then((response) => {
                const data = response.data
                const tokenObj = {
                    created_at: data.created_at,
                    expires_in: data.expires_in,
                    access_token: data.access_token
                }

                localStorage.setItem('token', JSON.stringify(tokenObj))
                const formData = new FormData()
                const xhr = new XMLHttpRequest()
                for (const key in params) {
                    if (Array.isArray(params[key])) {
                        // 如果是数组\
                        params[key].forEach((v) => {
                            formData.append(`${key}[]`, v)
                        })
                    } else {
                        formData.append(key, params[key])
                    }
                }

                files.map((file, i) => {
                    file.map((item) => {
                        formData.append(names[i], item)
                    })
                })

                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        return new Promise((resolve, reject) => {
                            resolve(JSON.parse(xhr.response))
                        })
                    }
                }
                formData.append('access_token', data.access_token)
                xhr.open(type, url, true)
                xhr.send(formData)
            })
        } else {
            return new Promise((resolve, reject) => {
                const formData = new FormData()
                const xhr = new XMLHttpRequest()

                formData.append('access_token', token.access_token)

                for (const key in params) {
                    if (Array.isArray(params[key])) {
                        // 如果是数组\
                        params[key].forEach((v) => {
                            formData.append(`${key}[]`, v)
                        })
                    } else {
                        formData.append(key, params[key])
                    }
                }

                files.map((file, i) => {
                    file.map((item) => {
                        formData.append(names[i], item)
                    })
                })
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        resolve(JSON.parse(xhr.response))
                    }
                }

                xhr.open(type, url, true)
                xhr.send(formData)
            })
        }
    }

    uploadFilesArrays(url, params, files = {}, contract_files = {},type = 'post') {
        const token = JSON.parse(localStorage.getItem('token'))
        if (token === null || !token.access_token || token.created_at + token.expires_in < new Date().getTime() / 1000) {
            return this.getToken().then((response) => {
                const data = response.data
                const tokenObj = {
                    created_at: data.created_at,
                    expires_in: data.expires_in,
                    access_token: data.access_token
                }

                localStorage.setItem('token', JSON.stringify(tokenObj))
                const formData = new FormData()
                const xhr = new XMLHttpRequest()
                for (const key in params) {
                    if (Array.isArray(params[key])) {
                        // 如果是数组\
                        params[key].forEach((v) => {
                            formData.append(`${key}[]`, v)
                        })
                    } else {
                        formData.append(key, params[key])
                    }
                }

                files.forEach((file) => {
                    formData.append('files[]', file)
                })

                contract_files.forEach((file) => {
                    formData.append('contract_files[]', file)
                })

                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        return new Promise((resolve, reject) => {
                            resolve(JSON.parse(xhr.response))
                        })
                    }
                }
                formData.append('access_token', data.access_token)
                xhr.open(type, url, true)
                xhr.send(formData)
            })
        } else {
            return new Promise((resolve, reject) => {
                const formData = new FormData()
                const xhr = new XMLHttpRequest()

                formData.append('access_token', token.access_token)

                for (const key in params) {
                    if (Array.isArray(params[key])) {
                        // 如果是数组\
                        params[key].forEach((v) => {
                            formData.append(`${key}[]`, v)
                        })
                    } else {
                        formData.append(key, params[key])
                    }
                }

                files.forEach((file) => {
                    formData.append('files[]', file)
                })

                contract_files.forEach((file) => {
                    formData.append('contract_files[]', file)
                })

                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        resolve(JSON.parse(xhr.response))
                    }
                }

                xhr.open(type, url, true)
                xhr.send(formData)
            })
        }
    }

    getFileKey() {
        const date = new Date()
        const year = date.getFullYear()
        const month = /\d/.test(date.getMonth()) ?  ('0' + (date.getMonth()+1)) : String(date.getMonth()+1)
        const day = /\d/.test(date.getDate()) ? ('0' + (date.getDate())) : String(date.getDate())
        const hour = /\d/.test(date.getHours()) ?  String(date.getHours()) : ('0' + date.getHours())
        const minute = /\d/.test(date.getMinutes()) ?  String(date.getMinutes()) : ('0' + date.getMinutes())
        const second = /\d/.test(date.getSeconds()) ?  String(date.getSeconds()) : ('0' + date.getSeconds())

        return year + month + day + hour + minute + second + uuidV4(4).match(/.{4}/)[0]
    }

    // 上传文件到七牛云上
    // async uploadFileToQiniu(protocol, file_array, callback, nextStep) {
    //     const url_token = '/api/attachments/upload_token.json'
    //     const params_token = {
    //         user_session_key: Cookies.get('user_session_key')
    //     }
    //     let upload_token = ''
    //     let http_domain = ''
    //     let res = await this.REQUEST(url_token, params_token, 'get')
    //     if (res.data.status.code === '20000') {
    //         upload_token = res.data.data.upload_token
    //         http_domain = `https://${res.data.data.bucket_domain}/`
    //     } else if (res.data.status.code === '50000') {
    //         notification.error({ description: res.data.status.message })
    //     }

    //     let url = ''
    //     if (protocol === 'http') {
    //         url = 'http://upload.qiniu.com/'
    //     }
    //     if (protocol === 'https') {
    //         url = 'https://up.qbox.me/'
    //     }

    //     // const http_domain = 'https://uploads.liuyangbao.com/'
    //     // const http_domain = 'https://images.liuyangbao.com/'

    //     return Promise.all(file_array.map((obj, i) =>
    //         new Promise((resolve, reject) => {
    //             const ext = /\.\w*$/.exec(obj.name)[0]
    //             const file_key = obj.name.replace(ext, '').replace(/[^0-9a-zA-Z\u4e00-\u9fa5-_.:/]/g, '') + '_' + this.getFileKey() + ext
    //             const params = {
    //                 key: file_key,
    //                 token: upload_token,
    //                 'x:origin_filename': obj.name,
    //                 'x:online_filename': file_key,
    //                 'x:size': obj.size,
    //                 'x:file_content_type': obj.file_content_type,
    //                 file: obj.file
    //             }
    //             this.uploadFile(url, params, 'post', res => {
    //                     const upload_success = res['x:origin_filename'] && res['x:origin_filename'] === obj.name
    //                     const return_value = {
    //                         url: `${http_domain}${res.key}`,
    //                         // data: res,
    //                         success: upload_success,
    //                         origin_file: obj,
    //                         file_content_type: res['x:file_content_type']
    //                     }
    //                     if (!upload_success) {
    //                         return_value.message = `文件${obj.name}上传失败`
    //                     }
    //                     resolve(return_value)
    //                     // callback(return_value)
    //                 }
    //             )
    //         })
    //     ))
    // }

    // 因为要获得token,所以写在这里
    downloadFile(url, params) {
        const token = JSON.parse(localStorage.getItem('token'))
        let str = ''
        for (const item in params) {
            if (params.hasOwnProperty(item)) {
                if (Array.isArray(params[item])) {
                    params[item].forEach((v)=>{
                        str += `${item}[]=${v}&`
                    })
                } else {
                    str += `${item}=${params[item]}&`
                }
            }
        }
        if (token === null || !token.access_token || token.created_at + token.expires_in < new Date().getTime() / 1000) {
            return this.getToken().then((response) => {
                const data = response.data
                const tokenObj = {
                    created_at: data.created_at,
                    expires_in: data.expires_in,
                    access_token: data.access_token
                }

                localStorage.setItem('token', JSON.stringify(tokenObj))
                str += `access_token=${data.access_token}`
            }).catch((res) => {
                console.log(res)
            })
        } else {
            str += `access_token=${token.access_token}`
        }
        console.log('this is download file url')
        console.log(params)
        console.log(`${location.origin}${url}?${str}`)
        window.open(`${location.origin}${url}?${str}`)
    }

    // websocket
    connectWebsocket(callback) {
        let url = 'ws://localhost:4000/cable'
        let ws = new WebSocket(url)

        ws.onmessage = (event)=> {
            let message = event.data
            callback(message)
        }

        ws.onopen = ()=>{
            console.log('====>>链接成功')
            ws.send('发送ws消息')
        }
    }
}
