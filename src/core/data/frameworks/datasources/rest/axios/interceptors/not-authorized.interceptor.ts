import { AxiosError } from "axios";
import { redirect } from "next/navigation";

export const notAuthorizedInterceptor = (error: AxiosError) => {
    if (error.status === 401)
        redirect("/login");
    return Promise.reject(error);
}