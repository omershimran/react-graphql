import { useState } from 'react';
import { useMutation } from '@apollo/client';
import AuthorsList from './AuthorsList';
import { addBookMutation, getBooksQuery } from '../quieries/quieries'
import './sidebar.css'
  

function AddBook () {
  const [name, setName] = useState("")
  const [genere, setGenere] = useState("")
  const [authorId, setAuthorId] = useState("")


  const [addBookToDB, { error }] = useMutation(addBookMutation,{variables:{name:name, genere: genere, authorId: authorId},refetchQueries:[{query:getBooksQuery},'BookList']});

  function submitForm(e){
      e.preventDefault();
      addBookToDB();
  }


  return (
    <form className="add_book_form" onSubmit={submitForm}>
        <div className="field">
            <label>book name</label>
            <input className="book_name_input" type="text" onChange={(e)=>setName(e.target.value)}></input>
        </div>
        <div className="field">
            <label>book genere</label>
            <input className="book_genere_input" type="text" onChange={(e)=>setGenere(e.target.value)}></input>
        </div>
        <div className="field">
            <label>book author</label>
            <select onChange={(e)=>setAuthorId(e.target.value)}>
              <option>choose an auther</option>
                <AuthorsList />
            </select>
        </div>
        <div className="submitWrapper">
          <button className="btn btn-primary submmitButton" type="submit" value="Add Book"> add book</button>
        </div>
    </form>
  )
}

export default AddBook