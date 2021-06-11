import axiosIE9 from 'axiosIE9';
import axios from "axios";
import browerVersion from './browerVersion';
let axiosCompatibility;
if (browerVersion() == 9) {
    axiosCompatibility = axiosIE9;
} else {
    axiosCompatibility = axios;
}
import Router from '../router'
import message from 'ant-design-vue/es/message'

// 添加请求拦截器
axiosCompatibility.interceptors.request.use((req) => {
    //统一设置传header
    if (req.url.indexOf("login") == -1) {
        let token = localStorage.getItem("token") || "";
        req.headers.token = token;
    }
    return req;
}, error => {
    return Promise.reject(error);
})
axiosCompatibility.defaults.timeout = 36000000 //设置超时时间

// 头部添加不使用缓存，避免IE存在在当前页面没刷新的情况下再次请求接口直接拿缓存
axiosCompatibility.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
axiosCompatibility.defaults.headers.common['Pragma'] = 'no-cache';
axiosCompatibility.defaults.headers.common['Cache-Control'] = 'no-cache';

axiosCompatibility.interceptors.response.use(
    response => {
        // 检测某种状态进行重定向
        if (response.data.code === 401) {
            message.error(response.data.message)
            Router.push({
                name: 'login'
            })
        }else if (response.data.code !== 200) {
            message.error(response.data.message)
        } 
        return response
    },
    error => {
        if (error.response.data.code) {
            if (error.response.data.code === 401) {
                message.error(error.response.data.message)
                Router.push({
                    name: 'login'
                })
            } else {
                message.error(error.response.data.message)
            }
        } else {
            message.error(error.response.statusText)
        }
        return Promise.resolve(error.response)
    }
)
export default axiosCompatibility
