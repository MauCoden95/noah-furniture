"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import '../../globals.css'


export const TheHeader = () => {

  const [showNavbar, setShowNavbar] = useState(false);

  const toggleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  }

  return (
    <header className="relative w-full h-auto px-8 sm:px-14 flex items-center justify-between">
      <Link href="/">
        <img className="w-20 md:w-28" src="/assets/img/logo.png" />
      </Link>

      <button className="block md:hidden text-2xl" onClick={toggleShowNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <nav className={`${showNavbar ? 'navbar_show' : 'navbar_hidden'} absolute top-0 left-0 z-50 w-screen h-screen sm:w-3/6 bg-orange-600 md:bg-transparent sm:relative sm:h-full`}>
        <button className="absolute top-5 right-5 sm:hidden text-4xl hover:text-orange-500 duration-300" onClick={toggleShowNavbar}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul className="w-full h-full flex flex-col md:flex-row items-center justify-evenly md:justify-between">
          <li className="text-2xl md:text-base pb-2 hover:border-b-4 hover:border-orange-500">
            <Link href="/">Inicio</Link>
          </li>
          <li className="text-2xl md:text-base pb-2 hover:border-b-4 hover:border-orange-500">
            <Link href="/">Nosotros</Link>
          </li>
          <li className="text-2xl md:text-base pb-2 hover:border-b-4 hover:border-orange-500">
            <Link href="/">Productos</Link>
          </li>
          <li className="text-2xl md:text-base pb-2 hover:border-b-4 hover:border-orange-500">
            <Link href="/">Contacto</Link>
          </li>
        </ul>
      </nav>
      <div className="w-2/6 sm:w-2/12 h-full flex items-center justify-between">
        <button className="md:text-2xl hover:text-orange-500 duration-300">
          <FontAwesomeIcon icon={faSearch} />
        </button>

        <Link className="px-5 py-3 rounded-full text-xl bg-orange-500 hover:bg-orange-300 duration-300" href="/login">Login</Link>
      </div>
    </header>
  )
}
