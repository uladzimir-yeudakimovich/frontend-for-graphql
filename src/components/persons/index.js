import React from 'react'
import { gql, useQuery } from '@apollo/client'

import Display from './display'

const ALL_PERSONS = gql`
  query {
    allPersons  {
      name
      phone
      id
    }
  }
`

const Persons = () => {
  const result = useQuery(ALL_PERSONS)

  if (result.loading)  {
    return <div>loading...</div>
  }

  return (
    <>
      <Display persons={result.data.allPersons} />
    </>
  )
}

export default Persons