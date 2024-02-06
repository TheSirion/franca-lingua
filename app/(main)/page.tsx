import FeaturedStories from '@/components/component/featured-stories';
import StoryGrid from '@/components/component/story-grid';
import { Separator } from '@/components/ui/separator';

export const revalidate = 60;

export default function Home() {
  return (
    <main>
      <div className='w-2/3 m-auto px-4 md:px-6 lg:px-8 py-12'>
        <FeaturedStories />
        <Separator className='my-12' />
        <StoryGrid />
      </div>
    </main>
  );
}
