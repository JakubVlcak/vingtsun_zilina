import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'stranka',
  title: 'Stránka',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Nadpis', type: 'string' }),
    defineField({
      name: 'slug', title: 'URL (slug)', type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'rodic',
      title: 'Rodičovská stránka',
      type: 'reference',
      to: [{ type: 'stranka' }],
      description: 'Nechaj prázdne pre stránky prvej úrovne (napr. pod WingTsun systémy). Vyber rodiča pre podstránky.',
    }),
    defineField({ name: 'poradie', title: 'Poradie zoradenia', type: 'number' }),
    defineField({ name: 'perex', title: 'Krátky popis', type: 'text', rows: 3 }),
    defineField({
      name: 'obsah', title: 'Obsah stránky', type: 'array',
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
    select: { title: 'title', subtitle: 'rodic.title' },
    prepare({ title, subtitle }) {
      return { title, subtitle: subtitle ? `Podstránka: ${subtitle}` : 'Hlavná stránka' }
    },
  },
})
