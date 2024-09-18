export default function BannerAbout() {
    return (
      <section className='relative w-full h-[500px]'>
        <img className='absolute top-0 w-full h-full z-10 object-cover' src='/assets/img/banner-about.jpg' />
        <div className='absolute top-0 bg_orange w-full h-full z-20 flex items-center justify-center'>
          <h1 className='text-2xl md:text-4xl z-30 text-center px-4'>Nuestra Pasión por el Diseño y la Calidad en Muebles</h1>
        </div>
      </section>
    );
  }
  