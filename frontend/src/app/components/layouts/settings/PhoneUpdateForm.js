import React from 'react'

export const PhoneUpdateForm = ({handleSubmit, handleChange}) => {
    return (
        <section className='w-full px-8 sm:px-14 mb-16'>
            <div className='w-full my-16'>
                <h3 className='text-lg sm:text-xl'>Cambiar teléfono</h3>
                <div className='w-full flex flex-col sm:flex-row gap-4'>
                    <p className='w-full sm:w-2/4 text-sm mt-2'>
                        Actualiza tu número de teléfono para mantener tu cuenta segura y accesible. Al modificar este dato, podrás recibir códigos de verificación directamente en tu móvil para restablecer tu contraseña o confirmar operaciones importantes.
                    </p>

                    <form onSubmit={handleSubmit} className='w-full sm:w-2/4' autoComplete='off'>
                        <input onChange={handleChange} className='block w-full p-3 border-2 border-gray-700 rounded-lg' type='number' name="phone" placeholder='Ingrese nuevo teléfono...' />
                        <input onChange={handleChange} className='block w-full p-3 border-2 border-gray-700 rounded-lg mt-2' type='number' name="phoneConfirm" placeholder='Confirmar teléfono...' />
                        <button className='w-full sm:w-2/4 p-3 rounded-lg mt-3 bg-orange-500 hover:bg-orange-300 duration-300'>
                            Cambiar teléfono
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
