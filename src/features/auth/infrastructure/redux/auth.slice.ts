import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosApiRestClient } from "@/data/frameworks/datasources/rest/axios/axios-implementation";
import axiosConfig from "@/data/frameworks/datasources/rest/axios/axios.config";
import { LoginUseCase } from "../../application/usecases/login-usecase";
import { AuthRepositoryImpl } from "../../data/repositories/auth.repository";
import { AuthRemoteDataSourceImpl } from "../../data/data-sources/auth-remote-data-source";

type Status = "INITIAL" | "LOADING" | "SUCCEEDED" | "FAILED";

type AuthState = {
    token: string | null | undefined;
    status: Status;
    error: string | null | undefined;
}

const initialState: AuthState = {
    token: null,
    status: 'INITIAL',
    error: null
};

export const login = createAsyncThunk("auth/login", async (payload: { userName: string, password: string }) => {
    const loginUseCase = new LoginUseCase(new AuthRepositoryImpl(new AuthRemoteDataSourceImpl(new AxiosApiRestClient(axiosConfig))));
    const response = await loginUseCase.run(payload.userName, payload.password);
    console.log(response);
    return response;
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(
                login.pending, (state) => {
                    state.status = "LOADING";
                }
            )
            .addCase(
                login.fulfilled, (state, action) => {
                    state.status = "SUCCEEDED";
                    state.token = action.payload;
                }
            )
            .addCase(
                login.rejected, (state, action) => {
                    state.status = "FAILED";
                    state.error = action.error.message;
                }
            )
    }
});

export const {

} = authSlice.actions;

export default authSlice.reducer;