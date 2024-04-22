import config from '../data/config.js'

const { woo_params, woo_endpoint } = config
export default async () => {
  const fetchPages = require('./fetchPages.js').default
  const endpoint = `${woo_endpoint}/products?${woo_params}&per_page=100`
  const products = await fetchPages(endpoint, 2)
  const endpoints = products.map(p => `/wc/v3/products/${p.id}/variations?${woo_params}`)
  return endpoints
}