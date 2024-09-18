import React, { useState, useEffect } from 'react';
import { FormLogin } from '../FormLogin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const AuthButton = () => {
    const [login, setLogin] = useState(true);
    const [logged, setLogged] = useState('');

    useEffect(() => {
        handleLogin();
    }, []);

    const handleLogin = () => {
        if (localStorage.getItem('user') && localStorage.getItem('token')) {
            setLogged(true);
        } else {
            setLogged(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setLogged(false);
    };

    const showLogin = () => {
        setLogin(!login);
    };

    return (
        <div className="relative w-2/5 sm:w-full h-full flex items-center justify-end">
            {
                logged ? (
                    <button onClick={handleLogout} className="px-5 py-3 rounded-full text-xl bg-orange-500 hover:bg-orange-300 duration-300">
                        Cerrar sesión
                    </button>
                ) : (
                    <>
                        <button className="md:text-2xl mr-3 hover:text-orange-500 duration-300">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
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
    );
};
