"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



export default function About() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });



  }, []);



  return (
    <main>
      <section className='relative w-full h-[500px]'>
        <img className='absolute top-0 w-full h-full z-10' src='/assets/img/banner-about.jpg' />
        <div className='absolute top-0 bg_orange w-full h-full z-20 flex items-center justify-center'>
          <h1 className='text-4xl z-30'>Nuestra Pasión por el Diseño y la Calidad en Muebles</h1>
        </div>
      </section>

      <section className='relative w-full min-h-[300px] p-14'>
        <h2 className='text-center my-8 text-2xl'>Sobre nosotros</h2>
        <p className='text-justify mb-5'>
          En Noah Furniture, nuestra pasión por el diseño y la calidad nos impulsa a ofrecer muebles que transforman espacios. Cada pieza que seleccionamos o fabricamos está pensada para combinar estilo, funcionalidad y durabilidad, adaptándose a las necesidades de cada cliente. Con años de experiencia en el mercado, trabajamos con dedicación para que nuestros productos sean el reflejo de buen gusto y confort, creando ambientes únicos que invitan al bienestar.
        </p>

        <p className='text-justify'>
          Nuestro objetivo es brindar una experiencia de compra personalizada y cercana. Nos enfocamos en entender las necesidades de nuestros clientes, ofreciendo asesoramiento experto para ayudar a encontrar el mueble ideal. En Noah Furniture, creemos que cada espacio tiene una historia, y nuestros muebles están diseñados para ser parte de ella, creando hogares llenos de estilo, comodidad y personalidad.
        </p>
      </section>

      <section class="h-auto px-14 py-10 bg-gradient-to-r from-orange-600 to-orange-400">
        <div className='w-full flex gap-6 items-center justify-between'>
          <div className='w-1/4 h-48 px-3 border-4 border-white'>
            <h4 className='my-4 text-7xl text-center text-white'>99%</h4>
            <p className='text-center text-white'>
              de clientes satisfechos
            </p>
          </div>

          <div className='w-1/4 h-48 px-3 border-4 border-white'>
            <h4 className='my-4 text-7xl text-center text-white'>+10</h4>
            <p className='text-center text-white'>
              años de experiencia
            </p>
          </div>
          <div className='w-1/4 h-48 px-3 border-4 border-white'>
            <h4 className='my-4 text-7xl text-center text-white'>7</h4>
            <p className='text-center text-white'>
              días de promedio de entrega
            </p>
          </div>
          <div className='w-1/4 h-48 border-4 border-white'>
            <h4 className='my-4 text-7xl text-center text-white'>95%</h4>
            <p className='text-center text-white'>
              productos hechos de materiales sostenibles
            </p>
          </div>
        </div>
      </section>

      <section className='relative w-full min-h-[350px] px-14 py-10'>
        <div className='absolute left-0 w-2/5 h-64 px-14 rounded-tr-lg rounded-br-lg bg-gradient-to-r from-orange-600 to-orange-400'>
          <h3 className='text-center text-2xl my-6 text-white'>Nuestros servicios</h3>
          <p className='text-sm text-white'>
            Ofrecemos asesoramiento personalizado, envío rápido, muebles a medida y garantía de calidad en cada producto. Nuestro equipo está dedicado a transformar tus espacios con diseño, comodidad y funcionalidad.
          </p>
        </div>
        <div className='w-auto absolute right-24 top-1/2 transform -translate-y-1/2 flex gap-4 items-center justify-between'>
          <div className='w-40 h-52 bg-gray-300 rounded-md px-4'>
            <h2 className='text-center my-3'>Asesoramiento Personalizado</h2>
            <p className='text-xs my-3'>
              Te ayudamos a elegir los muebles ideales para tu espacio, ofreciendo recomendaciones basadas en tus necesidades y estilo.
            </p>
          </div>

          <div className='w-40 h-52 bg-gray-300 rounded-md px-4'>
            <h2 className='text-center my-3'>Muebles a Medida</h2>
            <p className='text-xs my-3'>
              Diseñamos y fabricamos muebles personalizados según tus especificaciones para que se adapten perfectamente a tus espacios y gustos.
            </p>
          </div>

          <div className='w-40 h-52 bg-gray-300 rounded-md px-4'>
            <h2 className='text-center my-3'>Entrega Rápida y Segura</h2>
            <p className='text-xs my-3'>
              Garantizamos un proceso de entrega eficiente y seguro, con plazos de envío rápidos para que disfrutes de tus muebles sin demoras.
            </p>
          </div>
        </div>
      </section>

      <section className='w-full h-auto py-14'>
        <h3 className='my-7 text-center text-3xl'>Nuestros partners</h3>
        <div className='flex flex-wrap justify-center gap-4'>
          <img className='w-1/6 h-auto rounded-md' src='/assets/img/partner1.png' alt='Servicio 1' />
          <img className='w-1/6 h-auto rounded-md' src='/assets/img/partner2.png' alt='Servicio 2' />
          <img className='w-1/6 h-auto rounded-md' src='/assets/img/partner3.png' alt='Servicio 3' />
          <img className='w-1/6 h-auto rounded-md' src='/assets/img/partner4.png' alt='Servicio 4' />
          <img className='w-1/6 h-auto rounded-md' src='/assets/img/partner5.png' alt='Servicio 5' />
        </div>
      </section>
    </main>
  );
}

