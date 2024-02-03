import FeaturedStories from '@/components/component/featured-stories';
import StoryGrid from '@/components/component/story-grid';

export default function Home() {
  return (
    <main>
      <div className='w-full px-4 md:px-6 lg:px-8 py-12'>
        <FeaturedStories />
        <StoryGrid />
      </div>
    </main>
  );
}
