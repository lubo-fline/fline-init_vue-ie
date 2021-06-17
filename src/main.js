/*ie兼容es6*/
import "babel-polyfill";
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './utils/axios'
import axiosExpand from './utils/axiosExpand'
import Antd from 'ant-design-vue';
/** 缓存 */
import Storage from 'vue-ls';
/** 处理传参 */
import qs from "qs";
import VueI18n from 'vue-i18n'
/* 定义全局日期过滤器 */
import Moment from "moment";
import "moment/locale/zh-cn";
/* 引入md5加密 */
import md5 from "js-md5";
/*引入mock */
import "./mock/index.js";
/*引入路由控制 */
import './permission'
/*api*/
import api from '@/api/index'
/* 引入自己的css、less、js */
import "@a/less/components.less";
import "@a/less/common.less";
import "@a/less/style.less";
/**添加浏览器判断方法 */
import browerVersion from './utils/browerVersion';
/* 引入全局组件 */
import './utils/filter' // global filter
/** 可视化界面图表插件 **/
import viserVue from "viser-vue";
//解决iconfont ie兼容性
import "core-js";
/** 字体框架 **/
import "@a/font/iconfont.js";
import iconFont from '@c/Icon.vue'
Vue.component('iconFont', iconFont);
const options = {
    namespace: '', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'session', // storage name session, local, memory
};
Moment.locale("zh-cn");
axios.defaults.baseURL = "/fline/";
Vue.use(Storage, options);
Vue.use(Antd);
Vue.use(VueI18n);
Vue.use(viserVue);
Vue.prototype.$axios = axios;
Vue.prototype.$get = axiosExpand.get
Vue.prototype.$put = axiosExpand.put
Vue.prototype.$delete = axiosExpand.delete
Vue.prototype.$post = axiosExpand.post
Vue.prototype.$qs = qs;
Vue.prototype.$md5 = md5;
Vue.prototype.$api = api;
Vue.prototype.$browerVersion = browerVersion();
Vue.config.productionTip = false
const i18n = new VueI18n({
    locale: 'zh-CN', // 语言标识, 通过切换locale的值来实现语言切换,this.$i18n.locale 
})
new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
