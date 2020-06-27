import React from 'react'
import ReactDOM from 'react-dom'

import { 
  ApolloClient, ApolloProvider, HttpLink, InMemoryCache
} from '@apollo/client' 

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000',
  })
})

const App = () => {
  return (<></>)
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)