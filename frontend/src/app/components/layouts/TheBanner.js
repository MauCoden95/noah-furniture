import React, { useState } from 'react'
import { faPlay, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TheBanner = () => {

    const [srcVideo, setSrcVideo] = useState('/assets/video/Banner.mp4');
    const [video, setVideo] = useState(false);

    const videosUrls = ['/assets/video/Banner.mp4', '/assets/video/Banner2.mp4', '/assets/video/Banner3.mp4']


    const changeSrcVideo = (src) => {
        setSrcVideo(src);
    }

    const toggleVideo = () => {
        setVideo(!video);
    }


    return (
        <section className="reative w-full min-h-[400px] px-10 mt-12 md:mt-16 md:px-14">
            <div className='flex flex-col md:flex-row items-center'>
                <div data-aos="fade-up" className="w-full md:w-2/4 h-full flex flex-col">
                    <h1 className="text-2xl sm:text-xl md:text-4xl text-center md:text-left">
                        Diseño y <span className="text-orange-500">comodidad</span> para cada rincón.
                    </h1>
                    <p className="text-lg md:text-xl text-justify my-5">
                        Descubre nuestra exclusiva colección de muebles diseñados para brindar elegancia y funcionalidad a cada rincón de tu hogar. Ofrecemos piezas únicas que reflejan tu personalidad y buen gusto.
                    </p>
                    <div className="my-5 flex flex-col md:flex-row items-center">
                        <a className="cursor-pointer text-lg  md:text-xl bg-orange-500 hover:bg-orange-400 duration-300 px-5 py-3 rounded-full text-center md:text-left">
                            Descubrir ahora
                        </a>

                        <button onClick={toggleVideo} className="mt-5 md:mt-0 md:ml-8 flex items-center">
                            <FontAwesomeIcon className="border-4 border-orange-500 p-4 rounded-full" icon={faPlay} />
                            <span className="ml-5 leading-8 text-xl">Ver video</span>
                        </button>



                    </div>
                </div>
                <img data-aos="fade-left" className="w-full md:w-2/5 z-20 mt-3 md:mt-0 md:ml-20" src="/assets/img/Banner.png" />

                <div className={`${video ? 'block' : 'hidden'} fixed banner-video top-0 left-0 z-40 w-screen h-screen flex items-center justify-center`}>
                    <button onClick={toggleVideo} className="absolute top-3 right-7">
                        <FontAwesomeIcon className="text-white text-4xl" icon={faTimes} />

                    </button>

                    {
                        video ? (
                            <div className="w-5/6 h-auto">
                                <video className="h-[400px] m-auto flex items-center justify-center" src={srcVideo} autoPlay loop poster="posterimage.jpg" controls>
                                    Tu navegador no admite el elemento <code>video</code>.
                                </video>
                            </div>
                        ) : ('')
                    }

                    <div className="absolute bottom-5">
                        <button onClick={() => changeSrcVideo(videosUrls[0])} className="w-10 h-10 mr-5 border-4 border-orange-900 bg-orange-600 hover:bg-orange-400 duration-300 rounded-full">

                        </button>

                        <button onClick={() => changeSrcVideo(videosUrls[1])} className="w-10 h-10 mr-5 border-4 border-orange-900 bg-orange-600 hover:bg-orange-400 duration-300 rounded-full">

                        </button>

                        <button onClick={() => changeSrcVideo(videosUrls[2])} className="w-10 h-10 mr-5 border-4 border-orange-900 bg-orange-600 hover:bg-orange-400 duration-300 rounded-full">

                        </button>

                        <button onClick={() => changeSrcVideo(videosUrls[3])} className="w-10 h-10 border-4 border-orange-900 bg-orange-600 hover:bg-orange-400 duration-300 rounded-full">

                        </button>
                    </div>
                </div>

            </div>
            <div data-aos="fade-left" className="w-full h-auto mt-24 mb-7 flex flex-col md:flex-row gap-7 items-center justify-between">
                <div className="w-full h-72 bg-red-200 rounded-lg p-5 flex items-center justify-evenly md:w-2/4 md:h-64">
                    <div className="h-auto flex flex-col justify-between md:h-4/6">
                        <div>
                            <h3 className="text-xl font-bold md:text-2xl">Sofas Largos</h3>
                            <p>
                                Sofá cómodo y elegante.
                            </p>
                        </div>
                        <a href="#" className="mt-5 md:mt-0 underline text-orange-600 hover:text-orange-400 duration-300">COMPRAR AHORA</a>
                    </div>
                    <img className="w-2/4 mt-3 md:w-2/5 md:mt-0 md:ml-20" src="/assets/img/LongSofa.png" />
                </div>

                <div className="w-full h-72 bg-slate-300 rounded-lg p-5 flex items-center justify-evenly md:w-2/4 md:h-64">
                    <div className="h-auto flex flex-col justify-between md:h-4/6">
                        <div>
                            <h3 className="text-xl font-bold md:text-2xl">Silla de comedor</h3>
                            <p>
                                Silla clásica y funcional.
                            </p>
                        </div>
                        <a href="#" className="mt-5 md:mt-0 underline text-orange-600 hover:text-orange-400 duration-300">COMPRAR AHORA</a>
                    </div>
                    <img className="w-2/4 mt-3 md:w-2/5 md:mt-0 md:ml-20" src="/assets/img/Chair.png" />
                </div>
            </div>

        </section>
    )
}
