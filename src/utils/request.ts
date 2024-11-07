import axios from 'axios';
import { Notify } from '@taroify/core';

export const axiosClient = axios.create({
  // TODO：此处暂时写开发环境地址
  baseURL: 'http://127.0.0.1:3001/api',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  timeout: 180000, // 请求的超时时间
  withCredentials: false, // 允许携带cookie
  transformRequest: [(data) => JSON.stringify(data)],
});

// 添加一个请求拦截器
axiosClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

// 添加一个响应拦截器
axiosClient.interceptors.response.use(
  (response) => {
    // 只返回 data 部分
    return response.data.data;
  },
  (error) => {
    console.error(error);
    if (error && error.response) {
      switch (error.response.status) {
        case 404:
          Notify.open({
            message: `接口请求异常: ${error.response.data}`,
            type: 'error',
          });
          break;
        case 500:
          Notify.open({
            message: `服务异常: ${error.response.data}`,
            type: 'error',
          });
          break;
        default:
          Notify.open({
            message: error.message,
            type: 'error',
          });
      }
    } else {
      Notify.open({
        message: 'Network Error',
        type: 'error',
      });
    }
    throw new Error(error);
  },
);
