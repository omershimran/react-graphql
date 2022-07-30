import './sidebar.css'
import { getBookQuery } from '../quieries/quieries'
import { useQuery } from '@apollo/client';

function Bookinfo({bookId}) {
  const { loading, error, data } = useQuery(getBookQuery,{variables:{id:bookId}});

    if (loading) return(
      <div className="p-2">
          <p>Loading book...</p>
        </div>
    );
    else if (error) return(
      <div className="p-2">
        <p>no book selected</p>
      </div>
    );
    let book = data.book;
    return (
      
      <div className="p-2">
        <div className="book_header">title: {book.name}</div>
        <div className="book_genere">gener: {book.genere}</div>
        <div className="book_author">Author
          <div className='author_name'>{book.author.name}</div>
          <div className='author_age'>{book.author.age}</div>
          <ul className='author_books'>Books:
            {book.author.books.map((authorBook) => {
              return <li>{authorBook.name}</li>
            })}
          </ul>
        </div>
      </div>
    )
}

export default Bookinfo