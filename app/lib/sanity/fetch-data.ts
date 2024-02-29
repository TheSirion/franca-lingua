import { client } from './client';

export const fetchPost = async (slug: string) => {
  try {
    const query = `*[_type=='post' && slug.current=='${slug}']{
      title,
      "slug": slug.current,
      author->{name, bio, image},
      body,
      "mainImage": 
      {
        "image": mainImage.asset._ref, 
        "alt": mainImage.alt
      },
      excerpt,
      publishedAt,
      _updatedAt, 
    }[0]`;

    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.error('Error fetching post', error);
  }
};

export const fetchPosts = async () => {
  try {
    const query = `*[_type=='post']{
      title,
      "slug": slug.current,
      author,
      "mainImage": 
    {
      "image": mainImage.asset._ref, 
        "alt": mainImage.alt
    },
      _id, 
    }[0...5]`;

    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.error('Error fetching posts', error);
  }
};

export const fetchFeaturedPosts = async () => {
  try {
    const query = `*[_type=='post' && Featured == true]{
      title,
      excerpt,
      "slug": slug.current,
      "mainImage": 
    {
      "image": mainImage.asset._ref, 
        "alt": mainImage.alt
    },
      _id, 
    }[0..2]`;
    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.error('Error fetching featured posts', error);
  }
};

export const fetchPostImage = async (slug: string | null) => {
  try {
    const query = `*[_type=='post' && slug.current=='${slug}'] {
      title,
      "slug": slug.current,
      "image": {"alt": mainImage.alt, "asset": mainImage.asset._ref}
    }[0]`;

    const image = await client.fetch(query);
    return image;
  } catch (error) {
    console.error('Error fetching post image', error);
  }
};
