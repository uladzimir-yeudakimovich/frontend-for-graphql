import React, { useState } from 'react'
import { useApolloClient } from '@apollo/client'

import './App.css'
import LoginForm from './components/login/login'
import Authors from './components/authors'
import Books from './components/books'
import NewBook from './components/books/NewBook'
import Persons from './components/persons'
import Notification from './Notification'

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('_at'))
  const [errorMessage, setErrorMessage] = useState(null)
  const [page, setPage] = useState('authors')
  const client = useApolloClient()

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
        <button onClick={logout}>logout</button>
      </div>

      <Notification errorMessage={errorMessage} />
      <Authors show={page === 'authors'} setError={notify} />
      <Books show={page === 'books'} setError={notify} />
      <NewBook show={page === 'add'} setError={notify} />
      <Persons show={page === 'persons'} setError={notify} />
    </div>
  )
}

export default App