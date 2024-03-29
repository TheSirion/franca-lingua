import { urlFor } from '@/app/lib/sanity/client';
import { fetchPost } from '@/app/lib/sanity/fetch-data';
import BlogImage from '@/components/component/blog-image';
import { Separator } from '@/components/ui/separator';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

export const revalidate = 60;

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = async ({ params, searchParams }: Props) => {
  const post = await fetchPost(params.slug);
  return {
    title: `${post.title} | Franca Língua, o guia do estudante de línguas`,
    description: post.excerpt,
    image: urlFor(post.mainImage.image).url(),
  };
};

const components = {
  types: {
    image: BlogImage,
  },
};

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const post = await fetchPost(params.slug);

  const blogImageUrl = urlFor(post.mainImage.image).url();
  const authorImageUrl = urlFor(post.author.image).url();

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
    <div className='w-full md:w-3/4 lg:w-2/3 mx-auto my-8 px-5 flex flex-col lg:flex-row justify-center'>
      <main className='w-full lg:w-3/4 space-y-8'>
        <Image
          alt={'Post title'}
          className='w-full aspect-[2/1] object-cover rounded-lg'
          height={400}
          src={blogImageUrl}
          width={800}
        />
        <h1 className='text-4xl font-bold'>{post.title}</h1>
        <div className='flex flex-col md:flex-row'>
          <div className='space-y-1'>
            <p className='text-sm font-semibold'>Publicado em</p>
            <time
              dateTime={post.publishedAt}
              className='text-sm text-gray-500'>
              {createdAt}
            </time>
          </div>
          <Separator
            orientation='vertical'
            className='mx-3 prose dark:prose-invert'
          />
          <div className='space-y-1'>
            <p className='text-sm font-semibold'>Atualizado em</p>
            <time
              dateTime={post._updatedAt}
              className='text-sm text-gray-500'>
              {updatedAt}
            </time>
          </div>
        </div>
        <p className='prose prose-lg font-light dark:prose-invert'>
          {post.excerpt}
        </p>
        <Separator className='my-8' />
        <article className='prose max-w-none dark:prose-invert'>
          <PortableText
            value={post.body}
            components={components}
          />
        </article>
        <Separator className='my-8' />
        <div className='flex flex-col items-center space-y-4'>
          <Image
            alt={`Escrito por ${post.author.name}`}
            className='w-24 h-24 rounded-full object-cover'
            height={100}
            src={authorImageUrl}
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
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
