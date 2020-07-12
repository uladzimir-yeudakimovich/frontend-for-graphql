import React, { useState } from 'react'
import { useLazyQuery } from '@apollo/client'

import Display from './Display'
import { ALL_BOOKS } from '../../queries'

const Books = (props) => {
  const [getBooks, result] = useLazyQuery(ALL_BOOKS)
  const [filter, setFilter] = useState('all genres')

  const changeFilter = filterName => {
    setFilter(filterName)
    filterName = filterName === 'all genres' ? null : filterName
    getBooks({ variables: {genreName: filterName} })
  }

  if (!props.show) {
    return null
  }

  if (result.loading)  {
    return(
      <>
        <h2>Books</h2>
        <div>loading...</div>
      </>
    )
  }

  if (!result.data) {
    getBooks({ variables: {genreName: null} })
    return (<h2>Books</h2>)
  }

  return (
    <>
      <Display books={result.data.allBooks} genre={filter} />
      <button onClick={() => changeFilter('refactoring')}>refactoring</button>
      <button onClick={() => changeFilter('agile')}>agile</button>
      <button onClick={() => changeFilter('patterns')}>patterns</button>
      <button onClick={() => changeFilter('design')}>design</button>
      <button onClick={() => changeFilter('crime')}>crime</button>
      <button onClick={() => changeFilter('classic')}>classic</button>
      <button onClick={() => changeFilter('all genres')}>all genres</button>
    </>
  )
}

export default Books