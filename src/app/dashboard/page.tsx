"use client"

import { IToast, ToastMapKey } from '@/components/Toast/Toast.d';
import { ToastContext } from '@/components/Toast/context';
import { Button } from '@/components/ui/Button'
import React, { useContext } from 'react'

function Dashboard() {

  const { setToastList } = useContext(ToastContext);

  const createToast = (type: ToastMapKey) => {
    const newToast: IToast = {
      type: type,
      title: "Random title",
      message: "Este es un toast"
    }

    setToastList(prev => [...prev, newToast]);
  }

  return (
    <div className='text-white'>
      <h1>Dashboard Home page</h1>
      <Button onClick={() => createToast("success")} className="bg-gradient text-white">Mostrar Toast</Button>
    </div>
  );
}

export default Dashboard;