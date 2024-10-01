import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import { AddressUpdateForm } from './AddressUpdateForm'
import { SuccessAlert } from './SuccessAlert'
import { ErrorAlert } from './ErrorAlert'


export const AddressUpdate = () => {
    const [userId, setUserId] = useState('');
    const [formData, setFormData] = useState({
        address: '',
        city: ''
    });
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

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

        if (formData.address == '' || formData.city == '') {
            Swal.fire({
                title: 'Error!',
                text: 'Campos vacíos',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }
        
        updateFetch(userId);




    }


    const updateFetch = (id) => {
        axios.put(`http://127.0.0.1:8000/api/address-update/${id}`, formData)
            .then((response) => {
                console.log(response);
                setShowSuccessAlert(true);

                setTimeout(() => {
                    setShowSuccessAlert(false);
                }, 500);
            })

        //console.log("Email: " + formData.email);
    }



    return (
        <div>
            {showSuccessAlert && <SuccessAlert title='Dirección actualizada' icon='success' />}
            <AddressUpdateForm handleSubmit={handleSubmit} handleChange={handleChange} />
        </div>

    )
}
