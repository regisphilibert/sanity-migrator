import rel from './rel.js'
export default  (ids, type) => {
  const rels = []
  for (const id of ids) {
    rels.push(rel(id, type))
  }
  return rels
}