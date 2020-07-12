import React from 'react'
import { useQuery } from '@apollo/client'

import Display from './Display'
import { ALL_BOOKS } from '../../queries'

const Books = (props) => {
  const result = useQuery(ALL_BOOKS)

  if (!props.show) {
    return null
  }

  if (result.loading)  {
    return <div>loading...</div>
  }

  if (!result.data) {
    return (
      <>
        <h2>Books</h2>
      </>
    )
  }

  return (
    <>
      <Display books={result.data.allBooks} />
    </>
  )
}

export default Books