import { useEffect, useState } from "react";


const useProductDetail = ({id}) => {
  const [product, setProduct] = useState([]);

  const productId = parseInt(id);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {

    const response = await fetch(
      `http://127.0.0.1:8000/api/product/${productId}`
    );
    const data = await response.json();

    setProduct(data);
    
  }

  return product;
}

export default useProductDetail;


