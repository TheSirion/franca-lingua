import { urlFor } from '@/app/lib/sanity/client';
import { getImageDimensions } from '@sanity/asset-utils';
import Image from 'next/image';

const BlogImage = ({ value, isInline }: { value: any; isInline: any }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <>
      <Image
        src={urlFor(value).url()}
        alt={value.alt || ' '}
        width={width}
        height={height}
        loading='lazy'
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? 'inline-block' : 'block',

          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height,
        }}
      />
      <p className='text-sm'>{value.alt || ' '}</p>
    </>
  );
};

export default BlogImage;
