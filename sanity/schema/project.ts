import { defineType, defineField } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Projet',
  type: 'document',
  fields: [
    defineField({
      name: 'num',
      title: 'Numéro',
      type: 'string',
      description: 'Ex: 01, 02, 03...',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Fullstack', value: 'fullstack' },
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          { title: 'Mobile', value: 'mobile' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stack',
      title: 'Stack technique',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Technologie', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Image du projet',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'live',
      title: 'Lien Live',
      type: 'url',
      description: 'URL du projet en production (optionnel)',
    }),
    defineField({
      name: 'github',
      title: 'Lien GitHub',
      type: 'url',
      description: 'URL du dépôt GitHub (optionnel)',
    }),
  ],
  orderings: [
    {
      title: 'Numéro (croissant)',
      name: 'numAsc',
      by: [{ field: 'num', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
})
