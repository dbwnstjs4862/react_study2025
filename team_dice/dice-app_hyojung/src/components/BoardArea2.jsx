import React from 'react'
import Board2 from './Board2'

const BoardArea2 = ({user, com}) => {
    return (
        <div className='board-area'>
            <Board2 name={"나"} data={user}/>
            <Board2 name={"컴퓨터"} data={com}/>
        </div>
    )
}

export default BoardArea2