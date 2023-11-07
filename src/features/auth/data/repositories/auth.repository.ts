import { autoInjectable } from "tsyringe";
import { AuthRepository } from "../../domain/repositories/auth.repository";
import type { AuthRemoteDataSource } from "../data-sources/auth-remote-data-source";

@autoInjectable()
export class AuthRepositoryImpl implements AuthRepository {
    constructor(private authRemoteDataSource: AuthRemoteDataSource) { }

    async login(userName: string, password: string): Promise<string> {
        const response = await this.authRemoteDataSource.login(userName, password);

        switch (response.type) {
            case "Succeeded":
                console.log(response.data);
                return response.data.token;
            case "Failed":
                throw new Error();
            case "Error":
                throw new Error();
        }
    }
}