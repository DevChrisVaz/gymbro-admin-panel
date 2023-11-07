import { HttpMethod, type APIResult, type ApiRestClient } from "@/core/contracts/datasources/api-rest-client";
import { autoInjectable } from "tsyringe";

export interface AuthRemoteDataSource {
    login(userName: string, password: string): Promise<APIResult<{ token: string }>>;
}

@autoInjectable()
export class AuthRemoteDataSourceImpl implements AuthRemoteDataSource {
    constructor(private apiRestClient: ApiRestClient) { }

    login(userName: string, password: string): Promise<APIResult<{ token: string }>> {
        return this.apiRestClient.call(
            HttpMethod.POST,
            "/auth/login",
            {
                body: { userName, password }
            }
        )
    }
}