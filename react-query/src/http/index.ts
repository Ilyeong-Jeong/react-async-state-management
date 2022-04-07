import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const httpClient = axios.create();
httpClient.defaults.timeout = 30000;

axios.defaults.headers.common['Content-Type'] = 'application/json';

const errorComposer = (error: any) => {
  return () => {
    const statusCode = error.response ? error.response.status : null;
    console.log(statusCode);
  };
};

const interceptHook = (config: AxiosRequestConfig) => {
  return config;
};

const interceptResponseHook = (config: AxiosResponse) => {
  return config;
};

const interceptError = (error: any) => {
  error.handleGlobally = errorComposer(error);
  return Promise.reject(error);
};

httpClient.interceptors.request.use(interceptHook, interceptError);
httpClient.interceptors.response.use(interceptResponseHook, interceptError);

export { httpClient };