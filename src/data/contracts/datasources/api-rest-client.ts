export enum HttpMethod {
    GET,
    POST,
    PUT,
    DELETE,
    PATCH
}

interface Succeeded {
    type: "Succeeded",
    data: any
}

interface Failed {
    type: "Failed",
    data: any
}

interface Error {
    type: "Error",
    message: string;
}

export type APIResult = Succeeded | Failed | Error;

export interface ApiRestClient {
    authorization(token: string, replaceInterceptor?: Boolean): void;

    call(
        method: HttpMethod,
        url: string,
        {
            body,
            params,
            // options
        }: {
            body: object,
            params: object
            // options
        }
    ): Promise<APIResult>;
}