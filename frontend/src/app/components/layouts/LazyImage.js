import Image from "next/image";
import React from 'react'

const LazyImage = ({ styles, src, alt, width, height }) => {
    return (
        <Image
            className={styles}
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority
        />
    )
}


export default LazyImage;