import React from 'react'
import LazyImage from '../LazyImage'

export const BannerProducts = () => {
    return (
        <section class="bg-white py-16 px-7 md:px-14">
            <div class="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
                <div class="md:w-1/2 text-center md:text-left">
                    <h3 class="text-orange-500 text-sm font-bold mb-2">OFERTA HASTA 30% DE DESCUENTO</h3>
                    <h1 class="text-4xl font-bold mb-4">Sillas gamer</h1>
                    <p class="text-gray-600 text-lg mb-14">Las mejores sillas gamer del mercado, con diseño ergonómico y materiales de alta calidad para largas sesiones de juego.</p>
                    <a href="#" class="bg-orange-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 transition">Comprar ahora</a>
                </div>



                <div class="md:w-1/2 flex justify-center mb-8 md:mb-0">
                    <LazyImage
                        style=""
                        src="/assets/img/SillaGamer.png"
                        alt="Banner"
                        width={450}
                        height={300}
                    />
                </div>
            </div>
        </section>
    )
}
