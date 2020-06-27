import React from 'react'
import { useQuery } from '@apollo/client'

import Display from './display'
import PersonForm from './form'
import { ALL_PERSONS } from '../queries'

const Persons = () => {
  const result = useQuery(ALL_PERSONS, {
    // pollInterval: 2000
  })

  if (result.loading)  {
    return <div>loading...</div>
  }

  return (
    <>
      <Display persons={result.data.allPersons} />
      <PersonForm />
    </>
  )
}

export default Persons