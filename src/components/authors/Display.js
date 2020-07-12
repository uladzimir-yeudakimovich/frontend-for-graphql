import React from 'react'

const Display = ({ authors }) => {
  if (!authors.length) {
    return (
      <>
        <h2>Authors</h2>
      </>
    )
  }

  return (
    <>
      <h2>Authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              born
            </th>
            <th>
              books
            </th>
          </tr>
          {authors.map(a =>
            <tr key={a.id}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default Display