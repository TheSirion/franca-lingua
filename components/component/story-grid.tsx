import { fetchPosts } from '@/app/lib/sanity/fetch-data';
import Link from 'next/link';
import StoryCard from './story-card';

type Post = {
  title: string;
  slug: string;
  author: string;
  mainImage: {
    image: string;
    alt: string;
  };
};

const StoryGrid = async () => {
  const posts = await fetchPosts();

  return (
    <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {posts.map((post: Post) => (
        <Link
          href={`/blog/${post.slug}`}
          key={post.slug}>
          <StoryCard
            key={post.slug}
            data={{ ...post }}
          />
        </Link>
      ))}
    </div>
  );
};

export default StoryGrid;
