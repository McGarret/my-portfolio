import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schema'

export default defineConfig({
  name: 'ben-portfolio',
  title: 'Portfolio Admin',

  // Doit correspondre à la route Next.js de votre studio
  basePath: '/studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',

  plugins: [
    structureTool(),
    visionTool(), // Utile pour tester des requêtes GROQ
  ],

  schema: {
    types: schemaTypes,
  },
})
