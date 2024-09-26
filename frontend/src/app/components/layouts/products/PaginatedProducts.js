import React, { useEffect, useState } from "react";
import ProductCard from './ProductCard'
import axios from "axios";


export const PaginatedProducts = ({products}) => {
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [page, setPage] = useState(0);
    const itemsPerPage = 6;


    const getFromAndTo = () => {
        const from = page * itemsPerPage;
        const to = from + itemsPerPage;
        return { from, to };
    };

    useEffect(() => {
        const { from, to } = getFromAndTo();
        setDisplayedProducts(products.slice(from, to));
    }, [products, page]);

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (pageNumber) => {
        setPage(pageNumber);
    };


    return (
        <div>
            <div className="w-full mt-5 grid gap-5 grid-cols-3">
                {displayedProducts.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>


            <div className="flex justify-center mt-6">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageClick(index)}
                        className={`mx-1 px-3 py-1 duration-300 ${index === page ? "bg-blue-500 text-white" : "bg-gray-300"
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}
