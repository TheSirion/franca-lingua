import { urlFor } from '@/app/lib/sanity/client';
import { Post } from '@/app/utils/interfaces';
import Image from 'next/image';
import Link from 'next/link';

const StoryCard = (props: { data: Post; variant?: string }) => {
  const { mainImage, title, excerpt, slug } = props.data;

  return (
    <Link
      href={`/blog/${slug}`}
      className={`${props.variant === 'top' ? 'lg:col-span-2' : ''}`}>
      <div className='rounded-lg overflow-hidden'>
        <Image
          alt={mainImage.alt}
          className={`w-full object-cover ${
            props.variant === 'top' ? 'lg:h-100' : 'h-40'
          }`}
          height='225'
          width='400'
          src={urlFor(mainImage.image).url()}
        />
      </div>
      <h2
        className={`mt-4 font-bold leading-tight ${
          props.variant === 'top' ? 'text-2xl lg:text-3xl' : 'text-2xl'
        }`}>
        {title}
      </h2>
      <p className='mt-2 text-gray-500 text-sm line-clamp-2 prose'>{excerpt}</p>
    </Link>
  );
};

export default StoryCard;
