import { MediaEditor } from '@catherineriver/sanity-plugin-generate-ogimage';
import { unsplashAssetSource } from 'sanity-plugin-asset-source-unsplash';
import CustomLayout from '../components/custom-layout';

const Post = {
  name: 'post',
  title: 'Publicação',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'mainImage',
      title: 'Imagem principal',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
        },
      ],
    },
    {
      name: 'categories',
      title: 'Categorias',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'publishedAt',
      title: 'Publicado em',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Corpo',
      type: 'blockContent',
    },
    {
      name: 'excerpt',
      title: 'Resumo',
      type: 'text',
    },
    {
      name: 'Featured',
      title: 'Destaque',
      type: 'boolean',
    },
    {
      name: 'ogImage',
      title: 'Imagem OpenGraph',
      type: 'image',
      options: {
        sources: [
          {
            name: 'mainImage',
            title: 'Imagem principal',
            type: 'image',
            component: (props: any) => (
              <MediaEditor
                {...props}
                darkMode={true}
                layouts={[CustomLayout]}
              />
            ),
          },
          unsplashAssetSource,
        ],
      },
    },
  ],
};

export default Post;
