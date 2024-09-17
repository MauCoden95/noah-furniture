import React, { useEffect, useState } from 'react';
import LazyImage from './LazyImage';

const ProductPopup = ({ product, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = (product.price * quantity);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div
        className={`bg-white px-6 py-10 rounded-lg shadow-lg w-11/12 md:w-4/6 relative transition-transform duration-300 transform ${isVisible ? 'scale-100' : 'scale-90'} flex flex-col md:flex-row items-center justify-evenly`}
      >
        <LazyImage
          styles="w-full md:w-3/6 min-h-64 bg-gray-400 p-2 rounded-xl"
          src={`/assets/img/${product.image}`}
          alt={product.name}
          width={450}
          height={300}
        />

        <div className="flex flex-col justify-center items-start w-full md:w-2/5 mt-4 md:mt-0">
          <button
            className="absolute top-4 right-4 text-2xl text-black hover:text-gray-700"
            onClick={handleClose}
          >
            &#x2715;
          </button>

          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>

          <div className="flex items-center space-x-4 mb-2">
            <span className="text-lg font-bold text-green-600">${product.price}</span>
          </div>

          <div className="flex items-center space-x-2 text-xl">
            <button
              className="border px-3 py-1 rounded-md"
              onClick={() => handleQuantityChange('decrease')}
            >
              -
            </button>
            <span className='text-xl'>{quantity}</span>
            <button
              className="border px-3 py-1 rounded-md text-xl"
              onClick={() => handleQuantityChange('increase')}
            >
              +
            </button>
            <span className="font-bold ml-4">= ${totalPrice}</span>
          </div>

          <button className="mt-4 bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg">
            Add to Cart
          </button>

          
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
