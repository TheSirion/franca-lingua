import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET;
const apiVersion = process.env.SANITY_STUDIO_API_VERSION || '2023-05-03';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  studioUrl: '/studio',
  encodeSourceMap: true,
});

const builder = imageUrlBuilder({
  projectId: 'fiklognn',
  dataset: 'production',
});

export function urlFor(source: string) {
  return builder.image(source);
}
