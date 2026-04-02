import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'forma',
  title: 'WingTsun Forma',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Názov', type: 'string' }),
    defineField({ name: 'sub', title: 'Podtitul', type: 'string' }),
    defineField({ name: 'desc', title: 'Popis', type: 'text', rows: 4 }),
    defineField({
      name: 'tags', title: 'Kľúčové vlastnosti', type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({ name: 'order', title: 'Poradie', type: 'number' }),
  ],
  orderings: [{title: 'Poradie', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
})
