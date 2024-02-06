import Image from 'next/image';

const TopFeaturedCard = () => {
  return (
    <div className='lg:col-span-2'>
      <div className='rounded-lg overflow-hidden'>
        <Image
          alt='Featured story'
          className='w-full h-64 object-cover lg:h-96'
          height='450'
          src='https://images.unsplash.com/photo-1612367980327-7454a7276aa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          width='800'
        />
      </div>
      <h2 className='mt-4 text-2xl font-bold leading-tight'>
        The Future of Work in a Post-Pandemic World
      </h2>
      <p className='mt-2 text-gray-500'>
        As the world grapples with the ongoing ramifications of the COVID-19
        pandemic, businesses are also trying to figure out what the future of
        work will look like...
      </p>
    </div>
  );
};

export default TopFeaturedCard;
