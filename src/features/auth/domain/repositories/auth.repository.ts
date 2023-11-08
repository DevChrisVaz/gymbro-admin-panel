export interface AuthRepository {
    login(userName: string, password: string): Promise<string>;
}