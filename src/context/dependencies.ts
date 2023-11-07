import { AxiosApiRestClient } from "@/data/frameworks/datasources/rest/axios/axios-implementation"
import axiosConfig from "@/data/frameworks/datasources/rest/axios/axios.config";
import { AuthRemoteDataSourceImpl } from "@/features/auth/data/data-sources/auth-remote-data-source";
import { AuthRepositoryImpl } from "@/features/auth/data/repositories/auth.repository";

const apiRestClient = new AxiosApiRestClient(axiosConfig);

// auth
const authRemoteDataSource = new AuthRemoteDataSourceImpl(apiRestClient);

export const dependencies = {
    authRepository: new AuthRepositoryImpl(authRemoteDataSource)
}