import React from 'react'
import Board from './Board'

const BoardArea = ({user, com}) => {
  return (
    <div className='board-area'>
        <Board title="나" data={user}/>
        <Board title="컴퓨터" data={com}/>
    </div>
  )
}

export default BoardArea