import { urlFor } from '@/app/lib/sanity/client';
import { getImageDimensions } from '@sanity/asset-utils';
import Image from 'next/image';

const BlogImage = ({ value, isInline }: { value: any; isInline: any }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <div className='flex flex-col justify-center items-center'>
      <Image
        src={urlFor(value).url()}
        alt={value.alt}
        width={width}
        height={height}
        loading='lazy'
        className='rounded-lg mb-0 max-h-[750px] w-fit'
      />
      <p className='text-sm mt-2'>{value.alt}</p>
    </div>
  );
};

export default BlogImage;
