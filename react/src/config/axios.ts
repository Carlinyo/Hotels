import axios, { AxiosRequestConfig } from 'axios';
import { HeadersDefaults } from "axios";


interface CommonHeaderProperties extends HeadersDefaults {
  Accept: string;
  Authorization: string;
  'Content-Type': string;
}
const axiosClient = axios.create();

axiosClient.defaults.baseURL = process.env.REACT_APP_API_URL

 
axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
} as CommonHeaderProperties;


export async function getRequest<T,R>(URL: string) {
    return await axiosClient.get<T>(URL);
  }
  
  export async function postRequest<R, P>(URL: string, payload: P) {
    return await axiosClient.post<R>(URL, payload);
  }
  
  export async function patchRequest<T>(URL: string, payload: AxiosRequestConfig) {
    return await axiosClient.patch<T>(URL, payload);
  }
  
  export async function deleteRequest<T>(URL: string) {
    return await axiosClient.delete<T>(URL);
  }

export default axiosClient;