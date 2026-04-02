import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ponuka',
  title: 'Čo ponúkame',
  type: 'document',
  fields: [
    defineField({ name: 'polozka', title: 'Položka', type: 'string' }),
    defineField({ name: 'order', title: 'Poradie', type: 'number' }),
  ],
  orderings: [{title: 'Poradie', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
})
