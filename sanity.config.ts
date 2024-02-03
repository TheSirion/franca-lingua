/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\pages\studio\[[...index]].tsx` route
 */

import { assist } from '@sanity/assist';
import { scheduledPublishing } from '@sanity/scheduled-publishing';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { structureTool } from 'sanity/structure';
import { dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';

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
  ],
});
