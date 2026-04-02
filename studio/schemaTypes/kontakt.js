import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'kontakt',
  title: 'Kontakt & Info',
  type: 'document',
  fields: [
    defineField({ name: 'telefon', title: 'Telefón', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'adresa', title: 'Adresa', type: 'string' }),
    defineField({ name: 'trening_info', title: 'Info o tréningu', type: 'text', rows: 3 }),
  ],
})
