import { useState, useEffect } from 'react';

export const useAllProducts = (initialCategory = '') => {
    const [category, setCategory] = useState(initialCategory);
    const [productsByCategory, setProductsByCategory] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch(`http://127.0.0.1:8000/api/products/${category}`);
            const data = await res.json();
            setProductsByCategory(data);
        };
        fetchProducts();
    }, [category]);

    return { category, productsByCategory, setCategory };
};
