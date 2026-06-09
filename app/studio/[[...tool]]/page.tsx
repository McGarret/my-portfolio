/**
 * Route catch-all qui embarque le Sanity Studio dans Next.js.
 * Accessible sur : http://localhost:3000/studio
 *
 * Pattern recommandé : le composant client est isolé dans SanityStudio.tsx
 * pour permettre l'export des metadata depuis ce module serveur.
 */
import SanityStudio from '@/components/SanityStudio'

export { metadata } from 'next-sanity/studio'

export const dynamic = 'force-dynamic'

export default function StudioPage() {
  return <SanityStudio />
}

