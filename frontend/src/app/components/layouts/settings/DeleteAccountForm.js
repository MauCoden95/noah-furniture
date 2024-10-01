import React from 'react'

export const DeleteAccountForm = ({ handleSubmit, handleChange }) => {
    return (
        <section className='w-full px-8 sm:px-14 mb-16'>
            <div className='w-full my-16'>
                <h3 className='text-lg sm:text-xl'>Eliminar cuenta</h3>
                <div className='w-full flex flex-col sm:flex-row gap-4'>
                    <p className='w-full sm:w-2/4 text-sm mt-2'>
                        ¿Deseas eliminar tu cuenta? Esta acción es permanente y eliminará todos tus datos asociados a ella. Antes de continuar, te recomendamos que realices una copia de seguridad de cualquier información importante. Una vez eliminada la cuenta, no podrás recuperarla ni acceder a tus datos.
                    </p>

                    <form onSubmit={handleSubmit} className='w-full sm:w-2/4' autoComplete='off'>
                        <input className='block w-full p-3 border-2 border-gray-700 rounded-lg' onChange={handleChange} name='password' type='password' placeholder='Ingrese contraseña...' />
                        <input className='block w-full p-3 border-2 border-gray-700 rounded-lg mt-2' onChange={handleChange} name='passwordConfirm' type='password' placeholder='Confirme contraseña...' />
                        <button className='w-full sm:w-2/4 p-3 rounded-lg mt-3 bg-red-500 hover:bg-red-400 duration-300'>
                            Eliminar cuenta
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
