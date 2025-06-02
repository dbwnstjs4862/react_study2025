import React from 'react'

const Board = ({data, title}) => {
  return (
    <div>
        <h4>{title}</h4>
        <img src={data.imgPath}/>
        <div>
            <p>현재 점수는?</p>
            <p>{data.score}</p>
        </div>

    </div>
  )
}

export default Board