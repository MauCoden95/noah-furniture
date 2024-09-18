"use client";

import React, { useEffect, useState } from "react";
import LazyImage from "../LazyImage";
import ProductCard from "./ProductCard";
import axios from "axios";

export const ChooseCategory = () => {
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/products");
            const data = response.data;
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        getAllProducts();


    }, []);

    useEffect(() => {
        console.log(products);
    }, [products]);

    return (
        <div className="max-w-7xl mx-auto py-8 px-7 md:px-14">
            <h2 className="text-2xl font-semibold mb-6">Categorías</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                <button className="cursor-pointer flex flex-col items-center">
                    <div className="h-28 flex items-center justify-center p-3">
                        <LazyImage
                            style=""
                            src="/assets/img/cama.png"
                            alt="Banner"
                            width={450}
                            height={300}
                        />
                    </div>
                    <span className="text-center text-xl">Camas</span>
                </button>

                <button className="cursor-pointer flex flex-col items-center">
                    <div className="h-28 flex items-center justify-center p-3">
                        <LazyImage
                            style=""
                            src="/assets/img/desk-gamer.png"
                            alt="Banner"
                            width={450}
                            height={300}
                        />
                    </div>
                    <span className="text-center text-sm">Oficina</span>
                </button>

                <button className="cursor-pointer flex flex-col items-center">
                    <div className="h-28 flex items-center justify-center p-3">
                        <LazyImage
                            style=""
                            src="/assets/img/chair.png"
                            alt="Banner"
                            width={450}
                            height={300}
                        />
                    </div>
                    <span className="text-center text-sm">Sillas</span>
                </button>

                <button className="cursor-pointer flex flex-col items-center">
                    <div className="h-28 flex items-center justify-center p-3">
                        <LazyImage
                            style=""
                            src="/assets/img/LongSofa.png"
                            alt="Banner"
                            width={450}
                            height={300}
                        />
                    </div>
                    <span className="text-center text-sm">Sofás</span>
                </button>

                <button className="cursor-pointer flex flex-col items-center">
                    <div className="h-28 flex items-center justify-center p-3">
                        <LazyImage
                            style=""
                            src="/assets/img/sideboard.png"
                            alt="Banner"
                            width={450}
                            height={300}
                        />
                    </div>
                    <span className="text-center text-sm">Almacenamiento</span>
                </button>

                <button className="cursor-pointer flex flex-col items-center">
                    <div className="h-28 p-4 flex items-center justify-center p-3">
                        <LazyImage
                            style=""
                            src="/assets/img/mirror.png"
                            alt="Banner"
                            width={450}
                            height={300}
                        />
                    </div>
                    <span className="text-center text-sm">Accessorios</span>
                </button>
            </div>

            <div className="w-full mt-5 grid gap-5 grid-cols-3">
                {
                    products.map((item) => (
                        <ProductCard product={item}/>
                    ))
                }
            </div>
        </div>
    );
};
