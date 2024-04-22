import { JSDOM } from "jsdom";
export default (string) => {
  let output = []
  const wrappedHTML = `<html><body>${string}</body></html>`
  const document = new JSDOM(wrappedHTML).window.document
  images = document.querySelectorAll('img')
  for (const img of images) {
    let src = img.getAttribute('src')
    src = src.replace('-200x200', '')
    //console.log(src)
    output.push(src)
  }
  return output
}