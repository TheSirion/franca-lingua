import { fetchFeaturedPosts } from '@/app/lib/sanity/fetch-data';
import { Post } from '@/app/utils/interfaces';
import StoryCard from './story-card';

const FeaturedStories = async () => {
  const posts = await fetchFeaturedPosts();
  posts.map((post: Post) => console.log(post._id));
  const topPost = posts[0];
  posts.shift();

  return (
    <section className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
      <StoryCard
        variant='top'
        data={topPost}
      />
      <div className='space-y-6 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-6'>
        {posts.map((post: Post) => (
          <StoryCard
            key={post._id}
            data={post}
            variant='featured'
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedStories;
