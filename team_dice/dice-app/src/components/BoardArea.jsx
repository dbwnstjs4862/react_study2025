import React from 'react'
import Board from './Board'

const BoardArea = ({user, com}) => {
  return (
    <div className='board-area'>
        <Board data={user} title="💖곤듀 준서닝💖(*/ω＼*)"/>
        <Board data={com} title="⚡무떠운 컴텨⚡（；´д｀）ゞ 힝"/>
        
    </div>
  )
}

export default BoardArea