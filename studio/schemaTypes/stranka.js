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
      name: 'sekcia',
      title: 'Navigačná sekcia',
      type: 'reference',
      to: [{ type: 'navSekcia' }],
      description: 'Do ktorej sekcie menu táto stránka patrí.',
    }),
    defineField({
      name: 'rodic',
      title: 'Rodičovská stránka',
      type: 'reference',
      to: [{ type: 'stranka' }],
      description: 'Nechaj prázdne pre stránky prvej úrovne. Vyber rodiča pre podstránky.',
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
    select: { title: 'title', sekcia: 'sekcia.title', rodic: 'rodic.title' },
    prepare({ title, sekcia, rodic }) {
      const sub = rodic ? `Podstránka: ${rodic}` : sekcia ? `Sekcia: ${sekcia}` : ''
      return { title, subtitle: sub }
    },
  },
})
