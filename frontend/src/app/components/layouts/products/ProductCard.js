import React from 'react';
import LazyImage from '../LazyImage';

export default function ProductCard({ product }) {
    return (
        <div className="h-[600px] max-w-sm mx-auto bg-white p-4 shadow-md rounded-lg overflow-hidden">


            <div className='h-56 flex items-center justify-center'>
                <LazyImage
                    style="block m-auto h-24"
                    src={`/assets/img/${product.image}`}
                    alt={product.name}
                    width={450}
                    height={200}
                />
            </div>


            <div className="relative p-4 h-[320px]">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-sm mt-2 text-gray-600">
                    {product.description}
                </p>






                <div className='absolute bottom-0'>
                    <div className="mt-4 text-2xl font-bold text-gray-800">${product.price}</div>


                    <button className="mt-6 w-full bg-orange-500 duration-300 text-white py-2 px-4 rounded-md hover:bg-orange-600">
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};
