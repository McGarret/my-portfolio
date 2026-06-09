'use client'

import dynamicImport from 'next/dynamic'
import config from '@/sanity.config'

// Importer NextStudio dynamiquement avec ssr: false pour éviter le pré-rendu serveur
const NextStudio = dynamicImport(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
)

export default function SanityStudio() {
  return <NextStudio config={config} />
}
