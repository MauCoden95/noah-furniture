export default function StatisticsAbout() {
    const stats = [
      { value: '99%', description: 'de clientes satisfechos' },
      { value: '+10', description: 'años de experiencia' },
      { value: '7', description: 'días de promedio de entrega' },
      { value: '95%', description: 'productos hechos de materiales sostenibles' },
    ];
  
    return (
      <section className="h-auto px-6 py-10 md:px-14 bg-gradient-to-r from-orange-600 to-orange-400">
        <div className='w-full grid grid-cols-2 md:flex flex-col md:flex-row gap-6 items-center justify-between'>
          {stats.map((stat, index) => (
            <div key={index} className='w-full md:w-1/4 h-48 px-3 border-4 border-white'>
              <h4 className='my-6 md:my-4 text-6xl md:text-7xl text-center text-white'>{stat.value}</h4>
              <p className='text-center text-white'>{stat.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  