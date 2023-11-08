import { autoInjectable } from "tsyringe";
import type { AuthRepository } from "../../domain/repositories/auth.repository";

@autoInjectable()
export class LoginUseCase {
    constructor(private authRepository: AuthRepository) { }

    async run(userName: string, password: string) {
        let response = await this.authRepository.login(userName, password);
        return response;
    }
}