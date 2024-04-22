import generatePortableText from '../pt/generatePortableText.js'
import getMedia from '../utils/getMedia.js'
import getID from '../utils/getID.js'
import getTitle from '../utils/getTitle.js'
import formatDate from '../utils/formatDate.js'

export default  (entry, type) => {
  const image = entry.featured_media && getMedia(entry.featured_media)
  let file = false
  const file_id = entry.acf && entry.acf.pdf_file
  //const enableSharing = entry.jetpack_sharing_enabled && entry.jetpack_sharing_enabled
  if(file_id) {
    file = getMedia(file_id)
  }
  return {
    _id: getID(entry.id, type),
    _type: type,
    title: getTitle(entry.title),
    publishedAt: formatDate(entry.date_gmt),
    ...(!!image ? {image} : {}),
    ...(file ? {file} : {}),
    //enableSharing,
    slug: {
      _type: 'slug',
      current: entry.slug
    },
    ...(entry.content ? {body: generatePortableText(entry.content.rendered)} : {}),
    ...(entry.description ? {description: generatePortableText(entry.description.rendered)} :
      entry.excerpt ? {description: generatePortableText(entry.excerpt.rendered)} : {}
  )
  }
}