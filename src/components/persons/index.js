import React, { useState } from 'react'
import { useQuery } from '@apollo/client'

import Notification from '../shared/Notification'
import Display from './Display'
import PersonForm from './PersonForm'
import PhoneForm from './PhoneForm'
import { ALL_PERSONS } from '../shared/queries'

const Persons = (props) => {
  const [errorMessage, setErrorMessage] = useState(null)

  const result = useQuery(ALL_PERSONS, {
    // pollInterval: 2000
  })

  if (!props.show) {
    return null
  }

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
      <PhoneForm setError={notify} />
    </>
  )
}

export default Persons