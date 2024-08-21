import { useEffect, useState } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {

    const response = await fetch(
      "http://127.0.0.1:8000/api/products-random"
    );
    const data = await response.json();

    setProducts(data);
  }

  return products;
}

export default useProducts;