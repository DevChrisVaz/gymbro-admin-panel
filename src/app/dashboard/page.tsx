"use client"

import { ToastContext, IToast, ToastMapKey } from '@/components/Toast';
import { Button } from '@/components/ui/Button'
import { AuthLocalDataSourceImpl } from '@/features/auth/data/data-sources/auth-local-data-source';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react'

function Dashboard() {

  const { addToast } = useContext(ToastContext);
  const router = useRouter();

  const authLocalDataSource = new AuthLocalDataSourceImpl();

  const createToast = (type: ToastMapKey, message: string) => {
    const newToast: IToast = {
      type: type,
      title: "Random title",
      message
    }

    addToast(newToast);
  }

  const logout = () => {
    authLocalDataSource.removeToken();
    console.log("made it")
    router.push("/login");
  }  

  return (
    <div className='text-white'>
      <h1>Dashboard Home page</h1>
      <Button onClick={() => createToast("success", "Success toast")} className="bg-gradient text-white">Mostrar Success Toast</Button>
      <Button onClick={() => createToast("error", "Error toast")} className="bg-gradient text-white">Mostrar Error Toast</Button>
      <Button onClick={logout} className="bg-gradient text-white">Logout</Button>
    </div>
  );
}

export default Dashboard;