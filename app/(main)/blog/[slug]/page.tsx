import { urlFor } from '@/app/lib/sanity/client';
import { fetchPost } from '@/app/lib/sanity/fetch-data';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { JSX, SVGProps } from 'react';

export const revalidate = 60;

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const post = await fetchPost(params.slug);
  const blogImageUrl = urlFor(post.mainImage.image).url();

  const createdAt = new Date(post.publishedAt).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const updatedAt = new Date(post._updatedAt).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className='mt-8 flex flex-col lg:flex-row justify-center'>
      <main className='w-full lg:w-3/4 space-y-8'>
        <Image
          alt={'Post title'}
          className='w-full aspect-[2/1] object-cover rounded-lg'
          height={400}
          src={blogImageUrl}
          width={800}
        />
        <h1 className='text-4xl font-bold'>{post.title}</h1>
        <div className='space-y-1'>
          <p className='text-sm font-semibold'>Publicado em</p>
          <time className='text-sm text-gray-500'>{createdAt}</time>
        </div>
        <div className='space-y-1'>
          <p className='text-sm font-semibold'>Atualizado em</p>
          <time className='text-sm text-gray-500'>{updatedAt}</time>
        </div>
        <article className='prose prose-lg max-w-none dark:prose-invert'>
          <PortableText value={post.body} />
        </article>
        <div className='flex flex-col items-center space-y-4'>
          <Image
            alt={`Escrito por ${post.author.name}`}
            className='w-24 h-24 rounded-full object-cover'
            height={100}
            src={urlFor(post.author.image).url()}
            style={{
              aspectRatio: '100/100',
              objectFit: 'cover',
            }}
            width={100}
          />
          <h3 className='text-lg font-semibold prose dark:prose-invert'>
            {post.author.name}
          </h3>
          <div className='prose dark:prose-invert'>
            <PortableText value={post.author.bio} />
          </div>
          <div className='flex space-x-4'>
            <Link
              className='text-gray-500 hover:text-gray-900'
              href='#'>
              <TwitterIcon className='h-6 w-6' />
              <span className='sr-only'>Twitter</span>
            </Link>
            <Link
              className='text-gray-500 hover:text-gray-900'
              href='#'>
              <InstagramIcon className='h-6 w-6' />
              <span className='sr-only'>Instagram</span>
            </Link>
            <Link
              className='text-gray-500 hover:text-gray-900'
              href='#'>
              <FacebookIcon className='h-6 w-6' />
              <span className='sr-only'>Facebook</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

function FacebookIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
    </svg>
  );
}

function InstagramIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <rect
        width='20'
        height='20'
        x='2'
        y='2'
        rx='5'
        ry='5'
      />
      <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
      <line
        x1='17.5'
        x2='17.51'
        y1='6.5'
        y2='6.5'
      />
    </svg>
  );
}

function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
    </svg>
  );
}

export default BlogPost;
