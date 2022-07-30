import './books.css'

function Book({book, setBookId}) {
  return (
    <li className='book' onClick={() => setBookId(book.id)}>
      <div>{book.name}</div>
      <div>{book.genere}</div>
    </li>
  )
}

export default Book