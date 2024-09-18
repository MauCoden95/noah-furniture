import React from 'react'
import LazyImage from '../components/layouts/LazyImage'
import { BannerProducts } from '../components/layouts/products/BannerProducts'
import { ChooseCategory } from '../components/layouts/products/ChooseCategory'

export default function AllProducts() {
    return (
        <div>
            <BannerProducts />
            <ChooseCategory />

        </div>

    )
}
