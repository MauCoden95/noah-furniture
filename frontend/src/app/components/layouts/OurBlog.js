import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faStar, faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';



export const OurBlog = () => {
  return (
    <section className="w-full min-h-[400px] px-5 md:px-14">
      <h2 className="text-center text-3xl mt-12 mb-8 font-bold">Nuestro Blog</h2>
      <p className="text-center">
        Explora nuestra sección de blog para obtener ideas, consejos y novedades sobre muebles y decoración que transformarán tu hogar.
      </p>
      <div className="w-full my-16 flex flex-col md:flex-row gap-8 items-center justify-between">
        <div className="w-full md:w-1/3">
          <img className="w-full h-56 sm:h-44" src="../assets/img/Blog.jpg" />
          <div className="my-5 flex">
            <h2 className="text-gray-500">
              <FontAwesomeIcon className="mr-1" icon={faUser} />
              Admin
            </h2>
            <h2 className="ml-6 text-gray-500">
              <FontAwesomeIcon className="mr-1" icon={faCalendar} />
              Abril 2024
            </h2>
          </div>
          <h3 className="font-bold text-xs">
            Tendencias de Muebles para Este Año: Estilos y Colores Clave
          </h3>
        </div>

        <div className="w-full md:w-1/3">
          <img className="w-full h-56 sm:h-44" src="../assets/img/Blog2.jpg" />
          <div className="my-5 flex">
            <h2 className="text-gray-500">
              <FontAwesomeIcon className="mr-1" icon={faUser} />
              Admin
            </h2>
            <h2 className="ml-6 text-gray-500">
              <FontAwesomeIcon className="mr-1" icon={faCalendar} />
              Mayo 2024
            </h2>
          </div>
          <h3 className="font-bold text-xs">
            Cómo Seleccionar Muebles Perfectos para Cada Espacio
          </h3>
        </div>

        <div className="w-full md:w-1/3">
          <img className="w-full h-56 sm:h-44" src="../assets/img/Blog3.jpg" />
          <div className="my-5 flex">
            <h2 className="text-gray-500">
              <FontAwesomeIcon className="mr-1" icon={faUser} />
              Admin
            </h2>
            <h2 className="ml-6 text-gray-500">
              <FontAwesomeIcon className="mr-1" icon={faCalendar} />
              Agosto 2024
            </h2>
          </div>
          <h3 className="font-bold text-xs">
            Ideas para Renovar tu Sala con Muebles Multifuncionales
          </h3>
        </div>
      </div>
    </section>

  )
}
