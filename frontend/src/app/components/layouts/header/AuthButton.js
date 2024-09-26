import React, { useState, useEffect } from 'react';
import { FormLogin } from '../FormLogin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export const AuthButton = () => {

    const { push } = useRouter();


    //Use State
    const [login, setLogin] = useState(true);
    const [userPannel, setUserPannel] = useState(true);
    const [logged, setLogged] = useState(false); 
    const [user, setUser] = useState(null); 



    //Use Effect
    useEffect(() => {
        handleLogin();
    }, []);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        setUser(storedUser);
    }, [logged]);




    //Consulta si el usuario esta logueado
    const handleLogin = () => {
        if (localStorage.getItem('user') && localStorage.getItem('token')) {
            setLogged(true);
        } else {
            setLogged(false);
        }
    };


    //Cerrar sesion
    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setLogged(false);
        push('/');
    };



    //Mostrar u ocultar el formulario de login
    const showLogin = () => {
        setLogin(!login);
    };



    //Mostrar u ocultar panel del usuario
    const showUserPannel = () => {
        setUserPannel(!userPannel);
    };




    //En caso de que el login sea correcto
    const handleSuccessfulLogin = () => {
        setLogged(true);
        setLogin(false);
    };

    return (
        <div className="relative w-2/5 sm:w-full h-full flex items-center justify-end">
            {
                logged ? (
                    <>
                        <button className="md:text-2xl mr-3 hover:text-orange-500 duration-300">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                        <div className={`${userPannel ? 'login_show' : 'login_hidden'} absolute top-full right-1 sm:right-0 w-52 sm:w-full z-50 min-h-24 py-5 px-6 rounded-md bg-gray-300`}>
                            <Link href="/configuracion" className="block w-full bg-gray-400 hover:bg-gray-500 duration-300 rounded-md text-xl text-center py-3 my-3">
                                Configuración
                            </Link>

                            <Link href="/carrito" className="block w-full bg-gray-400 hover:bg-gray-500 duration-300 rounded-md text-xl text-center py-3 my-3">
                                Mi carrito
                            </Link>

                            <button onClick={handleLogout} className='w-full py-3 rounded-md duration-300 text-xl bg-red-600 hover:bg-red-400'>
                                Cerrar sesión
                            </button>
                        </div>

                        <button onClick={showUserPannel} className="px-5 py-3 rounded-full text-xl bg-orange-500 hover:bg-orange-300 duration-300">
                            {user ? user.name : ''}
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={showLogin} className="px-5 py-3 rounded-full text-xl bg-orange-500 hover:bg-orange-300 duration-300">
                            Login
                        </button>

                        <div className={`${login ? 'login_show' : 'login_hidden'} absolute top-full right-1 sm:right-0 w-52 sm:w-full z-50 min-h-24 py-5 px-6 rounded-md bg-gray-300`}>
                            <FormLogin onLoginSuccess={handleSuccessfulLogin} />
                        </div>
                    </>
                )
            }
        </div>
    );
};
