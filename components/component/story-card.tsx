import { urlFor } from '@/app/lib/sanity/client';
import Image from 'next/image';

type StoryData = {
  data: {
    title: string;
    mainImage: {
      image: string;
      alt: string;
    };
  };
};

const StoryCard = ({ data }: StoryData) => {
  const { mainImage, title } = data;

  return (
    <div>
      <div className='rounded-lg overflow-hidden'>
        <Image
          alt={mainImage.alt}
          className='w-full h-32 object-cover lg:h-48'
          height='225'
          src={urlFor(mainImage.image).url()}
          style={{
            aspectRatio: '400/225',
            objectFit: 'cover',
          }}
          width='400'
        />
      </div>
      <h2 className='mt-4 text-xl font-bold leading-tight'>{title}</h2>
    </div>
  );
};

export default StoryCard;
