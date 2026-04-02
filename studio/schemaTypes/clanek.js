import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'clanek',
  title: 'Článok',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Nadpis', type: 'string' }),
    defineField({
      name: 'slug', title: 'URL (slug)', type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({ name: 'datum', title: 'Dátum', type: 'date' }),
    defineField({
      name: 'obrazok', title: 'Titulný obrázok', type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'perex', title: 'Perex (krátky popis)', type: 'text', rows: 3 }),
    defineField({
      name: 'obsah', title: 'Obsah článku', type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'caption', title: 'Popis obrázka', type: 'string' },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'datum', media: 'obrazok' },
  },
})
