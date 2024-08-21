import React from 'react';
import { useAllProducts } from '@/app/hooks/useAllProducts';
import { CategoryFilter } from './CategoryFilter';
import { ProductList } from './ProductList';

export const AllProducts = () => {
    const { productsByCategory, setCategory } = useAllProducts();

    return (
        <section className="w-full min-h-[400px] px-5 md:px-14 my-28">
            <div className="w-full flex flex-col md:flex-row justify-between">
                <h2 className="text-3xl md:text-5xl font-bold">PRODUCTOS</h2>
                <CategoryFilter changeCategory={setCategory} />
            </div>
            <ProductList products={productsByCategory} />
        </section>
    );
};
