import React from 'react'

const Board2 = ({name, data}) => {
    return (
        <div className='board-box'>
            <h4>{name}</h4>
            <img className="dice-style" src={data.imgPath}/>
            <div>
                <p>현재 점수는?</p>
                <p>{data.score}</p>
            </div>
        </div>
    )
}

export default Board2