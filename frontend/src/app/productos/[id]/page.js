"use client"

import React from 'react'
import { ProductData } from '@/app/components/layouts/ProductData';


export default function Productos({params}) {


    const { id } = params;


    return (
        <section className='w-full min-h-[300px] py-10 px-14'>
                <ProductData id={id} />
        </section>
    )
}
