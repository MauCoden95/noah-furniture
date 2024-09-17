"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { FormLogin } from './FormLogin'
import '../../globals.css'

export const TheHeader = () => {

  const [showNavbar, setShowNavbar] = useState(false);
  const [login, setLogin] = useState(false);
  const [logged, setLogged] = useState('');

  const toggleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  }

  const showLogin = () => {
    setLogin(!login);
  }

  useEffect(() => {
    handleLogin();
  }, []);

  const handleLogin = () => {
    if (localStorage.getItem('user') && localStorage.getItem('token')) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setLogged(false);
  }

  return (
    <header className="relative w-full h-auto px-8 sm:px-14 flex items-center justify-between">
      <Link href="/">
        <img className="w-20 md:w-28" src="/assets/img/logo.png" alt="Logo" />
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

      <div className="relative w-2/5 sm:w-3/12 h-full flex items-center justify-end">
        <button className="md:text-2xl mr-3 hover:text-orange-500 duration-300">
          <FontAwesomeIcon icon={faSearch} />
        </button>

        {
          logged ? (
            <button onClick={handleLogout} className="px-5 py-3 rounded-full text-xl bg-orange-500 hover:bg-orange-300 duration-300">
              Cerrar sesión
            </button>
          ) : (
            <>
              <button onClick={showLogin} className="px-5 py-3 rounded-full text-xl bg-orange-500 hover:bg-orange-300 duration-300">
                Login
              </button>

              <div className={`${login ? 'login_show' : 'login_hidden'} absolute top-full right-1 sm:right-0 w-52 sm:w-full z-50 min-h-24 py-5 px-6 rounded-md bg-gray-300`}>
                <FormLogin />
              </div>
            </>
          )
        }
      </div>
    </header>
  );
}
