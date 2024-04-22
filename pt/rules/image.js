/**
What We want to return
{
  _type: image
  _sanityAsset: image@https://www.joinproviders.com/uploads/blog-tax-safe-graphic.jpg
}
 */

export default {
  deserialize(el, next, block) {
    if(typeof el.tagName == "undefined") {
      return undefined
    }

    if (el.tagName.toLowerCase() != 'img') {
      return undefined
    }
    let src = el.getAttribute("src")
    let publicPath
    let caption = ''
    if(src.includes('http') ){
      publicPath = src
      if(!publicPath.includes('http://blpress.org')) {
        return undefined
      }
    } else {
      src = src.replace('/uploads.js', '')
      publicPath = `https://blpress.org/${src}`
    }
    if(el.getAttribute("data-caption")) {
      caption = el.getAttribute("data-caption")
    }
    return block({
      _type: "image",
      _sanityAsset: `image@${publicPath}`,
      caption,
    })
  },
}