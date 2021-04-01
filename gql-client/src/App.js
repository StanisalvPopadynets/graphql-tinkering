import {ApolloClient, InMemoryCache, HttpLink, ApolloProvider, from} from '@apollo/client'
import {onError} from '@apollo/client/link/error' 

import './App.css';

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:3001/graphql'}),
])

const errorLink = onError(({graphqlErrors, networkError}) => {
  graphqlErrors?.map(({message, location, path}) => alert("Error" + message))
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div>Hello World</div>
      </div>
    </ApolloProvider>
  )
}

export default App
