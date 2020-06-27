import React from 'react'

const Display = ({ persons }) => {
  return (
    <>
      <h2>Persons</h2>
      {persons.map(p =>
        <div key={p.id}>
          {p.name} {p.phone}
        </div>  
      )}
    </>
  )
}

export default Display