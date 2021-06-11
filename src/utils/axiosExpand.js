import axiosIE9 from 'axiosIE9';
import axios from "axios";
import browerVersion from './browerVersion';
let axiosCompatibility;
if (browerVersion() == 9) {
    axiosCompatibility = axiosIE9;
} else {
    axiosCompatibility = axios;
}
const axiosExpand = {
    //获取数据
    get: (path = '', params) => {
        return new Promise((resolve, reject) => {
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
            axiosCompatibility.post(path, params, {
                headers: {
                    'Content-Type': contentType
                }
            }).then((response) => {
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