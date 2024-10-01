import React from 'react'

export const AddressUpdateForm = ({handleSubmit, handleChange}) => {
    return (
        <section className='w-full px-8 sm:px-14 mb-16'>
            <div className='w-full my-16'>
                <h3 className='text-lg sm:text-xl'>Cambiar domicilio</h3>
                <div className='w-full flex flex-col sm:flex-row gap-4'>
                    <p className='w-full sm:w-2/4 text-sm mt-2'>
                        Mantén tu información actualizada para recibir tus pedidos y comunicaciones en el lugar correcto. Modifica tu dirección de envío para asegurarte de que tus paquetes lleguen a destino de manera segura y oportuna.
                    </p>

                    <form onSubmit={handleSubmit} className='w-full sm:w-2/4' autoComplete='off'>
                        <input className='block w-full p-3 border-2 border-gray-700 rounded-lg' onChange={handleChange} name='address' type='text' placeholder='Ingrese nueva dirección...' />
                        <input className='block w-full p-3 border-2 border-gray-700 rounded-lg mt-2' onChange={handleChange} name='city' type='text' placeholder='Ingrese nueva ciudad...' />
                        <button className='w-full sm:w-2/4 p-3 rounded-lg mt-3 bg-orange-500 hover:bg-orange-300 duration-300'>
                            Cambiar domicilio
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
