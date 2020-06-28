import React from 'react'
import { useQuery } from '@apollo/client'

import Display from './Display'
import PersonForm from './PersonForm'
import PhoneForm from './PhoneForm'
import { ALL_PERSONS } from '../shared/queries'

const Persons = (props) => {
  const result = useQuery(ALL_PERSONS, {
    // pollInterval: 2000
  })

  if (!props.show) {
    return null
  }

  if (result.loading)  {
    return <div>loading...</div>
  }

  return (
    <>
      <Display persons={result.data.allPersons} />
      <PersonForm setError={props.setError} />
      <PhoneForm setError={props.setError} />
    </>
  )
}

export default Persons