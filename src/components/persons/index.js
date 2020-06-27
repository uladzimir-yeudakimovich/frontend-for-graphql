import React, { useState } from 'react'
import { useQuery } from '@apollo/client'

import Notification from '../notification'
import Display from './display'
import PersonForm from './form'
import { ALL_PERSONS } from '../queries'

const Persons = () => {
  const [errorMessage, setErrorMessage] = useState(null)

  const result = useQuery(ALL_PERSONS, {
    // pollInterval: 2000
  })

  if (result.loading)  {
    return <div>loading...</div>
  }

  const notify = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 10000)
  }

  return (
    <>
      <Notification errorMessage={errorMessage} />
      <Display persons={result.data.allPersons} />
      <PersonForm setError={notify} />
    </>
  )
}

export default Persons