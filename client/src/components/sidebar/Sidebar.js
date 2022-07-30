import './sidebar.css'
import AddBook from './AddBook'
import Bookinfo from './Bookinfo'

function Sidebar({bookId}) {
  return (
    <div className="side_bar_width">
      <Bookinfo bookId={bookId}/>
      <AddBook/>
    </div>
  )
}

export default Sidebar