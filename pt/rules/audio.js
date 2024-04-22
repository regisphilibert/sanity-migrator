export default {
  deserialize(el, next, block) {
    if(typeof el.tagName == "undefined") {
      return undefined
    }
    if (el.tagName !== 'audio' && el.className != "wp-audio-shortcode") {
      return undefined
    }
    const source = el.querySelector('source')
    const src = source.getAttribute('src')
    if(src) {
      return block({
        _type: 'blockAudio',
        file: {
          _sanityAsset: `file@https://brentanoquartet.com/${src}`,
        }
      })
    }
  },
}