import axios from 'axios';
import qs from 'qs';

// const apiBaseUrl = 'http://novel.juhe.im/';
const apiBaseUrl = 'http://172.16.4.92:8081/';
const Axios = axios.create({
  baseURL: apiBaseUrl, // 因为我本地做了反向代理
  timeout: 10000,
  responseType: 'json',
  // withCredentials: true, // 是否允许带cookie这些
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  }
});

Axios.interceptors.request.use(
  config => {
    // 在发送请求之前做某件事
    if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
      // 序列化
      config.data = qs.stringify(config.data);
    }

    // 若是有做鉴权token , 就给头部带上token
    if (localStorage.token) {
      config.headers.Authorization = localStorage.token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
  res => {
    // 对响应数据做些事
    // if (res.data && !res.data.success) {
    //   Message({
    //     //  饿了么的消息弹窗组件,类似toast
    //     showClose: true,
    //     message: res.data.message,
    //     type: 'error'
    //   })
    // return Promise.reject(res.data)
    // }
    return res.data;
  },
  error => {
    // 用户登录的时候会拿到一个基础信息,比如用户名,token,过期时间戳
    // 直接丢localStorage或者sessionStorage
    if (error.response) {
      // switch (error.response.status) {
      //   case 401:
      //     router.push({
      //       // 跳转到登录页面
      //       path: '/login'
      //     });
      //     break;
      //   case 404:
      //     router.push({
      //       path: '/404'
      //     });
      //     break;
      // }
    }
    return Promise.reject(error.response);
    // 返回 response 里的错误信息
    // let errorInfo = error.data.error ? error.data.error.message : error.data
  }
);

export default Axios;
