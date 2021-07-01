import axiosCompatibility from "./axios";
const axiosExpand = {
    //获取数据
    get: (path = '', params) => {
        return new Promise((resolve, reject) => {
            params = {
                _t: Date.parse(new Date()) / 1000,
                ...params
            }
            axiosCompatibility.get(path, {
                params: params
            }).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject(error)
            })
        })
    },
    //新建，提交数据(表单提交，文件上传)
    post: (path = '', params, contentType = 'application/json;charset=utf-8') => {
        return new Promise((resolve, reject) => {
            axiosCompatibility.post(path, params).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject(error)
            })
        })
    },
    //更新数据
    put: (path = '', params) => {
        return new Promise((resolve, reject) => {
            axiosCompatibility.put(path, params).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject(error)
            })
        })
    },
    //删除数据
    delete: (path = '', params) => {
        return new Promise((resolve, reject) => {
            axiosCompatibility.delete(path, {
                data: params,   // 请求参数放在请求体
                // params: params // 请求参数拼接在url上,有需要单独写
            }).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject(error)
            })
        })
    }
}
export default axiosExpand