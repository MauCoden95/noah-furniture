import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { EmailUpdateForm } from './EmailUpdateForm';
import { SuccessAlert } from './SuccessAlert';

export const EmailUpdate = () => {

    const [userId, setUserId] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        confirmEmail: ''
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
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.email == '' || formData.confirmEmail == '') {
            Swal.fire({
                title: 'Error!',
                text: 'Campos vacíos',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }


        if (formData.email != formData.confirmEmail) {
            Swal.fire({
                title: 'Error!',
                text: 'Los emails no coinciden',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }


        updateFetch(userId); 
           
       

        
    }

    const updateFetch = (id) =>{
        axios.put(`http://127.0.0.1:8000/api/email-update/${id}`, { email: formData.email })
             .then((response) => {
                console.log(response);
                setShowSuccessAlert(true);

                setTimeout(() => {
                    setShowSuccessAlert(false);
                }, 500);
                
             })

             console.log("Email: "+formData.email);
    }



    return (
        <div>
            {showSuccessAlert && <SuccessAlert title='Email actualizado' icon='success' />}
            <EmailUpdateForm handleSubmit={handleSubmit} handleChange={handleChange} />
        </div>

    )
}
