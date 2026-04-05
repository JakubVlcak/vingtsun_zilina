import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navSekcia',
  title: 'Navigačná sekcia',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Názov v menu', type: 'string' }),
    defineField({
      name: 'slug', title: 'URL (slug)', type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({ name: 'poradie', title: 'Poradie v menu', type: 'number' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'poradie' },
    prepare({ title, subtitle }) {
      return { title, subtitle: subtitle ? `Poradie: ${subtitle}` : '' }
    },
  },
})
