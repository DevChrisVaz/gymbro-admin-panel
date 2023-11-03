import axios from "axios";
import { acceptHeaderInterceptor } from "./interceptors/accept-header.interceptor";

axios.interceptors.request.use(acceptHeaderInterceptor)

export default axios.create({
    baseURL: "",
    timeout: 1000
});