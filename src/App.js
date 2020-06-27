import React, { useState } from 'react'

import './App.css'
import Authors from './components/authors'
import Books from './components/books'
import NewBook from './components/books/NewBook'
import Persons from './components/persons'

const App = () => {
  const [page, setPage] = useState('authors')

  return (
    <div>
      <div>
        <button onClick={() => setPage('persons')}>persons</button>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
      </div>

      <Authors show={page === 'authors'} />
      <Books show={page === 'books'} />
      <NewBook show={page === 'add'} />
      <Persons show={page === 'persons'} />
    </div>
  )
}

export default App