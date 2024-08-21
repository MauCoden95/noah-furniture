import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const TheHeader = () => {
  return (
    <header className="w-full h-auto px-14 flex items-center justify-between">
          <Link href="/">
            <img className="w-28" src="/assets/img/logo.png" />
          </Link>

          <nav className="w-2/5 h-full">
            <ul className="w-full h-full flex items-center justify-between">
              <li className="text-xl pb-2 hover:border-b-4 hover:border-orange-500">
                <Link href="/">Inicio</Link>
              </li>
              <li className="text-xl pb-2 hover:border-b-4 hover:border-orange-500">
                <Link href="/">Nosotros</Link>
              </li>
              <li className="text-xl pb-2 hover:border-b-4 hover:border-orange-500">
                <Link href="/">Productos</Link>
              </li>
              <li className="text-xl pb-2 hover:border-b-4 hover:border-orange-500">
                <Link href="/">Contacto</Link>
              </li>
            </ul>
          </nav>
          <div className="w-1/6 h-full flex items-center justify-between">
            <button className="text-2xl hover:text-orange-500 duration-300">
              <FontAwesomeIcon icon={faSearch} />
            </button>

            <Link className="px-10 py-3 rounded-full text-xl bg-orange-500 hover:bg-orange-300 duration-300" href="/login">Login</Link>
          </div>
        </header>
  )
}
