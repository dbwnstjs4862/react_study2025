import React from 'react'
import Board from './Board'

const BoardArea = ({userRdImage, comRdImage,
                    userName, comName, 
                    userScore, comScore}) => {
    return (
        <div className='board-area'>
            <Board name={userName} score={userScore} rdImg={userRdImage}/>
            <Board name={comName} score={comScore} rdImg={comRdImage}/>
        </div>
    )
}

export default BoardArea