export default function Partners() {
    const partners = [
      '/assets/img/partner1.png',
      '/assets/img/partner2.png',
      '/assets/img/partner3.png',
      '/assets/img/partner4.png',
      '/assets/img/partner5.png',
    ];
  
    return (
      <section className='w-full h-auto mt-12 lg:mt-20 py-14'>
        <h3 className='mt-3 mb-8 md:my-7 text-center text-4xl md:text-3xl'>Nuestros partners</h3>
        <div className='flex flex-wrap justify-center gap-4'>
          {partners.map((partner, index) => (
            <img key={index} className='w-5/6 md:w-1/6 h-auto rounded-md' src={partner} alt={`Partner ${index + 1}`} />
          ))}
        </div>
      </section>
    );
  }
  