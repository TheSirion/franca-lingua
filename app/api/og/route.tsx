import { urlFor } from '@/app/lib/sanity/client';
import { fetchPostImage } from '@/app/lib/sanity/fetch-data';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has('title');
    const title = hasTitle ? searchParams.get('title') : 'Franca Língua';

    const postImage = await fetchPostImage(title);

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundImage: `url(${urlFor(postImage.image.asset).url()})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            fontSize: 60,
            letterSpacing: -2,
            fontWeight: 700,
            textAlign: 'center',
          }}>
          <div
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
              backgroundClip: 'text',
              color: 'transparent',
            }}>
            Franca Língua
          </div>
          <div
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40))',
              backgroundClip: 'text',
              color: 'transparent',
            }}>
            {postImage.title}
          </div>
        </div>
      )
    );
  } catch (e: any) {
    return new Response(`Failed to generate OpenGraph image: ${e.message}`, {
      status: 500,
    });
  }
};
