
import axios from "axios";
import { Notify } from '@taroify/core';

export const axiosClient= axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  timeout: 180000, // 请求的超时时间
  withCredentials: false, // 允许携带cookie
  transformRequest: [data => JSON.stringify(data)],
});

// 添加一个请求拦截器
axios.interceptors.request.use(config => config, error => Promise.reject(error));

// 添加一个响应拦截器
axios.interceptors.response.use(response => response.data, (error) => {
  console.error(error);
  if (error && error.response) {
    switch (error.response.status) {
      case 404:
        Notify.open({
          message: `接口请求异常: ${error.response.data}`,
          type: 'error'
        });
        break;
      case 500:
        Notify.open({
          message: `服务异常: ${error.response.data}`,
          type: 'error'
        });
        break;
      default:
        Notify.open({
          message: error.message,
          type: 'error'
        });
    }
  } else {
    Notify.open({
      message: 'Network Error',
      type: 'error'
    });
  }
  throw new Error(error);
});

