
import generatePortableText from '../pt/generatePortableText.js'
import getReviews from '../utils/getReviews.js'
import getTermType from '../utils/getTermType.js'
import getWPBook from '../utils/getWPBook.js'
import base from './base.js'
import rel from './rel.js'
import rels from './rels.js'

export default  (entry, type) => {
  let output = {...base(entry, type)}

  const {
    date_created_gmt: date,
    description: content,
    short_description: description,
    product_cat: taxonomyProductCategories,
    product_tag: taxonomyProductTags,
    variations,
    name,
    categories,
    tags,
    id: wpId,
  } = entry
  output.title = name
  output.wpId = wpId
  if(!!content) {
    output.body = generatePortableText(content)
  }
  if(!!date) {
    output.publishedAt = date + `.000Z`
  }
  if(!!description) {
    output.description = generatePortableText(description)
  }
  if(!!variations) {
    output.editions = rels(variations, 'bookEdition')
  }
  let types = {}
  const allTerms = [...categories, ...tags]
  const storedAsObjects = ['taxonomyGenre', 'taxonomySeries']
  allTerms.forEach(t => {
    const termType = getTermType(t.id)
    if(!storedAsObjects.includes(termType)) {
      const key = termType + 's'
      if(!types[key]) {
        types[key] = []
      }
      types[key].push(rel(t.id, termType))
    } else {
      types[termType] = rel(t.id, termType)
    }
  });

  output = {
    ...output,
    ...types,
  }

  const reviews = getReviews(entry.id)
  if(!!reviews) {
    output.reviews = rels(reviews, 'review')
  }

  const wpBook = getWPBook(entry.id)
  if(wpBook) {


    if(wpBook.acf) {
      const {
        sm_book_page_count: pageCount,
        related_author: author,
        book_subtitle: subtitle,
      } = wpBook.acf

      if(!!pageCount) {
        output.pageCount = parseInt(pageCount)
      }
      if(!!author) {
       output.persons = rels(author, 'person')
      }
      if(!!subtitle) {
        output.subtitle = subtitle
      }
    }
  }

  return output
}