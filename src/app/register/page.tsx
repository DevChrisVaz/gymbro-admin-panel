import { Navbar } from '@/components/Navbar';
import React from 'react';
import { items } from '../page';
import { NavLinks } from '@/components/Navbar/Navbar';
import Image from 'next/image';
import RegisterForm from './components/RegisterForm';

export type RegisterProps = {

}

const Register: React.FC<RegisterProps> = () => {
    return (
        <>
            <header>
                <Navbar
                    logo={<Image src="/img/logo/horizontal-logo.svg" alt="GYMBRO" width={150} height={0} />}
                    items={items}
                >
                    <NavLinks items={items} />
                </Navbar>
            </header>
            <main>
                <div className="container px-16 py-5">
                    <RegisterForm />
                </div>
            </main>
        </>
    );
}

export default Register;