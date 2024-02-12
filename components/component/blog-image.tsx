import { urlFor } from '@/app/lib/sanity/client';
import { getImageDimensions } from '@sanity/asset-utils';
import Image from 'next/image';

const BlogImage = ({ value, isInline }: { value: any; isInline: any }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <>
      <Image
        src={urlFor(value).url()}
        alt={value.alt}
        width={width}
        height={height}
        loading='lazy'
        className='rounded-lg mb-0'
      />
      <p className='text-sm mt-2'>{value.alt}</p>
    </>
  );
};

export default BlogImage;
