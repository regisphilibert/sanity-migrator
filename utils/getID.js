import strToHash from './strToHash.js'

export default (id, type) => {
  return strToHash(`${type}-${id}`)
}