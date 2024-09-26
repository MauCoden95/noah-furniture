"use client"
import React, { useEffect } from 'react';
import useUserAuthenticated from '../hooks/useUserAuthenticated';
import { redirect } from 'next/navigation';

export default function Configuracion() {
  const { isAuthenticated, loading } = useUserAuthenticated();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      redirect('/');
    }
  }, [isAuthenticated, loading]);



  return (
    <div>
      <section className='w-full px-8 sm:px-14 mb-16'>
        <h1 className='text-xl sm:text-2xl py-3 border-b-2 border-black'>Configuración</h1>

        <div className='w-full my-8'>
          <h3 className='text-lg sm:text-xl'>Cambiar correo electrónico</h3>
          <div className='w-full flex flex-col sm:flex-row gap-4'>
            <p className='w-full sm:w-2/4 text-sm mt-2'>
              Seguridad y contacto: Mantén tu información de contacto actualizada. Modifica tu correo electrónico para asegurar que siempre recibas nuestras comunicaciones y puedas acceder a tu cuenta de forma segura.
            </p>

            <form className='w-full sm:w-2/4'>
              <input className='block w-full p-3 border-2 border-gray-700 rounded-lg' type='email' placeholder='Ingrese nuevo correo...' />
              <input className='block w-full p-3 border-2 border-gray-700 rounded-lg mt-2' type='email' placeholder='Confirmar correo...' />
              <button className='w-full sm:w-2/4 p-3 rounded-lg mt-3 bg-orange-500 hover:bg-orange-300 duration-300'>
                Cambiar correo
              </button>
            </form>
          </div>
        </div>

      </section>

      <section className='w-full px-8 sm:px-14 mb-16'>
        <div className='w-full my-16'>
          <h3 className='text-lg sm:text-xl'>Cambiar contraseña</h3>
          <div className='w-full flex flex-col sm:flex-row gap-4'>
            <p className='w-full sm:w-2/4 text-sm mt-2'>
              Fortalece la seguridad de tu cuenta y protege tu información personal cambiando tu contraseña de forma regular. Crea una contraseña única y robusta, combinando mayúsculas, minúsculas, números y símbolos.
            </p>

            <form className='w-full sm:w-2/4'>
              <input className='block w-full p-3 border-2 border-gray-700 rounded-lg' type='password' placeholder='Ingrese nueva contraseña...' />
              <input className='block w-full p-3 border-2 border-gray-700 rounded-lg mt-2' type='password' placeholder='Confirmar contraseña...' />
              <button className='w-full sm:w-2/4 p-3 rounded-lg mt-3 bg-orange-500 hover:bg-orange-300 duration-300'>
                Cambiar contraseña
              </button>
            </form>
          </div>
        </div>
      </section>



      <section className='w-full px-8 sm:px-14 mb-16'>
        <div className='w-full my-16'>
          <h3 className='text-lg sm:text-xl'>Cambiar teléfono</h3>
          <div className='w-full flex flex-col sm:flex-row gap-4'>
            <p className='w-full sm:w-2/4 text-sm mt-2'>
                Actualiza tu número de teléfono para mantener tu cuenta segura y accesible. Al modificar este dato, podrás recibir códigos de verificación directamente en tu móvil para restablecer tu contraseña o confirmar operaciones importantes.
            </p>

            <form className='w-full sm:w-2/4'>
              <input className='block w-full p-3 border-2 border-gray-700 rounded-lg' type='number' placeholder='Ingrese nuevo teléfono...' />
              <input className='block w-full p-3 border-2 border-gray-700 rounded-lg mt-2' type='number' placeholder='Confirmar teléfono...' />
              <button className='w-full sm:w-2/4 p-3 rounded-lg mt-3 bg-orange-500 hover:bg-orange-300 duration-300'>
                Cambiar teléfono
              </button>
            </form>
          </div>
        </div>
      </section>



      <section className='w-full px-8 sm:px-14 mb-16'>
        <div className='w-full my-16'>
          <h3 className='text-lg sm:text-xl'>Cambiar domicilio</h3>
          <div className='w-full flex flex-col sm:flex-row gap-4'>
            <p className='w-full sm:w-2/4 text-sm mt-2'>
                Mantén tu información actualizada para recibir tus pedidos y comunicaciones en el lugar correcto. Modifica tu dirección de envío para asegurarte de que tus paquetes lleguen a destino de manera segura y oportuna. 
            </p>

            <form className='w-full sm:w-2/4'>
              <input className='block w-full p-3 border-2 border-gray-700 rounded-lg' type='text' placeholder='Ingrese nueva dirección...' />
              <input className='block w-full p-3 border-2 border-gray-700 rounded-lg mt-2' type='text' placeholder='Ingrese nueva ciudad...' />
              <button className='w-full sm:w-2/4 p-3 rounded-lg mt-3 bg-orange-500 hover:bg-orange-300 duration-300'>
                Cambiar domicilio
              </button>
            </form>
          </div>
        </div>
      </section>




    </div>
  );
}
