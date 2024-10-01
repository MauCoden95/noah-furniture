import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { PasswordUpdateForm } from './PasswordUpdateForm';
import { SuccessAlert } from './SuccessAlert';

export const PasswordUpdate = () => {

  const [userId, setUserId] = useState('');
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
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

    console.log(formData);

    if (formData.password == '' || formData.confirmPassword == '') {
      Swal.fire({
        title: 'Error!',
        text: 'Campos vacíos',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }


    if (formData.password != formData.confirmPassword) {
      Swal.fire({
        title: 'Error!',
        text: 'Las contraseñas no coinciden',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }


    updateFetch(userId);




  }

  const updateFetch = (id) => {
    axios.put(`http://127.0.0.1:8000/api/password-update/${id}`, { password: formData.password })
      .then((response) => {
        console.log(response);
        setShowSuccessAlert(true);

        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 500);

      })


  }

  return (
    <div>
      {showSuccessAlert && <SuccessAlert title='Contraseña actualizada' icon='success' />}
      <PasswordUpdateForm handleSubmit={handleSubmit} handleChange={handleChange} />
    </div>
  )
}
