import getID from "../utils/getID.js"
import getTitle from "../utils/getTitle.js"

export default  (entry, type) => {
  return {
    _id: getID(entry.id, type),
    title: getTitle(entry.name),
    _type: type,
    slug: {
      _type: 'slug',
      current: entry.slug
    }
  }
}