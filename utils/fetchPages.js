import fetch from './fetch.js'

export default async (endpoint, pages) => {
  let entries = []

  for (let index = 1; index <= pages; index++) {
    const delimiter = endpoint.includes('?') ? '&' : '?'
    data = await fetch(endpoint + `${delimiter}page=${index}`)
    entries.push(...data)
  }
  return entries
}