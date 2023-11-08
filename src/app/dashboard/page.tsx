"use client"

import { ToastContext, IToast, ToastMapKey } from '@/components/Toast';
import { Button } from '@/components/ui/Button'
import React, { useContext } from 'react'

function Dashboard() {

  const { addToast } = useContext(ToastContext);

  const createToast = (type: ToastMapKey, message: string) => {
    const newToast: IToast = {
      type: type,
      title: "Random title",
      message
    }

    addToast(newToast);
  }

  return (
    <div className='text-white'>
      <h1>Dashboard Home page</h1>
      <Button onClick={() => createToast("success", "Success toast")} className="bg-gradient text-white">Mostrar Success Toast</Button>
      <Button onClick={() => createToast("error", "Error toast")} className="bg-gradient text-white">Mostrar Error Toast</Button>
    </div>
  );
}

export default Dashboard;