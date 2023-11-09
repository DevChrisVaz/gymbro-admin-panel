"use client"

import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import React from 'react'

async function loadPlans() {
    const apiKey = "d5eab0a1c186b9b80f5a62919a953fb397c2c50d2b95f117fc1b368a840f08da";
    const url = 'https://gymbro-services.onrender.com/api/plans'; // Reemplaza con la URL correcta

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'apikey': apiKey
        }
    });
    // Agregar un retraso de 2000 ms (2 segundos)
    //await new Promise(resolve => setTimeout(resolve, 2000));

    return await response.json();
}

async function PlansTable() {
    const router = useRouter();
    const plans = await loadPlans();

    return (
        <>
            {plans.map((plans: any) => (
                <div className={`grid grid-cols-3 sm:grid-cols-6 ${plans.uuid === plans.length - 1 ? "" : "border-b border-stroke dark:border-strokedark"}`} key={plans.uuid} >
                    <div className="flex items-center gap-3 xl:p-5">
                        <div className="flex-shrink-0">
                            <Image src='https://www.bestgym.com.mx/storage/home-page/October2022/Pi91Mtw824ZU4RMpU3ej.jpg' alt="data" width={60} height={60} className=' rounded-full' />
                        </div>
                        <p className="hidden text-black dark:text-white sm:block">
                            {plans.title}
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
        </>
    )
}

export default PlansTable