import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';

import useProducts from '@/app/hooks/useProducts';


import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';




export const TheProductsTrend = () => {

    const products = useProducts();

    return (
        <section className="w-full h-auto px-5 md:px-14 my-28 mb-7">
            <h2 className="text-3xl font-bold text-center">Productos tendencia</h2>

            <Swiper
                spaceBetween={10}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                    type: 'bullets',
                }}
                modules={[Pagination]}
                className="mySwiper w-full h-auto pb-6"
            >
                {products.map((product) => (
                    <SwiperSlide className="my-20">
                        <div className="w-full h-72 flex items-center justify-center bg-gray-300 rounded-md">
                            <img className="block m-auto w-56" src={`/assets/img/${product.image}`} alt={product.name} />
                        </div>
                        <h3 className="font-bold text-xl lg:text-3xl my-5">{product.name}</h3>
                        <div className="my-3 flex">
                            <FontAwesomeIcon className="text-yellow-500 text-xl" icon={faStar} />
                            <FontAwesomeIcon className="text-yellow-500 text-xl" icon={faStar} />
                            <FontAwesomeIcon className="text-yellow-500 text-xl" icon={faStar} />
                            <FontAwesomeIcon className="text-yellow-500 text-xl" icon={faStar} />
                            <FontAwesomeIcon className="text-yellow-500 text-xl" icon={faStar} />
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <h4 className="font-bold text-xl text-center">{product.price} $</h4>
                            <button><FontAwesomeIcon className="bg-orange-600 hover:bg-orange-400 duration-300 p-3 rounded-full" icon={faPlus} /></button>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="swiper-pagination mt-7"></div>
            </Swiper>
        </section>

    )
}
