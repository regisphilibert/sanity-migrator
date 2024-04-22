import base from './base.js'
import rels from './rels.js'
export default  (entry, type) => {
  let label, catalog_number, asin = false
  if(entry.acf) {
    label = entry.acf.sm_label || label
    catalog_number = entry.acf.sm_catalog_number || catalog_number
    asin = entry.acf.sm_identifier || asin
  }
  return {
    ...base(entry, type),
    // Until we figure out how to get the metas from API:
    ...(label ? {label} : {}),
    ...(catalog_number ? {catalog_number} : {}),
    ...(asin ? {asin} : {}),
    ...(entry.tags ? {taxonomyTags: rels(entry.tags, 'taxonomyTag')} : {})
  }
}