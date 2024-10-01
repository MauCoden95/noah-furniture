import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import axios from 'axios';
import { PhoneUpdateForm } from './PhoneUpdateForm';
import { SuccessAlert } from './SuccessAlert';

export const PhoneUpdate = () => {

    const [userId, setUserId] = useState('');
    const [formData, setFormData] = useState({
        phone: '',
        phoneConfirm: ''
    });
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    useEffect(() => {
        let userData = JSON.parse(localStorage.getItem('user'));
        setUserId(userData.id);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.phone == '' || formData.phoneConfirm == '') {
            Swal.fire({
                title: 'Error!',
                text: 'Campos vacíos',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }


        if (formData.phone != formData.phoneConfirm) {
            Swal.fire({
                title: 'Error!',
                text: 'Los teléfonos no coinciden',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }


        updatePhone(userId);

    }



    const updatePhone = (id) => {
        console.log(formData.phone);
        axios.put(`http://127.0.0.1:8000/api/phone-update/${id}`, { phone: formData.phone })
            .then((response) => {
                setShowSuccessAlert(true);

                setTimeout(() => {
                    setShowSuccessAlert(false);
                }, 500);
            })
            .catch((err) => {
                Swal.fire({
                    title: 'Error!',
                    text: err,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            })
    }




    return (
        <div>
            {showSuccessAlert && <SuccessAlert title='Teléfono actualizado' icon='success' />}
            <PhoneUpdateForm handleSubmit={handleSubmit} handleChange={handleChange} />
        </div>
    )
}
