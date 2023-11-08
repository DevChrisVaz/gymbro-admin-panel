"use client"

import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import React from 'react'
import Image from "next/image";
import { SearchBar } from '@/components/ui/SearchBar';
import { useRouter } from 'next/navigation';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Button } from '@/components/ui/Button';


type data = {
    logo: string;
    name: string;
    visitors: number;
    revenues: string;
    sales: number;
    conversion: number;
};

const dataData: data[] = [
    {
        logo: "https://www.bestgym.com.mx/storage/home-page/October2022/Pi91Mtw824ZU4RMpU3ej.jpg",
        name: "Google",
        visitors: 3.5,
        revenues: "5,768",
        sales: 590,
        conversion: 4.8,
    },
    {
        logo: "https://www.bestgym.com.mx/storage/home-page/October2022/Pi91Mtw824ZU4RMpU3ej.jpg",
        name: "Twitter",
        visitors: 2.2,
        revenues: "4,635",
        sales: 467,
        conversion: 4.3,
    },
    {
        logo: "https://www.bestgym.com.mx/storage/home-page/October2022/Pi91Mtw824ZU4RMpU3ej.jpg",
        name: "Github",
        visitors: 2.1,
        revenues: "4,290",
        sales: 420,
        conversion: 3.7,
    },
    {
        logo: "https://www.bestgym.com.mx/storage/home-page/October2022/Pi91Mtw824ZU4RMpU3ej.jpg",
        name: "Vimeo",
        visitors: 1.5,
        revenues: "3,580",
        sales: 389,
        conversion: 2.5,
    },
    {
        logo: "https://www.bestgym.com.mx/storage/home-page/October2022/Pi91Mtw824ZU4RMpU3ej.jpg",
        name: "Facebook",
        visitors: 3.5,
        revenues: "6,768",
        sales: 390,
        conversion: 4.2,
    },
];

async function loadPlans() {
    const apiKey = "d5eab0a1c186b9b80f5a62919a953fb397c2c50d2b95f117fc1b368a840f08da";

    const url = 'https://gymbro-services.onrender.com/api/plans'; // Reemplaza con la URL correcta

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'apikey': apiKey
        }
    });

    if (response.ok) {
        const data = await response.json();
        console.log('Respuesta:', data);
        return data;
    } else {
        console.error('Error:', response.status, response.statusText);
    }
}

async function PlansPage() {
    const router = useRouter();
    const plans = await loadPlans();

    return (
        <>
            <Breadcrumb pageName={'Planes'} />
            <div className="rounded-xl shadow-lg drop-shadow-xl border-stroke bg-dark-gray px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <div className="mb-6 text-xl font-semibold text-black dark:text-white flex justify-between">
                    <SearchBar />
                    <Button onClick={() => router.push("/dashboard/plans/newplan")} className="bg-gradient text-white rounded-full">Nuevo +</Button>
                </div>
                <div className="flex flex-col">
                    <div className="grid grid-cols-3 rounded-t-xl bg-gray-2 dark:bg-meta-4 sm:grid-cols-6 bg-dark-gray-soft">
                        <div className=" xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Titulo
                            </h5>
                        </div>
                        <div className=" text-center xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Descripción
                            </h5>
                        </div>
                        <div className="text-center xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Duración
                            </h5>
                        </div>
                        <div className="hidden text-center sm:block xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Precio
                            </h5>
                        </div>
                        <div className="hidden text-center sm:block xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Status
                            </h5>
                        </div>
                        <div className="hidden text-center sm:block xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Acciones
                            </h5>
                        </div>
                    </div>

                    {plans.map((plans: any) => (
                        <div
                            className={`grid grid-cols-3 sm:grid-cols-6 ${plans.uuid === dataData.length - 1
                                ? ""
                                : "border-b border-stroke dark:border-strokedark"
                                }`}
                            key={plans.uuid}
                        >
                            <div className="flex items-center gap-3 xl:p-5">
                                <div className="flex-shrink-0">
                                    <Image src='https://www.bestgym.com.mx/storage/home-page/October2022/Pi91Mtw824ZU4RMpU3ej.jpg' alt="data" width={60} height={60} className=' rounded-full' />
                                </div>
                                <p className="hidden text-black dark:text-white sm:block">
                                    {plans.name}
                                </p>
                            </div>

                            <div className="flex items-center justify-center xl:p-5">
                                <p className="text-black dark:text-white">{plans.description}K</p>
                            </div>

                            <div className="flex items-center justify-center xl:p-5">
                                <p className="text-meta-3">{plans.duration}</p>
                            </div>

                            <div className="flex items-center justify-center xl:p-5">
                                <p className="text-meta-3">${plans.price}</p>
                            </div>

                            <div className="hidden items-center justify-center sm:flex xl:p-5">
                                <p className="text-black dark:text-white">{plans.status}</p>
                            </div>

                            <div className="hidden items-center justify-center sm:flex xl:p-5">
                                <div className="mb-6 text-xl font-semibold text-black dark:text-white flex items-center">
                                    <Button onClick={() => router.push("/joining-request")} className="bg-gradient-to-t text-primary rounded-full mr-2">
                                        <AiFillEdit className="text-primary text-[24px]" />
                                    </Button>
                                    <Button onClick={() => router.push("/joining-request")} className="bg-gradient-to-t text-primary rounded-full mr-2">
                                        <AiFillDelete className="text-primary text-[24px]" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PlansPage

function axios(arg0: { method: string; url: string; data: any; headers: { apikey: string; }; }) {
    throw new Error('Function not implemented.');
}
