import React from 'react'
import dynamic from 'next/dynamic';
import { FormRegister } from '../components/layouts/FormRegister';


const LazyImage = dynamic(() => import('../components/layouts/LazyImage'));

export default function Register() {
  return (
    <section className='px-14'>
      <h2 className='text-center my-8 text-3xl'>Registro</h2>
      <div className='flex flex-col md:flex-row gap-10 my-16'>
        <LazyImage
          style="block m-auto"
          src="/assets/img/register.svg"
          alt="Registro"
          width={400}
          height={300}
        />
        <FormRegister />
      </div>
    </section>
  )
}
