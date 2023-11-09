"use client"

import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import React from 'react'

async function loadUsers() {
    const apiKey = "d5eab0a1c186b9b80f5a62919a953fb397c2c50d2b95f117fc1b368a840f08da";
    const url = 'https://gymbro-services.onrender.com/api/gyms/54e2fb71-1492-4ae3-a758-aa4edb4342a5/users'

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'apikey': apiKey
        }
    });

    return await response.json();
}

async function UsersTable() {
    const router = useRouter();
    const users = await loadUsers();

    return (
        <>
            {users.map((users: any) => (
                <div
                    className={`grid grid-cols-3 sm:grid-cols-7 ${users.userName === users.length - 1
                        ? ""
                        : "border-b border-stroke dark:border-strokedark"
                        }`}
                    key={users.userName}
                >
                    <div className="flex items-center gap-3 xl:p-5">
                        <div className="flex-shrink-0">
                            <Image src='https://www.bestgym.com.mx/storage/home-page/October2022/Pi91Mtw824ZU4RMpU3ej.jpg' alt="users" width={60} height={60} className=' rounded-full' />
                        </div>
                        <p className="hidden text-black dark:text-white sm:block">
                            {users.userName}
                        </p>
                    </div>

                    <div className="flex items-center justify-center xl:p-5">
                        <p className="text-black dark:text-white">{users.rol}</p>
                    </div>

                    <div className="flex items-center justify-center xl:p-5">
                        <p className="text-meta-3">{users.gym}</p>
                    </div>

                    <div className="hidden items-center justify-center sm:flex xl:p-5">
                        <p className="text-black dark:text-white">{users.usernme}</p>
                    </div>

                    <div className="flex items-center justify-center xl:p-5">
                        <p className="text-meta-3">{users.password}</p>
                    </div>

                    <div className="flex items-center justify-center xl:p-5">
                        <p className="text-meta-3">{users.rol}</p>
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

export default UsersTable