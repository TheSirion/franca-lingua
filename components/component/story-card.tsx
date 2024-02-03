import Image from 'next/image';

const StoryCard = () => {
  return (
    <div>
      <div className='rounded-lg overflow-hidden'>
        <Image
          alt='Story'
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
        The Future of Education: A Look at the Post-Pandemic Classroom
      </h2>
    </div>
  );
};

export default StoryCard;
