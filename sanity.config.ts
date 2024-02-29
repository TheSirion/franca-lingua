import { generateOGImage } from '@catherineriver/sanity-plugin-generate-ogimage';
import { assist } from '@sanity/assist';
import { scheduledPublishing } from '@sanity/scheduled-publishing';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { presentationTool } from 'sanity/presentation';
import { structureTool } from 'sanity/structure';
import CustomLayout from './sanity/components/custom-layout';
import { dataset, projectId } from './sanity/env';
import { locate } from './sanity/lib/locate';
import { schema } from './sanity/schema';

const SANITY_STUDIO_PREVIEW_URL =
  process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool(),
    visionTool(),
    assist(),
    scheduledPublishing(),
    unsplashImageAsset(),
    generateOGImage({ layouts: [CustomLayout] }),
    presentationTool({
      previewUrl: SANITY_STUDIO_PREVIEW_URL,
      locate,
    }),
  ],
});
