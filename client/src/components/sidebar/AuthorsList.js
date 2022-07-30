import { useQuery } from '@apollo/client';
import { getAuthosQuery } from './../quieries/quieries' 

function AuthorsList() {
    const { loading, error, data } = useQuery(getAuthosQuery);

    if (loading) return <option>Loading Books</option>;
    if (error) return <option>Error :</option>;

    return data.authors.map(author => {
        return <option key={author.id} value={author.id}>{author.name}</option>
})
  
}

export default AuthorsList