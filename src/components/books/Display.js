import React from 'react'

const Display = ({ books, genre }) => {
  if (!books.length) {
    return null
  }

  return (
    <>
      <h2>Books</h2>
      <p>in genre <strong>{ genre }</strong></p>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {books.map(a =>
            <tr key={a.id}>
              <td>{a.title}</td>
              <td>{a.author}</td>
              <td>{a.published}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default Display