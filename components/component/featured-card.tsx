import Image from 'next/image';

const FeaturedCard = () => {
  return (
    <div>
      <div className='rounded-lg overflow-hidden'>
        <Image
          alt='Top story'
          className='w-full h-32 object-cover lg:h-48'
          height='225'
          src='https://images.unsplash.com/photo-1612367980327-7454a7276aa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          style={{
            aspectRatio: '400/225',
            objectFit: 'cover',
          }}
          width='400'
        />
      </div>
      <h2 className='mt-4 text-xl font-bold leading-tight'>
        The Impact of COVID-19 on Small Businesses
      </h2>
      <p className='mt-2 text-gray-500'>
        Small businesses have been disproportionately affected by the economic
        fallout from the COVID-19 pandemic...
      </p>
    </div>
  );
};

export default FeaturedCard;
