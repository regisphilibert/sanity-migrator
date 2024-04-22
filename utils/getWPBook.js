import books_1 from '../data/books_1.json' assert {type: 'json'}
import books_2 from '../data/books_2.json' assert {type: 'json'}
const books = [
  ...books_1,
  ...books_2,
]
export default (id) => {
  const book = books.find(entry => entry.id == id)
  return book
}
