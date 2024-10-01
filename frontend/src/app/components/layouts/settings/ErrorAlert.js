import React from 'react'
import Swal from 'sweetalert2'

export const ErrorAlert = ({text}) => {
  return (
    <div>
        {
            Swal.fire({
                title: 'Error!',
                text: text,
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
    </div>
  )
}
