'use client';

import { Button } from "@/components/ui/Button";
import { PasswordFormField } from "@/components/ui/PasswordFormField";
import { TextFormField } from "@/components/ui/TextFormField";
import { FaLock, FaUser } from "react-icons/fa";
import Image from "next/image";
// import { container } from "tsyringe";

export default function LoginPage() {

    // const apiRestClient = new AxiosApiRestClient(axios);
    // const authRemoteDataSource = new AuthRemoteDataSourceImpl(apiRestClient);
    // const authRepository = new AuthRepositoryImpl(authRemoteDataSource);
    // const loginUseCase = new LoginUseCase(authRepository);

    // const loginUseCase = container.resolve("LoginUseCase")

    return (
        <section className="dark:bg-dark bg-light min-h-screen flex items-center justify-center">
            <div className="bg-gradient flex flex-col items-center rounded-xl max-w-3xl p-5">
                <Image className="mb-5" src="/img/logo/full-logo.svg" alt="GYMBRO" width={200} height={0} />
                <form className="flex flex-col items-center">
                    <TextFormField label="Username" name="userName" prefixIcon={<FaUser />} />
                    <PasswordFormField label="Password" name="password" prefixIcon={<FaLock />} />
                    <Button onClick={() => { }} className="w-full dark:bg-dark bg-white text-primary">Ingresar</Button>
                </form>
            </div>
        </section>
    );
};