import base from './base.js'
export default  (entry, type) => {
  let bottom = base(entry, type)
  delete bottom.publishedAt
  delete bottom.slug
  return {
    ...bottom,
    _id: 'home',
    title: "Home",
  }
}