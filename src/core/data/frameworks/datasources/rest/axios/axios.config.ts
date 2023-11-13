import axios from "axios";
import { acceptHeaderInterceptor } from "./interceptors/accept-header.interceptor";
import { notAuthorizedInterceptor } from "./interceptors/not-authorized.interceptor";

export const acceptHeaderInterceptorId = axios.interceptors.request.use(acceptHeaderInterceptor); 
axios.interceptors.response.use(null, notAuthorizedInterceptor);

export default axios.create({
    baseURL: "https://gymbro-services.onrender.com/api/",
    timeout: 1000
});