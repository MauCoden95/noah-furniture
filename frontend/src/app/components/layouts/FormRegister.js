"use client"

import React, { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';


export const FormRegister = () => {
    const [formData, setFormData] = useState({
        name: '',
        dni: '',
        phone: '',
        address: '',
        city: '',
        email: '',
        password: '',
        confirmPassword: ''
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
        registerFetch();
    };

    const registerFetch = () => {

        if (formData.password === formData.confirmPassword) {
            axios.post('http://127.0.0.1:8000/api/user-register', formData)
            .then(response => {
                if (response.data.success) {
                    setFormData({
                        name: '',
                        dni: '',
                        phone: '',
                        address: '',
                        city: '',
                        email: '',
                        password: ''
                    });
                    Swal.fire({
                        title: 'Registro exitoso',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                } 
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Hubo un error al registrar el usuario',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'Las contraseñas no coinciden',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }

        

    }

    return (
        <form className='w-full md:w-2/4 grid gap-2 grid-cols-2' onSubmit={handleSubmit} autoComplete='off'>
            <input type="text" id="name" name="name" placeholder="Nombre" required className="w-full p-3 border-b-2 border-orange-500 my-3" onChange={handleChange} />
            <input type="text" id="dni" name="dni" placeholder="Documento" required className="w-full p-3 border-b-2 border-orange-500 my-3" onChange={handleChange} />
            <input type="text" id="phone" name="phone" placeholder="Teléfono" required className="w-full p-3 border-b-2 border-orange-500 my-3" onChange={handleChange} />
            <input type="text" id="address" name="address" placeholder="Dirección" required className="w-full p-3 border-b-2 border-orange-500 my-3" onChange={handleChange} />
            <input type="text" id="city" name="city" placeholder="Ciudad" required className="w-full p-3 border-b-2 border-orange-500 my-3" onChange={handleChange} />
            <input type="email" id="email" name="email" placeholder="Correo Electrónico" required className="w-full p-3 border-b-2 border-orange-500 my-3" onChange={handleChange} />
            <div className='relative w-full'>
                <input type="password" id="password" name="password" placeholder="Contraseña" required className="w-full p-3 border-b-2 border-orange-500 my-3" onChange={handleChange} />
            </div>
            <input type="password" id="password" name="confirmPassword" placeholder="Confirmar contraseña" required className="w-full p-3 border-b-2 border-orange-500 my-3" onChange={handleChange} />
            <button className='w-full p-3 mt-5 rounded-md bg-orange-500 hover:bg-orange-300 duration-300' type="submit">Registrarse</button>
        </form>
    )
}
