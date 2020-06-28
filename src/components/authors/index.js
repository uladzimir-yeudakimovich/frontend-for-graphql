import React from 'react'
import { useQuery } from '@apollo/client'

import AuthorForm from './AuthorForm'
import Display from './Display'
import { ALL_AUTHORS } from '../../queries'

const Authors = (props) => {
  const result = useQuery(ALL_AUTHORS)

  if (!props.show) {
    return null
  }

  if (result.loading)  {
    return <div>loading...</div>
  }

  return (
    <>
      <Display authors={result.data.allAuthors} />
      <AuthorForm authors={result.data.allAuthors} />
    </>
  )
}

export default Authors