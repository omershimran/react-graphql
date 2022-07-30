// import { gql } from 'graphql-tag';
import { gql } from "@apollo/client";


const getAuthosQuery = gql`{
    authors{
      name
      id
    }
  }`

const getBookQuery = gql`
  query getBook($id:ID!){
    book(id:$id){
      id
      name
      genere
      author{
        id
        name
        age
        books{
          id
          name
        }
      }
    }
  }
`

  const getBooksQuery = gql`{
    books{
      name
      id
      genere
    }
  }`


  const addBookMutation = gql`
    mutation addBook($name:String!, $genere:String!,$authorId:ID!){
      addBook(name:$name, genere:$genere,authorId:$authorId){
        name
        id
      }
    }
  `
  
  export { getAuthosQuery, getBooksQuery, addBookMutation, getBookQuery};