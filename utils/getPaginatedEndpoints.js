export default (endpoint, page_num) => {
  let endpoints = [];
  console.log(endpoint);
  [...Array(10)].forEach((_, i) => {
    console.log(i)
    const url = new URL(endpoint)
    url.searchParams.append('page', i)
    endpoints.push(url)
  })
  return endpoints
}