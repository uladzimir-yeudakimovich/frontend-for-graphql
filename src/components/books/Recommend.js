import React from 'react'
import { useLazyQuery } from '@apollo/client'

import { ALL_BOOKS } from '../../queries'

const Recommend = ({ show, recommend }) => {
  const [getBooks, result] = useLazyQuery(ALL_BOOKS)
  if (!show) {
    return null
  }

  if (result.loading)  {
    return(
      <>
        <h2>Recommendations</h2>
        <div>loading...</div>
      </>
    )
  }

  if (!result.data) {
    getBooks({ variables: {genreName: recommend} })
    return (<h2>Recommendations</h2>)
  }

  return (
    <>
      <h2>Recommendations</h2>
      <p>books in your favorite genre <strong>{ recommend }</strong></p>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {result.data.allBooks.map(a =>
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

export default Recommend