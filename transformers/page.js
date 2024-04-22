import base from './base.js'
export default  (entry, type) => {
  let slug = entry.slug
  if(slug == 'representation') {
    slug = 'connect/' + entry.slug
  }
  let bottom = base(entry, type)
  delete bottom.publishedAt
  return {
    ...bottom,
    wpId: entry.id,
    slug: {
      _type: 'slug',
      current: slug
    }
  }
}