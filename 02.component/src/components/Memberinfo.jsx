import React from 'react'

const Memberinfo = ({team,person}) => {
  return (
    <div className='box'>       
        <h1>{team}</h1>
        <h1>{person}</h1>
    </div>
  )
}

export default Memberinfo