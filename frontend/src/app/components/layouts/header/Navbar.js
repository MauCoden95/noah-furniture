import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const Navbar = ({ showNavbar, toggleShowNavbar }) => {
  return (
    <nav className={`${showNavbar ? 'navbar_show' : 'navbar_hidden'} absolute top-0 left-0 z-50 w-screen h-screen sm:w-3/6 bg-orange-600 md:bg-transparent sm:relative sm:h-full md:ml-14`}>
      <button className="absolute top-5 right-5 sm:hidden text-4xl hover:text-orange-500 duration-300" onClick={toggleShowNavbar}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <ul className="w-full h-full flex flex-col md:flex-row items-center justify-evenly md:justify-between">
        <li className="text-2xl md:text-base pb-2 hover:border-b-4 hover:border-orange-500">
          <Link href="/" onClick={toggleShowNavbar}>Inicio</Link>
        </li>
        <li className="text-2xl md:text-base pb-2 hover:border-b-4 hover:border-orange-500">
          <Link href="/nosotros" onClick={toggleShowNavbar}>Nosotros</Link>
        </li>
        <li className="text-2xl md:text-base pb-2 hover:border-b-4 hover:border-orange-500">
          <Link href="/productos" onClick={toggleShowNavbar}>Productos</Link>
        </li>
        <li className="text-2xl md:text-base pb-2 hover:border-b-4 hover:border-orange-500">
          <Link href="/contacto" onClick={toggleShowNavbar}>Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};
