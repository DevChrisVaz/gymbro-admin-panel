"use client"

import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import React from 'react'
import Image from "next/image";
import { SearchBar } from '@/components/ui/SearchBar';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

type COSTUMER = {
  logo: string;
  name: string;
  lastname: string;
  emial: string;
  phone: string;
  created: string;
};

const brandData: COSTUMER[] = [
  {
    logo: "https://www.bestgym.com.mx/storage/home-page/October2022/Pi91Mtw824ZU4RMpU3ej.jpg",
    name: "Christian Alexander",
    lastname: "Vazquez Gonzales",
    emial: "chris@correo.com",
    phone: "9995013024",
    created: "19-10-2023"
  },
  {
    logo: "https://www.bestgym.com.mx/storage/home-page/October2022/Pi91Mtw824ZU4RMpU3ej.jpg",
    name: "Andrik Adrian",
    lastname: "Espadas Lopez",
    emial: "andrik@correo.com",
    phone: "999235674",
    created: "15-10-2023"
  }
];

function CostumersPage() {
  const router = useRouter();
  return (
    <>
      <Breadcrumb pageName={'Clientes'} />
      <div className="rounded-xl border border-stroke bg-dark-gray px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="mb-6 text-xl font-semibold text-black dark:text-white flex justify-between">
          <SearchBar />
          <Button onClick={() => router.push("/dashboard/plans/newplan")} className="bg-gradient text-white rounded-full">Nuevo +</Button>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-t-xl bg-gray-2 dark:bg-meta-4 sm:grid-cols-6 bg-dark-gray-soft">
            <div className=" xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Nombes
              </h5>
            </div>
            <div className=" text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Apellidos
              </h5>
            </div>
            <div className="text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Email
              </h5>
            </div>
            <div className="hidden text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Telefono
              </h5>
            </div>
            <div className="hidden text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Fecha Alta
              </h5>
            </div>
            <div className="hidden text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Acciones
              </h5>
            </div>
          </div>

          {brandData.map((brand, key) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-6 ${key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
                }`}
              key={key}
            >
              <div className="flex items-center gap-3 xl:p-5">
                <div className="flex-shrink-0">
                  <Image src={brand.logo} alt="Brand" width={60} height={60} className=' rounded-full' />
                </div>
                <p className="hidden text-black dark:text-white sm:block">
                  {brand.name}
                </p>
              </div>

              <div className="flex items-center justify-center xl:p-5">
                <p className="text-black dark:text-white">{brand.lastname}</p>
              </div>

              <div className="flex items-center justify-center xl:p-5">
                <p className="text-meta-3">{brand.emial}</p>
              </div>

              <div className="hidden items-center justify-center sm:flex xl:p-5">
                <p className="text-black dark:text-white">{brand.phone}</p>
              </div>

              <div className="flex items-center justify-center xl:p-5">
                <p className="text-meta-3">{brand.created}</p>
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

export default CostumersPage