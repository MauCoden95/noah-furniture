"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from './header/Navbar';
import { AuthButton } from './header/AuthButton';
import '../../globals.css';

export const TheHeader = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className="relative w-full h-auto px-8 sm:px-14 flex items-center justify-between">
      <Link href="/">
        <img className="w-20 md:w-28" src="/assets/img/logo.png" alt="Logo" />
      </Link>

      <button className="block md:hidden text-2xl" onClick={toggleShowNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <Navbar showNavbar={showNavbar} toggleShowNavbar={toggleShowNavbar} />

      <div className="relative w-2/5 sm:w-3/12 h-full flex items-center justify-end">
        <AuthButton />
      </div>
    </header>
  );
};
