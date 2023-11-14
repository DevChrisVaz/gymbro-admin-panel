import { AuthLocalDataSourceImpl } from "@/features/auth/data/data-sources/auth-local-data-source";
import { InternalAxiosRequestConfig } from "axios";
import jwt from "jsonwebtoken";

export const authorizationInterceptor = (config: InternalAxiosRequestConfig) => {
    const token = new AuthLocalDataSourceImpl().getToken();
    if(token) {
        const data = jwt.decode(token);
    }
    config.headers.Authorization = token;
    return config;
}