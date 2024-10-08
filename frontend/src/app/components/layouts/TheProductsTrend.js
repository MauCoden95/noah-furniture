import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import ProductPopup from './ProductPopup';
import dynamic from 'next/dynamic';

import useProducts from '@/app/hooks/useProducts';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const LazyImage = dynamic(() => import('./LazyImage'));

export const TheProductsTrend = () => {
    const products = useProducts();
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleClosePopup = () => {
        setSelectedProduct(null);
    };

    return (
        <section className="w-full h-auto px-8 md:px-14 my-28 mb-7">
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
                    <SwiperSlide key={product.id} className="my-20">
                        <div className="w-full h-72 flex items-center justify-center bg-gray-300 rounded-md">
                            <LazyImage
                                styles="block m-auto w-56"
                                src={`/assets/img/${product.image}`}
                                alt={product.name}
                                width={450}
                                height={300}
                            />
                        </div>
                        <h3 className="font-bold text-xl lg:text-3xl my-5">{product.name}</h3>
                        <div className="my-3 flex">
                            {[...Array(5)].map((_, index) => (
                                <FontAwesomeIcon
                                    key={index}
                                    className="text-yellow-500 text-xl"
                                    icon={faStar}
                                />
                            ))}
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <h4 className="font-bold text-xl text-center">{product.price} $</h4>
                            <button onClick={() => handleProductClick(product)}>
                                <FontAwesomeIcon
                                    className="bg-orange-600 hover:bg-orange-400 duration-300 p-3 rounded-full"
                                    icon={faPlus}
                                />
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="swiper-pagination mt-7"></div>
            </Swiper>


            {selectedProduct && (
                <ProductPopup product={selectedProduct} onClose={handleClosePopup} />
            )}

        </section>
    );
};