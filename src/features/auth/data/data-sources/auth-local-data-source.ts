import { store } from "@/core/data/frameworks/datasources/local/redux/store";
import { rmToken, setToken } from "../../infrastructure/redux/auth.slice";

export interface AuthLocalDataSource {
    saveToken(token: string): void;
    getToken(): string | null;
    removeToken(): void;
}

export class AuthLocalDataSourceImpl implements AuthLocalDataSource {
    saveToken(token: string) {
        store.dispatch(setToken(token));
    }

    getToken(): string | null {
        const currentState = store.getState();
        return currentState.auth.token;
    }

    removeToken(): void {
        store.dispatch(rmToken());
    }
}