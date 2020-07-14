import React, { useState } from 'react'
import { useApolloClient, useSubscription } from '@apollo/client'
import { ALL_PERSONS, PERSON_ADDED } from './queries'

import './App.css'
import LoginForm from './components/login/login'
import Authors from './components/authors'
import Books from './components/books'
import NewBook from './components/books/NewBook'
import Persons from './components/persons'
import Recommend from './components/books/Recommend'
import Notification from './Notification'

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('_at'))
  const [errorMessage, setErrorMessage] = useState(null)
  const [page, setPage] = useState('authors')
  const client = useApolloClient()

  const updateCacheWith = addedPerson => {
    const includedIn = (set, object) => 
      set.map(p => p.id).includes(object.id)  

    const dataInStore = client.readQuery({ query: ALL_PERSONS })
    if (!includedIn(dataInStore.allPersons, addedPerson)) {
      client.writeQuery({
        query: ALL_PERSONS,
        data: { allPersons : dataInStore.allPersons.concat(addedPerson) }
      })
    }   
  }

  useSubscription(PERSON_ADDED, {
    onSubscriptionData: ({ subscriptionData }) => {
      const addedPerson = subscriptionData.data.personAdded
      notify(`${addedPerson.name} added`)
      updateCacheWith(addedPerson)
    }
  })

  const notify = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 10000)
  }

  const logout = () => {
    setToken(null)
    setPage('login')
    localStorage.clear()
    client.resetStore()
  }

  if (!token) {
    return (
      <div>
        <div>
          <button onClick={() => setPage('authors')}>authors</button>
          <button onClick={() => setPage('books')}>books</button>
          <button onClick={() => setPage('login')}>login</button>
        </div>

        <Notification errorMessage={errorMessage} />
        <Authors show={page === 'authors'} setError={notify} />
        <Books show={page === 'books'} setError={notify} />
        <LoginForm show={page === 'login'} setToken={setToken} setError={notify} setPage={setPage} />
      </div>
    )
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage('persons')}>persons</button>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
        <button onClick={() => setPage('recommend')}>recommend</button>
        <button onClick={logout}>logout</button>
      </div>

      <Notification errorMessage={errorMessage} />
      <Persons show={page === 'persons'} setError={notify} updateCacheWith={updateCacheWith} />
      <Authors show={page === 'authors'} setError={notify} />
      <Books show={page === 'books'} setError={notify} />
      <NewBook show={page === 'add'} setError={notify} />
      <Recommend show={page === 'recommend'} recommend={'refactoring'} setError={notify} />
    </div>
  )
}

export default App