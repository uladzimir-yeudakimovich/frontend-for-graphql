import React from 'react'
import { useQuery } from '@apollo/client'

import Display from './Display'
import PersonForm from './PersonForm'
import PhoneForm from './PhoneForm'
import { ALL_PERSONS } from '../../queries'

const Persons = ({ setError, updateCacheWith, show }) => {
  const result = useQuery(ALL_PERSONS, {
    // pollInterval: 2000
  })

  if (!show) {
    return null
  }

  if (result.loading)  {
    return <div>loading...</div>
  }

  return (
    <>
      <Display persons={result.data.allPersons} />
      <PersonForm setError={setError} updateCacheWith={updateCacheWith} />
      <PhoneForm setError={setError} />
    </>
  )
}

export default Persons