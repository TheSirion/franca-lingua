import FeaturedStories from '@/components/component/featured-stories';
import StoryGrid from '@/components/component/story-grid';
import { Separator } from '@/components/ui/separator';

export const revalidate = 60;

import type { Metadata } from 'next';

export const metadata: Metadata = {
  openGraph: {
    title: 'Franca Língua, o guia do estudante de línguas',
    description:
      'Dicas, tutoriais, curiosidades e tudo o que você precisa para aprender com eficiência',
    siteName: 'Franca Língua',
    type: 'website',
    locale: 'pt_BR',
  },
  keywords: [
    'aprender',
    'línguas',
    'idiomas',
    'linguística',
    'dicas',
    'tutoriais',
    'curiosidades',
    'línguas estrangeiras',
    'inglês',
  ],
};

export default async function Home() {
  return (
    <main className='w-5/6 lg:w-2/3 m-auto md:px-6 lg:px-8 py-12'>
      <FeaturedStories />
      <Separator className='my-12' />
      <StoryGrid />
    </main>
  );
}
