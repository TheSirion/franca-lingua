import { client, urlFor } from '@/app/lib/sanity/client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

const fetchPost = async (slug: string) => {
  const query = `*[_type=='post' && slug.current=='${slug}']{
  title,
  "slug": slug.current,
  author,
  body,
  "mainImage": 
    {
      "image": mainImage.asset._ref, 
        "alt": mainImage.alt
    }, 
}[0]`;
  const posts = await client.fetch(query);
  return posts;
};

const BlogPage = async () => {
  const post = await fetchPost('hello-world');
  console.log(post);
  const blogImageUrl = urlFor(post.mainImage.image).url();

  return (
    <main>
      <h1 className='text-4xl'>{post.title}</h1>
      <Image
        src={blogImageUrl}
        alt={post.mainImage.alt}
        width={800}
        height={800}
      />
      <PortableText value={post.body} />
    </main>
  );
};

export default BlogPage;
