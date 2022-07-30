import './content.css'
import BookList
 from '../books/BookList'
function MainContent({setBookId}) {
  return (
    <div className="main_content_width">
      <BookList setBookId={setBookId}/>
    </div>
  )
}

export default MainContent