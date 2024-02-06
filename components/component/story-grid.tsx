import { fetchPosts } from '@/app/lib/sanity/fetch-data';
import { Post } from '@/app/utils/interfaces';
import StoryCard from './story-card';

const StoryGrid = async () => {
  const posts = await fetchPosts();

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {posts.map((post: Post) => (
        <StoryCard
          key={post._id}
          data={post}
        />
      ))}
    </div>
  );
};

export default StoryGrid;
