import Header from './components/header/Header'
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css'

const uri = "http://localhost:4000/graphlql?"
const client = new ApolloClient({
  uri:uri,
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={ client }>
      <div className="container vh-100 main_app_container" >
        <Header />
        <Content />
      </div>
    </ApolloProvider>
  );
}

export default App;
