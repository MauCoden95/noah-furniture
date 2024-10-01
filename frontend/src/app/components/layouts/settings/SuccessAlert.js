import React from 'react'
import Swal from 'sweetalert2'

export const SuccessAlert = ({title,icon}) => {
    return (
        <div>
            {Swal.fire({
                title: title,
                icon: icon,
                confirmButtonText: 'Ok'
            })}
        </div>
    )
}
