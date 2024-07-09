"use client"
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';



export default function Home() {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [productsByCategory, setProductsByCategory] = useState([]);


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });


    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
      console.log(products);
    };

    fetchProducts();


    changeProducts('');
  }, []);

  const getProducts = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/products-random');
    const data = await res.json();
    return data;
  };

  //Obtener productos por categoria
  const changeProducts = async (category) => {
    setCategory(category);
    const res = await fetch(`http://127.0.0.1:8000/api/products/${category}`);
    const data = await res.json();

    setProductsByCategory(data);
    console.log(data); // Log the updated data directly
    return data;
  }

  return (
    <main>
      <section className="w-full min-h-[400px] px-10 mt-12 md:mt-0 md:px-14 flex flex-col md:flex-row items-center">
        <div data-aos="fade-up" className="w-full md:w-2/4 h-full flex flex-col">
          <h1 className="text-2xl md:text-4xl text-center md:text-left">
            Diseño y <span className="text-orange-500">comodidad</span> para cada rincón.
          </h1>
          <p className="text-lg md:text-xl text-justify my-5">
            Descubre nuestra exclusiva colección de muebles diseñados para brindar elegancia y funcionalidad a cada rincón de tu hogar. Ofrecemos piezas únicas que reflejan tu personalidad y buen gusto.
          </p>
          <div className="my-5 flex flex-col md:flex-row items-center">
            <a className="cursor-pointer text-lg md:text-xl bg-orange-500 hover:bg-orange-400 duration-300 px-5 py-3 rounded-full text-center md:text-left">
              Descubrir ahora
            </a>

            <button className="mt-5 md:mt-0 md:ml-8 flex items-center">
              <FontAwesomeIcon className="border-4 border-orange-500 p-4 rounded-full" icon={faPlay} />
              <span className="ml-5 leading-8 text-xl">Ver video</span>
            </button>
          </div>
        </div>
        <img data-aos="fade-left" className="w-full md:w-2/5 mt-3 md:mt-0 md:ml-20" src="/assets/img/Banner.png" />
      </section>

      <section data-aos="fade-left" className="w-full h-auto px-5 md:px-14 mt-24 mb-7 flex flex-col md:flex-row gap-7 items-center justify-between">
        <div className="w-full h-72 bg-red-200 rounded-lg p-5 flex items-center justify-evenly md:w-2/4 md:h-64">
          <div className="h-auto flex flex-col justify-between md:h-4/6">
            <div>
              <h3 className="text-xl font-bold md:text-2xl">Sofas Largos</h3>
              <p>
                Sofá cómodo y elegante.
              </p>
            </div>
            <a href="#" className="mt-5 md:mt-0 underline text-orange-600 hover:text-orange-400 duration-300">COMPRAR AHORA</a>
          </div>
          <img className="w-2/4 mt-3 md:w-2/5 md:mt-0 md:ml-20" src="/assets/img/LongSofa.png" />
        </div>

        <div className="w-full h-72 bg-slate-300 rounded-lg p-5 flex items-center justify-evenly md:w-2/4 md:h-64">
          <div className="h-auto flex flex-col justify-between md:h-4/6">
            <div>
              <h3 className="text-xl font-bold md:text-2xl">Silla de comedor</h3>
              <p>
                Silla clásica y funcional.
              </p>
            </div>
            <a href="#" className="mt-5 md:mt-0 underline text-orange-600 hover:text-orange-400 duration-300">COMPRAR AHORA</a>
          </div>
          <img className="w-2/4 mt-3 md:w-2/5 md:mt-0 md:ml-20" src="/assets/img/Chair.png" />
        </div>
      </section>

      <section className="w-full h-auto px-5 md:px-14 my-28 mb-7">
        <h2 className="text-3xl font-bold text-center">Productos tendencia</h2>

        <Swiper
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-auto pb-6"
        >
          {products.map((product) => (
            <SwiperSlide className="my-20">
              <div className="w-full h-72 flex items-center justify-center bg-gray-300 rounded-md">
                <img className="block m-auto w-56" src={`/assets/img/${product.image}`} alt={product.name} />
              </div>
              <h3 className="font-bold text-xl lg:text-3xl my-5">{product.name}</h3>
              <div className="my-3 flex">
                <FontAwesomeIcon className="text-yellow-500 text-xl" icon={faStar} />
                <FontAwesomeIcon className="text-yellow-500 text-xl" icon={faStar} />
                <FontAwesomeIcon className="text-yellow-500 text-xl" icon={faStar} />
                <FontAwesomeIcon className="text-yellow-500 text-xl" icon={faStar} />
                <FontAwesomeIcon className="text-yellow-500 text-xl" icon={faStar} />
              </div>
              <div className="w-full flex items-center justify-between">
                <h4 className="font-bold text-xl text-center">{product.price} $</h4>
                <button><FontAwesomeIcon className="bg-orange-600 hover:bg-orange-400 duration-300 p-3 rounded-full" icon={faPlus} /></button>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination mt-7"></div>
        </Swiper>
      </section>

      <section className="w-full min-h-[400px] px-5 md:px-14 my-28">
        <div className="w-full flex flex-col md:flex-row justify-between">
          <h2 className="text-3xl md:text-5xl font-bold">PRODUCTOS</h2>
          <div className="w-auto flex flex-wrap items-center mt-5 md:mt-0">
            <button onClick={() => changeProducts('')} className="mx-2 md:mx-3 text-sm md:text-base hover:text-orange-500 duration-300">Todos</button>
            <button onClick={() => changeProducts('Sillas')} className="mx-2 md:mx-3 text-sm md:text-base hover:text-orange-500 duration-300">Sillas</button>
            <button onClick={() => changeProducts('Almacenamiento')} className="mx-2 md:mx-3 text-sm md:text-base hover:text-orange-500 duration-300">Almacenamiento</button>
            <button onClick={() => changeProducts('Camas')} className="mx-2 md:mx-3 text-sm md:text-base hover:text-orange-500 duration-300">Camas</button>
            <button onClick={() => changeProducts('Accesorios')} className="mx-2 md:mx-3 text-sm md:text-base hover:text-orange-500 duration-300">Accesorios</button>
            <button onClick={() => changeProducts('Sofas')} className="mx-2 md:mx-3 text-sm md:text-base hover:text-orange-500 duration-300">Sofas</button>
            <button onClick={() => changeProducts('Oficinas')} className="mx-2 md:mx-3 text-sm md:text-base hover:text-orange-500 duration-300">Oficinas</button>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {productsByCategory.length > 0 ? (
            productsByCategory.map((product) => (
              <div key={product.id} className="w-full h-auto mb-5 p-4 rounded-md">
                <div className="w-full h-72 flex items-center justify-center bg-gray-300 rounded-md">
                  <img className="block m-auto w-56" src={`/assets/img/${product.image}`} alt={product.name} />
                </div>
                <div className="w-full mt-10 flex items-center justify-between">
                  <h3 className="font-bold text-xl my-5">{product.name}</h3>
                  <h4 className="font-bold text-xl text-center text-orange-600">{product.price} $</h4>
                </div>
              </div>
            ))
          ) : (
            <h3 className="col-span-1 md:col-span-2 lg:col-span-3 text-center text-2xl font-bold">No hay productos para esa categoria</h3>
          )}
        </div>
      </section>


      <section className="w-full h-[400px] px-5 md:px-14 my-28 bg-gray-300 flex items-center justify-between">
          <div className="w-2/4">
              <h2 className="text-4xl font-bold text-center">50% OFF en Sofás</h2>
          </div>

          <img className="block m-auto w-2/4" src="/assets/img/Sofa.png" alt="Sofa" />
      </section>
    </main>
  );
}
