import { client } from './client';

export const fetchPost = async (slug: string) => {
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
    publishedAt,
    _updatedAt, 
}[0]`;
  const posts = await client.fetch(query);
  return posts;
};

export const fetchPosts = async () => {
  const query = `*[_type=='post']{
  title,
  "slug": slug.current,
  author,
  "mainImage": 
    {
      "image": mainImage.asset._ref, 
        "alt": mainImage.alt
    }, 
}[0...5]`;
  const posts = await client.fetch(query);
  return posts;
};
