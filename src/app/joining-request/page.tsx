"use client"

import { Navbar } from '@/components/Navbar';
import React from 'react';
import { items } from '../page';
import Image from 'next/image';
import { NavLinks } from '@/components/Navbar/Navbar';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

export type JoiningRequestProps = {

}

const JoiningRequest: React.FC<JoiningRequestProps> = (props) => {

    const router = useRouter();

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
                    <div className="flex h-[500px]">
                        <div className="px-10 py-5 flex-1 h-full bg-gradient rounded-l-xl border-solid border-2 border-primary-500">
                            <div className="text-black">
                                <h2 className="text-xl font-semibold">¿Buscas suscribirte a algún gimnasio?</h2>
                                <p>Descarga la app y registrate.</p>
                            </div>
                        </div>
                        <div className="px-10 py-5 flex-1 h-full rounded-r-xl border-solid border-2 border-primary-500">
                            <div className='text-white'>
                                <h2 className="inline-block text-xl font-semibold">¿Quieres agragar tu gimnasio a <span><Image className="inline-block" src="/img/logo/horizontal-logo.svg" alt="GYMBRO" width={130} height={0} /></span>?</h2> 
                                <div className="px-5">
                                    <p className="mb-5">Llena el formulario a continuación y nosotros nos podremos en contacto contigo.</p>
                                    <Button onClick={() => router.push("/register")} className="bg-gradient text-white">Registrar mi gimnasio</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default JoiningRequest;