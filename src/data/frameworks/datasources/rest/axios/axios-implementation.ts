import { APIResult, ApiRestClient, HttpMethod } from "@/data/contracts/datasources/api-rest-client";
import { Axios, AxiosRequestConfig, AxiosResponse, isAxiosError } from "axios";
import { inject, injectable } from "tsyringe";
import { authorizationInterceptor } from "./interceptors/authorization.interceptor";

@injectable()
export class AxiosApiRestClient implements ApiRestClient {

    constructor(@inject("AXIOS") private axiosClient: Axios) { }

    authorization(token?: string, replaceInterceptor?: Boolean | undefined): void {
        if(replaceInterceptor) {
            this.axiosClient.interceptors.request.clear();
            this.axiosClient.interceptors.request.use(authorizationInterceptor(token));

            return;
        }

        let currentInterceptor;

        for (let interceptor in this.axiosClient.interceptors.request) {
            if(interceptor == authorizationInterceptor) {
                
            }
        }
    }

    async call(
        method: HttpMethod,
        url: string,
        { body, params, options }:
            {
                body: object;
                params: object;
                options?: AxiosRequestConfig
            }
    ): Promise<APIResult> {
        switch (method) {
            case HttpMethod.GET:
                return this._get(url, params, options);
            case HttpMethod.POST:
                return this._post(url, { body, params, options });
            case HttpMethod.PUT:
                return this._put(url, { body, params, options });
            case HttpMethod.DELETE:
                return this._delete(url, { params, options });
            case HttpMethod.PATCH:
                return this._patch(url, { body, params, options });
        }
    }

    async _get(
        url: string,
        params: object,
        options?: AxiosRequestConfig
    ): Promise<APIResult> {
        try {

            const response = await this.axiosClient.get(
                url,
                {
                    params,
                    ...options
                }
            );

            return this._mapResponse(response);

        } catch (error) {
            if (isAxiosError(error)) {
                return this._mapResponse(error.response);
            }

            return this._mapResponse();
        }
    }

    async _post(
        url: string,
        {
            body,
            params,
            options
        }: {
            body: object,
            params: object,
            options?: AxiosRequestConfig
        }
    ): Promise<APIResult> {
        try {
            const response = await this.axiosClient.post(
                url,
                {
                    body,
                    params,
                    ...options
                },
            );

            return this._mapResponse(response);
        } catch (error) {
            if (isAxiosError(error)) {
                return this._mapResponse(error.response);
            }

            return this._mapResponse();
        }
    }

    async _put(
        url: string,
        {
            body,
            params,
            options
        }: {
            body: object,
            params: object,
            options?: AxiosRequestConfig
        }
    ): Promise<APIResult> {
        try {
            const response = await this.axiosClient.put(
                url,
                {
                    body,
                    params,
                    options
                }
            );

            return this._mapResponse(response);
        } catch (error) {
            if (isAxiosError(error)) {
                return this._mapResponse(error.response);
            }

            return this._mapResponse();
        }
    }

    async _delete(
        url: string,
        {
            params,
            options
        }: {
            params?: object,
            options?: AxiosRequestConfig
        }
    ): Promise<APIResult> {
        try {
            const response = await this.axiosClient.delete(
                url,
                {
                    params,
                    ...options
                }
            );

            return this._mapResponse(response);
        } catch (error) {
            if (isAxiosError(error)) {
                return this._mapResponse(error.response);
            }

            return this._mapResponse();
        }
    }

    async _patch(
        url: string,
        {
            body,
            params,
            options
        }: {
            body?: Object,
            params?: Object,
            options?: AxiosRequestConfig
        }
    ): Promise<APIResult> {
        try {
            const response = await this.axiosClient.patch(
                url,
                {
                    body,
                    params,
                    ...options
                }
            );

            return this._mapResponse(response)
        } catch (error) {
            if (isAxiosError(error)) {
                return this._mapResponse(error.response);
            }

            return this._mapResponse();
        }
    }

    _mapResponse(response?: AxiosResponse): APIResult {
        if (response != null) {
            if (response.status >= 200 && response.status <= 300) {
                return {
                    type: "Succeeded",
                    data: response.data
                }
            } else {
                return {
                    type: "Failed",
                    data: response.data
                }
            }
        } else {
            return {
                type: "Error",
                message: "Ocurrió un error inesperado"
            }
        }
    }
}