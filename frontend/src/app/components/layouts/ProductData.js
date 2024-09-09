import React, { useEffect } from 'react';
import useProductDetail from '@/app/hooks/useProductDetail';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export const ProductData = ({ id }) => {

    const product = useProductDetail({ id });

    useEffect(() => {
        console.log(product);
    }, [product]);

    return (
        <div className='relative'>
            <Link className='absolute top-2 right-2 text-2xl' href={`http://localhost:3000`}>
                <FontAwesomeIcon icon={faArrowLeft} />
                 Volver
            </Link>
            {product && (
                <div className='w-full flex flex-col md:flex-row items-center justify-evenly'>
                    <img className='w-full md:w-2/5' src={`/assets/img/${product.image}`} />
                    <div className='w-full md:w-3/6 mt-5 md:mt-0'>
                        <h2 className='text-2xl md:text-3xl font-bold my-5'>{product.name}</h2>
                        <p className='text-justify'>{product.description}</p>
                        <div className='w-full md:w-40 my-5 flex justify-between overflow-hidden rounded-lg'>
                            <button className='w-1/3 md:w-2/5 py-1 bg-gray-400 hover:bg-orange-500 duration-300 text-2xl'>-</button>
                            <span className='py-1 text-xl md:text-2xl'>0</span>
                            <button className='w-1/3 md:w-2/5 py-1 bg-gray-400 hover:bg-orange-500 duration-300 text-2xl'>+</button>
                        </div>
                        <button className='w-full md:w-auto px-6 py-3 text-2xl md:text-base rounded-md bg-orange-500 hover:bg-orange-300 duration-300'>Añadir al carrito</button>
                        <p className='my-6 md:my-4 text-xl md:text-2xl text-center md:text-left'>{product.price} <span className='text-orange-600'> $</span></p>
                    </div>
                </div>
            )}
        </div>
    );
};
