import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

export const FormLogin = ({onLoginSuccess}) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        LoginFetch();
    };

    const LoginFetch = () => {
        axios.post('http://127.0.0.1:8000/api/user-login', formData)
            .then(response => {
                if (response.data.success) {
                    setFormData({
                        email: '',
                        password: ''
                    });
                    Swal.fire({
                        title: 'Login correcto',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    localStorage.setItem('token',response.data.token);
                    localStorage.setItem('user',JSON.stringify(response.data.user));

                    if (onLoginSuccess) {
                        onLoginSuccess();
                    } 
                }
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Credenciales incorrectas',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
    }



    return (
        <form onSubmit={handleSubmit} autoComplete='off'>
            <input
                className='w-full p-2'
                type='text'
                name='email'
                placeholder='Email'
                onChange={handleChange}
            />
            <input
                className='w-full p-2 my-5'
                type='password'
                name='password'
                placeholder='Contraseña'
                onChange={handleChange}
            />
            <input
                className='w-full p-2 mb-5 cursor-pointer bg-orange-600 hover:bg-orange-400 duration-300'
                type='submit'
                value='Enviar'
            />
            <h3 className='text-center my-3 '>¿No tiene cuenta?</h3>
            <Link href="/registro" className='block text-center text-orange-600 hover:text-orange-800 duration-300'>
                Registrese acá
            </Link>
        </form>
    )
    
    
    
}

