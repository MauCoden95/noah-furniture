"use client"
import React, { useState, useEffect } from 'react'
import { DeleteAccountForm } from './DeleteAccountForm'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';



export const DeleteAccount = () => {

    const router = useRouter();
    const [userId, setUserId] = useState('');
    const [formData, setFormData] = useState({
        password: '',
        passwordConfirm: ''
    });

    useEffect(() => {
        let userData = JSON.parse(localStorage.getItem('user'));
        setUserId(userData.id);
    }, []);




    //Captura los datos de los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }



    //Envia el formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password == '' || formData.passwordConfirm == '') {
            Swal.fire({
                title: 'Error!',
                text: 'Campos vacíos',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }


        if (formData.password != formData.passwordConfirm) {
            Swal.fire({
                title: 'Error!',
                text: 'Las contraseñas no coinciden',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }


        const passVer = await passwordVerify(formData.password);
        


        if (passVer == true) {
            Swal.fire({
                title: '¿Estás seguro de eliminar su cuenta?',
                text: "¡No podrás revertir esta acción!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, confirmar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    deleteMyAccount(userId);
                    
                }
            })

            
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Contraseña incorrecta',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }

    }





    //Comprueba si la contraseña proporcionada es correcta
    const passwordVerify = async (password) => {
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/verify-password/${userId}`,
                { password: password }
            );
            return response.data.success;
        } catch (err) {
            console.log(err);
            return false;
        }
    }






    //Eliminar la cuenta
    const deleteMyAccount = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/delete-account/${id}`)
            .then((response) => {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                Swal.fire(
                    'Su cuenta se ha eliminado',
                    'Será redireccionado a la página principal.',
                    'success'
                );
                setTimeout(() => {
                    router.push('/');  
                }, 1500);
            })
    }




    return (
        <DeleteAccountForm handleSubmit={handleSubmit} handleChange={handleChange} />
    )
}
