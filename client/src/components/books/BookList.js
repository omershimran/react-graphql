import { useQuery } from '@apollo/client';
import Book from './Book';
import './books.css'
import { getBooksQuery } from '../quieries/quieries'


function BookList({setBookId}) {
  const { loading, error, data } = useQuery(getBooksQuery);
  
    if (loading) return <p>Loading Books</p>;
    if (error) return <p>Error :</p>;
    
  return (
    <ul className="books_list">
      {data.books.map((book) => (
        <Book key={book.id} book={book} setBookId={setBookId} />
    ))}
    </ul>
    
  )
}

export default BookList