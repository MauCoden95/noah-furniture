import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export const ProductList = ({ products }) => {
    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {products && products.length > 0 ? (
                products.map((product) => (
                    <div key={product.id} className="w-full h-auto mb-5 p-4 rounded-md">
                        <div className="relative w-full h-72 flex items-center justify-center bg-gray-300 rounded-md">
                            <Link className='absolute top-2 right-2 text-2xl hover:text-orange-500 duration-300' href={`http://localhost:3000/productos/${product.id}`}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </Link>
                            <img className="block m-auto w-56" src={`/assets/img/${product.image}`} alt={product.name} />
                        </div>
                        <div className="w-full mt-10 flex items-center justify-between">
                            <h3 className="font-bold text-xl my-5">{product.name}</h3>
                            <h4 className="font-bold text-xl text-center text-orange-600">{product.price} $</h4>
                        </div>
                    </div>
                ))
            ) : (
                <h3 className="col-span-1 md:col-span-2 lg:col-span-3 text-center text-2xl font-bold">No hay productos para esa categoría</h3>
            )}
        </div>
    );
};
