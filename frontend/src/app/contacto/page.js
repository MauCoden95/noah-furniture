import React from 'react'
import Image from 'next/image'

export default function page() {
    return (
        <div>
            <section className='w-full py-8 px-4 md:px-14 bg-white'>
                <h1 className='text-center my-5 text-3xl'>Contactános</h1>
                <div className='w-full flex flex-col md:flex-row gap-6 items-start justify-between'>
                    <form className='w-full md:w-2/4'>
                        <input className='w-full mb-6 bg-gray-200 border-b-2 border-orange-500 p-3 placeholder-gray-500' type="text" placeholder='Nombre...' />
                        <input className='w-full my-6 bg-gray-200 border-b-2 border-orange-500 p-3 placeholder-gray-500' type="number" placeholder='Teléfono...' />
                        <input className='w-full my-6 bg-gray-200 border-b-2 border-orange-500 p-3 placeholder-gray-500' type="email" placeholder='Correo electrónico...' />
                        <textarea className='w-full h-48 my-6 bg-gray-200 border-b-2 border-orange-500 p-3 placeholder-gray-500' placeholder='Mensaje...'>
                        </textarea>
                        <button className='w-full py-4 text-2xl sm:text-base bg-orange-500 hover:bg-orange-400 duration-300'>
                            Enviar
                        </button>
                    </form>
                    <div className="w-full md:w-2/4 h-64 md:h-96 relative">
                        <Image
                            src={`/assets/img/Contact.svg`}
                            alt="Contacto"
                            priority
                            layout="fill" 
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
