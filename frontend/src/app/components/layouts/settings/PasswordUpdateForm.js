import React from 'react'

export const PasswordUpdateForm = ({handleSubmit,handleChange}) => {
  return (
    <section className='w-full px-8 sm:px-14 mb-16'>
      <div className='w-full my-16'>
        <h3 className='text-lg sm:text-xl'>Cambiar contraseña</h3>
        <div className='w-full flex flex-col sm:flex-row gap-4'>
          <p className='w-full sm:w-2/4 text-sm mt-2'>
            Fortalece la seguridad de tu cuenta y protege tu información personal cambiando tu contraseña de forma regular. Crea una contraseña única y robusta, combinando mayúsculas, minúsculas, números y símbolos.
          </p>

          <form onSubmit={handleSubmit} className='w-full sm:w-2/4' autoComplete='off'>
            <input className='block w-full p-3 border-2 border-gray-700 rounded-lg' name="password" onChange={handleChange} type='password' placeholder='Ingrese nueva contraseña...' />
            <input className='block w-full p-3 border-2 border-gray-700 rounded-lg mt-2' name="confirmPassword" onChange={handleChange} type='password' placeholder='Confirmar contraseña...' />
            <button className='w-full sm:w-2/4 p-3 rounded-lg mt-3 bg-orange-500 hover:bg-orange-300 duration-300'>
              Cambiar contraseña
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
