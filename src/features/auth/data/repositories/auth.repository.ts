import { ICredentials } from "../../domain/entities/login.entity";
import { AuthRepository } from "../../domain/repositories/auth.repository";
import { AuthLocalDataSource } from "../data-sources/auth-local-data-source";
import type { AuthRemoteDataSource } from "../data-sources/auth-remote-data-source";

export class AuthRepositoryImpl implements AuthRepository {
    constructor(
        private authRemoteDataSource: AuthRemoteDataSource,
        private authLocalDataSource: AuthLocalDataSource
    ) { }

    async login(credentials: ICredentials): Promise<string> {
        const response = await this.authRemoteDataSource.login(credentials);

        switch (response.type) {
            case "Succeeded":
                this.authLocalDataSource.saveToken(response.data.token);
                return response.data.token;
            case "Failed":
                throw new Error();
            case "Error":
                throw new Error();
            default:
                throw new Error();
        }
    }
}