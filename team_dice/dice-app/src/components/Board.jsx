import React from 'react'

const Board = ({ title , data }) => {
  return (
    <div>
        <h4>{title}</h4>
        <img src={data.imgPath}/>
        <div>
            <p>{title}의 　　　점수는?</p>
            <p>{data.score}</p>
        </div>
    </div>
  )
}

export default Board