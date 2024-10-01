import React from 'react'

export const EmailUpdateForm = ({handleSubmit, handleChange}) => {
    return (
        <section className='w-full px-8 sm:px-14 mb-16'>
            <h1 className='text-xl sm:text-2xl py-3 border-b-2 border-black'>Configuración</h1>

            <div className='w-full my-8'>
                <h3 className='text-lg sm:text-xl'>Cambiar correo electrónico</h3>
                <div className='w-full flex flex-col sm:flex-row gap-4'>
                    <p className='w-full sm:w-2/4 text-sm mt-2'>
                        Seguridad y contacto: Mantén tu información de contacto actualizada. Modifica tu correo electrónico para asegurar que siempre recibas nuestras comunicaciones y puedas acceder a tu cuenta de forma segura.
                    </p>

                    <form onSubmit={handleSubmit} className='w-full sm:w-2/4' autoComplete='off'>
                        <input className='block w-full p-3 border-2 border-gray-700 rounded-lg' name='email' type='email' onChange={handleChange} placeholder='Ingrese nuevo correo...' />
                        <input className='block w-full p-3 border-2 border-gray-700 rounded-lg mt-2' name='confirmEmail' type='email' onChange={handleChange} placeholder='Confirmar correo...' />
                        <button className='w-full sm:w-2/4 p-3 rounded-lg mt-3 bg-orange-500 hover:bg-orange-300 duration-300'>
                            Cambiar correo
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}
