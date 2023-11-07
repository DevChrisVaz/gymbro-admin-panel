import { ApiRestClient } from "@/core/contracts/datasources/api-rest-client";
import { LoginUseCase } from "@/features/auth/application/usecases/login-usecase";
import { AuthRemoteDataSource } from "@/features/auth/data/data-sources/auth-remote-data-source";
import { AuthRepository } from "@/features/auth/domain/repositories/auth.repository";
import { ReactNode, createContext, useContext } from "react";

interface ContextValue {
    login: LoginUseCase;
}

const DependenciesContainerContext = createContext<ContextValue>({} as ContextValue);

export const useDependencies = () => {
    return useContext(DependenciesContainerContext);
}

interface Props {
    children: ReactNode;
    dependencies: {
        authRepository: AuthRepository;
    }
}

export const DependenciesContainerProvider = ({ children, dependencies }: Props) => {
    const {
        authRepository
    } = dependencies;

    return <DependenciesContainerContext.Provider value={{
        login: new LoginUseCase(authRepository)
    }}>{children}</DependenciesContainerContext.Provider>
}