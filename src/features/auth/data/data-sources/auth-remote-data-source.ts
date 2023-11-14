import { HttpMethod, type APIResult, type ApiRestClient } from "@/core/data/contracts/datasources/api-rest-client";
import { ICredentials } from "../../domain/entities/login.entity";

export interface AuthRemoteDataSource {
    login(credentials: ICredentials): Promise<APIResult<{ token: string }>>;
}

export class AuthRemoteDataSourceImpl implements AuthRemoteDataSource {
    constructor(private apiRestClient: ApiRestClient) { }

    login({ userName, password }: ICredentials): Promise<APIResult<{ token: string }>> {
        return this.apiRestClient.call(
            HttpMethod.POST,
            "/auth/users",
            {
                body: { userName, password }
            }
        )
    }
}