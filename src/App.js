import React, { useState } from 'react'

import './App.css'
import Authors from './components/authors'
import Books from './components/books'
import NewBook from './components/books/NewBook'
import Persons from './components/persons'
import Notification from './components/shared/Notification'

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [page, setPage] = useState('authors')

  const notify = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 10000)
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage('persons')}>persons</button>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
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