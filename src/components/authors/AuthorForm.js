import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import { EDIT_AUTHOR } from '../../queries'

const AuthorForm = ({ authors }) => {
  const [name, setName] = useState('')
  const [born, setBorn] = useState('')

  const [ changeAuthor ] = useMutation(EDIT_AUTHOR)
  const handleChange = event => setName(event.target.value)

  const submit = async (event) => {
    event.preventDefault()
    changeAuthor({ variables: { name, setBornTo: Number(born) } })
    setName('')
    setBorn('')
  }

  return (
    <div>
      <h2>Set birthyear</h2>
      <form onSubmit={submit}>
        <label>
          name
          <select value={authors[0].name} onChange={handleChange}>
            {authors.map(a =>
              <option key={a.id} value={a.name}>{a.name}</option>
            )}
          </select>
        </label>
        <div>
          born <input
            type='number'
            value={born}
            onChange={({ target }) => setBorn(target.value)}
          />
        </div>
        <button type='submit'>update author</button>
      </form>
    </div>
  )
}

export default AuthorForm