"use client"

import { AreaFormField } from '@/components/ui/AreaFormField';
import { CalendarFormField } from '@/components/ui/CalendarFormField';
import { PasswordFormField } from '@/components/ui/PasswordFormField';
import { TextFormField } from '@/components/ui/TextFormField';
import React from 'react';

export type RegisterFormProps = {

}

const RegisterForm: React.FC<RegisterFormProps> = (props) => {
  return (
    <>
      <div className="px-8 pt-6 mb-1 flex flex-col my-2">
        <div className="text-white mb-5"><p className="text-lg font-semibold">Información del solicitante</p></div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <TextFormField label='First Name' name='firstName' />
            {/* <p className="text-error text-xs italic">Please fill out this field.</p> */}
          </div>
          <div className="md:w-1/2 px-3">
            <TextFormField label='Last Name' name="lastName" />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <TextFormField label='Username' name="userName" />
          </div>
          <div className="md:w-2/3 px-3">
            <PasswordFormField label="Password" name="password" />
            {/* <p className="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p> */}
          </div>
        </div>
        <div className="-mx-3 md:flex mb-2">
          <div className="md:w-2/5 px-3 mb-6 md:mb-0">
            <TextFormField label="Phone Number" name="phone" />
          </div>
          <div className="md:w-2/5 px-3">
            <TextFormField label="Email" name="email" />
          </div>
          <div className="md:w-1/5 px-3">
            <CalendarFormField label="" name="birthdate" />
          </div>
        </div>
      </div>
      <div className="px-8 pt-2 pb-8 mb-2 flex flex-col my-2">
        <div className="text-white mb-5"><p className="text-lg font-semibold">Información del gimnasio</p></div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3 mb-6 md:mb-0">
            <TextFormField label='GYM Name' name='name' />
            {/* <p className="text-error text-xs italic">Please fill out this field.</p> */}
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3 mb-6 md:mb-0">
            <AreaFormField label='Description' name="description" />
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterForm