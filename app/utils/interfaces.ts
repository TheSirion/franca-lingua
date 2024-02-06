export interface Post {
  title: string;
  slug: string;
  author: string;
  mainImage: {
    image: string;
    alt: string;
  };
  categories: string[];
  publishedAt: string;
  body: string;
  excerpt: string;
  image: string;
  featured: boolean;
  _id: string;
}
