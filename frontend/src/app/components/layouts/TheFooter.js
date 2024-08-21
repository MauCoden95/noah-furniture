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
        <footer className="w-full h-auto px-14 bg-teal-600">
            <div className='py-7 flex items-center justify-between'>
                <div className='w-2/5 h-full'>
                    <img className="w-28" src="/assets/img/logoLight.png" />
                    <p className='text-sm text-white text-justify mt-7'>
                        Descubre muebles de calidad y diseño excepcional. Contáctanos para transformar tu hogar con estilo. Síguenos en redes sociales para más inspiración.
                    </p>
                    <div className='mt-12'>
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

            </div>

            <div className='w-full py-6 mt-12 border-t border-white'>
                <h3 className='text-center text-white'>&copy; 2024 Noah Furniture - Todos los derechos reservados</h3>
            </div>
        </footer>
    )
}
