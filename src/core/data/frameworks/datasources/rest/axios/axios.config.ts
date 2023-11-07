import axios from "axios";
import { acceptHeaderInterceptor } from "./interceptors/accept-header.interceptor";

export const acceptHeaderInterceptorId = axios.interceptors.request.use(acceptHeaderInterceptor); 

export default axios.create({
    baseURL: "https://gymbro-services.onrender.com/api/",
    timeout: 1000
});