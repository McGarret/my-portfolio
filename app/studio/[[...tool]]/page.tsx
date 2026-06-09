import SanityStudio from '@/components/SanityStudio'

export { metadata } from 'next-sanity/studio'

export const dynamic = 'force-dynamic'

export default function StudioPage() {
  return <SanityStudio />
}

