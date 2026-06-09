import { client } from '@/sanity/client'
import WorkClient from '@/components/WorkClient'

export const dynamic = 'force-dynamic'

// Requête GROQ : récupère tous les projets triés par numéro
const PROJECTS_QUERY = `*[_type == "project"] | order(num asc) {
  _id,
  num,
  category,
  title,
  description,
  stack,
  image,
  live,
  github
}`

export default async function Work() {
  let projects = []

  try {
    projects = await client.fetch(PROJECTS_QUERY)
  } catch (err) {
    // Sanity non configuré ou projectId invalide — affiche une liste vide
    console.warn('Sanity fetch failed (Sanity not configured yet?):', err)
  }

  return <WorkClient projects={projects} />
}