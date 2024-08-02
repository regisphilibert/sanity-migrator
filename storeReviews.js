import writeFile from "./utils/writeFile.js";
import fetch from "./utils/fetch.js";


const run = async () => {
  const pages = 17
  for (let index = 1; index <= pages; index++) {
    const entries = await fetch(`sm_reviews?per_page=100&page=${index}`)
    const filepath = `./cms/migrate/data/reviews/store_${index}.json`
    writeFile(entries, filepath)
  }
  console.log('All good')
}

run()