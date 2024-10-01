import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

export const TheFooter = () => {
    return (
        <footer className="w-full h-auto px-8 md:px-14 bg-teal-600">
            <div className='py-7 flex flex-col md:flex-row items-start justify-between gap-10'>
                <div className='w-full md:w-2/5 h-full'>
                    <img className="w-20 md:w-28" src="/assets/img/logoLight.png" />
                    <p className='text-sm text-white text-justify mt-7'>
                        Descubre muebles de calidad y diseño excepcional. Contáctanos para transformar tu hogar con estilo. Síguenos en redes sociales para más inspiración.
                    </p>
                    <div className='mt-12 flex justify-start'>
                        <a className='cursor-pointer rounded-full mr-3 px-2 pt-3 pb-2 border border-white text-white hover:bg-orange-600 duration-300'>
                            <FontAwesomeIcon className='text-2xl' icon={faFacebookSquare} />
                        </a>

                        <a className='cursor-pointer rounded-full mr-3 px-2 pt-3 pb-2 border border-white text-white hover:bg-orange-600 duration-300'>
                            <FontAwesomeIcon className='text-2xl' icon={faInstagramSquare} />
                        </a>

                        <a className='cursor-pointer rounded-full mr-3 px-2 pt-3 pb-2 border border-white text-white hover:bg-orange-600 duration-300'>
                            <FontAwesomeIcon className='text-2xl' icon={faTwitterSquare} />
                        </a>

                        <a className='cursor-pointer rounded-full mr-3 px-2 pt-3 pb-2 border border-white text-white hover:bg-orange-600 duration-300'>
                            <FontAwesomeIcon className='text-2xl' icon={faLinkedin} />
                        </a>
                    </div>
                </div>

                <div className='w-full md:w-1/5 h-auto mt-3 flex flex-col'>
                    <h2 className='text-xl mb-3 text-white font-bold'>Informacion</h2>

                    <a className='mb-6 cursor-pointer text-white hover:text-orange-600 duration-300'>
                        Nosotros
                    </a>

                    <a className='mb-6 cursor-pointer text-white hover:text-orange-600 duration-300'>
                        Productos
                    </a>

                    <a className='mb-6 cursor-pointer text-white hover:text-orange-600 duration-300'>
                        Descubrir
                    </a>

                    <a className='mb-6 cursor-pointer text-white hover:text-orange-600 duration-300'>
                        Contacto
                    </a>
                </div>

                <div className='w-full md:w-1/5 h-auto mt-3 flex flex-col'>
                    <h2 className='text-xl mb-3 text-white font-bold'>Soporte</h2>

                    <a className='mb-6 cursor-pointer text-white hover:text-orange-600 duration-300'>
                        Carrito
                    </a>

                    <a className='mb-6 cursor-pointer text-white hover:text-orange-600 duration-300'>
                        Login
                    </a>

                    <a className='mb-6 cursor-pointer text-white hover:text-orange-600 duration-300'>
                        Condiciones
                    </a>

                    <a className='mb-6 cursor-pointer text-white hover:text-orange-600 duration-300'>
                        Privacidad
                    </a>
                </div>

                <div className='w-full md:w-1/5 h-auto mt-3 flex flex-col'>
                    <h2 className='text-xl mb-3 text-white font-bold'>Categorías</h2>

                    <a className='mb-6 cursor-pointer text-white hover:text-orange-600 duration-300'>
                        Productos
                    </a>

                    <a className='mb-6 cursor-pointer text-white hover:text-orange-600 duration-300'>
                        Muebles
                    </a>

                    <a className='mb-6 cursor-pointer text-white hover:text-orange-600 duration-300'>
                        Wallpapers
                    </a>

                    <a className='mb-6 cursor-pointer text-white hover:text-orange-600 duration-300'>
                        Adicional
                    </a>
                </div>
            </div>

            <div className='w-full py-6 mt-12 border-t border-white'>
                <h3 className='text-center text-white'>&copy; 2024 Noah Furniture - Todos los derechos reservados</h3>
            </div>
        </footer >
    )
}
