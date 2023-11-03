import React from 'react'

function NewPlanPage() {
    return (
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 p-2">
            <div className="flex flex-col gap-9">
                {/* <!-- Contact Form --> */}
                <div className="rounded-sm border border-stroke bg-dark-gray shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark p-4">
                        <h3 className="font-medium text-black dark:text-primary">
                            Nuevo Plan
                        </h3>
                    </div>
                    <form action="#" className='p-4'>
                        <div className="p-6.5">
                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-primary">
                                        Titulo
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Ingrese el titulo del plan"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-dark-gray-soft dark:focus:border-primary"
                                    />
                                </div>

                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-primary">
                                        Duración
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Ingrese la duración del plan"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-dark-gray-soft dark:focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="mb-4.5 mt-2 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-primary">
                                        Precio
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Ingrese el precio del plan"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-dark-gray-soft dark:focus:border-primary"
                                    />
                                </div>

                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-primary">
                                        Status
                                    </label>
                                    <div className="relative z-20 bg-transparent dark:bg-dark-gray-soft">
                                    <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-dark-gray-soft dark:focus:border-primary">
                                        <option value="">Seleccione el status</option>
                                        <option value="">ACTIVO</option>
                                        <option value="">DESACTIVO</option>
                                    </select>
                                    
                                </div>
                                </div>
                            </div>

                            <div className="mb-6 mt-3">
                                <label className="mb-2.5 block text-black dark:text-primary">
                                    Descripción
                                </label>
                                <textarea
                                    rows={2}
                                    placeholder="Agrege una descripcion del plan"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-dark-gray-soft dark:focus:border-primary"
                                ></textarea>
                            </div>

                            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-white">
                                Crear
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewPlanPage