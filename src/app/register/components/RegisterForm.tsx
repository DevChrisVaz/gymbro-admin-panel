"use client"

import { AreaFormField } from '@/components/ui/AreaFormField';
import { CalendarFormField } from '@/components/ui/CalendarFormField';
import { PasswordFormField } from '@/components/ui/PasswordFormField';
import { TextFormField } from '@/components/ui/TextFormField';
import { AxiosApiRestClient } from '@/core/data/frameworks/datasources/rest/axios/axios-implementation';
import axiosConfig from '@/core/data/frameworks/datasources/rest/axios/axios.config';
import { RegisterGYMDto } from '@/features/gyms/application/dto/RegisterGYM.dto';
import { RegisterGYMUseCase } from '@/features/gyms/application/usecases/register-gym-usecase';
import { GYMRemoteDataSourceImpl } from '@/features/gyms/infrastructure/data/data-sources/gym-remote-data-source';
import { GYMRepositoryImpl } from '@/features/gyms/infrastructure/data/repositories/gym.repository';
import registerGYMSchema from '@/features/gyms/infrastructure/data/validations/yup/gym-schema';
import { Formik } from 'formik';
import React, { useState } from 'react';

export type RegisterFormProps = {

}

const RegisterForm: React.FC<RegisterFormProps> = (props) => {
  const initialValues: RegisterGYMDto = {
    dateOfBirth: "",
    email: "",
    description: "",
    phone: '',
    name: '',
    user: {
      firstName: "",
      lastName: '',
      userName: '',
      password: '',
    }
  };

  const registerGYMUseCase = new RegisterGYMUseCase(
    new GYMRepositoryImpl(
      new GYMRemoteDataSourceImpl(
        new AxiosApiRestClient(axiosConfig)
      )
    )
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerGYMSchema}
      onSubmit={(values, actions) => {
        registerGYMUseCase.run(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="px-8 pt-6 mb-1 flex flex-col my-2">
            <div className="text-white mb-5"><p className="text-lg font-semibold">Información del solicitante</p></div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <TextFormField
                  label='First Name'
                  name='user.firstName'
                  onChange={handleChange}
                  error={errors.user?.firstName}
                />
                
              </div>
              <div className="md:w-1/2 px-3">
                <TextFormField
                  label='Last Name'
                  name="user.lastName"
                  onChange={handleChange}
                  error={errors.user?.lastName}
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                <TextFormField
                  label='Username'
                  name="user.userName"
                  onChange={handleChange}
                  error={errors.user?.userName}
                />
              </div>
              <div className="md:w-2/3 px-3">
                <PasswordFormField
                  label="Password"
                  name="user.password"
                  onChange={handleChange}
                  error={errors.user?.password}
                />
                {/* <p className="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p> */}
              </div>
            </div>
            {/* <div className="-mx-3 md:flex mb-2">
              <div className="md:w-2/5 px-3 mb-6 md:mb-0">
                <TextFormField
                  label="Phone Number"
                  name="phone"
                // onChange={handleChange}
                />
              </div>
              <div className="md:w-2/5 px-3">
                <TextFormField
                  label="Email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-1/5 px-3">
                <CalendarFormField
                  label=""
                  name="birthdate"
                // onChange={handleChange}
                />
              </div>
            </div> */}
          </div>
          <div className="px-8 pt-2 pb-8 mb-2 flex flex-col my-2">
            <div className="text-white mb-5"><p className="text-lg font-semibold">Información del gimnasio</p></div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3 mb-6 md:mb-0">
                <TextFormField
                  label='GYM Name'
                  name='name'
                  onChange={handleChange}
                  error={errors.name}
                />
                {/* <p className="text-error text-xs italic">Please fill out this field.</p> */}
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3 mb-6 md:mb-0">
                <AreaFormField
                  label='Description'
                  name="description"
                  onChange={handleChange}
                  value={values.description}
                  error={errors.description}
                />
              </div>
            </div>
          </div>
          <input type="submit" value="Registrarse" />
        </form>
      )}
    </Formik>
  )
}

export default RegisterForm