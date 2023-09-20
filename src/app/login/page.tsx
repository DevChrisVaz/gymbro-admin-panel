'use client';

import { PasswordFormField } from "@/components/ui/PasswordFormField";
import { TextFormField } from "@/components/ui/TextFormField";
import Image from "next/image";

export default function LoginPage() {
    return (
        <section className="dark:bg-dark bg-light min-h-screen flex items-center justify-center">
            <div className="bg-gradient flex flex-col items-center rounded-2xl max-w-3xl p-5">
                <Image className="mb-5" src="/img/logo/full-logo.svg" alt="GYMBRO" width={200} height={0} />
                <form>
                    <TextFormField label="Username" name="userName" />
                    <PasswordFormField label="Password" name="password" />
                </form>
            </div>
        </section>
    );
};