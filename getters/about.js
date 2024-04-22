const fetch = require("../utils/fetch.js").default
const base = require('../transformers/base.js')
const rels = require('../transformers/rels.js')
const GetSourcesFromString = require("../utils/GetSourcesFromString.js").default
export default async () => {
  const [entry] = await fetch('pages/23')
  let galleries = []
  let gallery_pages_endoints = [
    'pages/958', // Images by Juergen Frank
    'pages/233', // Images bt Christian Steiner
    'pages/234', // Images by Peter Schaaf
  ]
  for (const endpoint of gallery_pages_endoints) {
    const [page] = await fetch(endpoint)
    if(page.content.rendered){
      sources = GetSourcesFromString(page.content.rendered)
      galleries.push({
        title: page.title.rendered,
        images: sources.map(src => ({
          _type: 'image',
          _sanityAsset: `image@${src}`,
        }))
      })
    }
  }
  const bottom = base(entry, 'pageAbout')
  delete bottom.publishedAt
  return [{
    ...bottom,
    _id: 'pageAbout',
    persons: rels([
      26,
      25,
      27,
      24,
    ], 'person'),
    galleries
  }]
}