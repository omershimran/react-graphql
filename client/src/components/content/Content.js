import MainContent from "./MainContent"
import Sidebar from "../sidebar/Sidebar"
import './content.css'
import { useState } from 'react'



function Content() {
  const [selectedBookId, setSelectedBookId] = useState('')

  function setBookId(id){
    setSelectedBookId(id);
  }

  return (
    <div className="content_height">
        <div className="content_display">
            <MainContent setBookId={setBookId}/>
            <Sidebar bookId={selectedBookId}/>
        </div>
    </div>
  )
}

export default Content