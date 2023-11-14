"use client"

import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import React, { useState } from 'react'
import { SearchBar } from '@/components/ui/SearchBar';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { SimpleTable } from '@/components/preline/Tables/SimpleTable';

function UsersPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  return (
    <>
      <Breadcrumb pageName={'Usuarios'} />
      <div className="rounded-xl shadow-lg drop-shadow-xl border-stroke bg-dark-gray px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="mb-6 text-xl font-semibold text-black dark:text-white flex justify-between">
          <SearchBar />
          <Button onClick={() => router.push("/dashboard/plans/newplan")} className="bg-gradient text-white rounded-full">Nuevo +</Button>
        </div>
        <SimpleTable
          columns={[
            {
              id: "firstName",
              name: "Nombre(s)"
            },
            {
              id: "lastName",
              name: "Apellidos"
            },
            {
              id: "status",
              name: "Estado"
            },
            {
              id: "userName",
              name: "Nombre de usuario"
            },
          ]}
          rows={[]}
          isLoading={isLoading}
        />
        {/* <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-t-xl bg-gray-2 dark:bg-meta-4 sm:grid-cols-7 bg-dark-gray-soft">
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
                Status
              </h5>
            </div>
            <div className="hidden text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Username
              </h5>
            </div>
            <div className="hidden text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Password
              </h5>
            </div>
            <div className="hidden text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Rol
              </h5>
            </div>
            <div className="hidden text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Acciones
              </h5>
            </div>
          </div>
          <Suspense fallback={<Loader />}>
            <UsersTable />
          </Suspense>
        </div> */}
      </div>
    </>
  )
}

export default UsersPage;