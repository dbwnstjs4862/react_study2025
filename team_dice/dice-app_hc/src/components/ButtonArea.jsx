import React from 'react'
import DiceGame from './DiceGame'

const ButtonArea = ({diceRoll, RESETGAME}) => {
  return (
    <div>
        <button onClick={()=>diceRoll()}>던지기</button>
        <button onClick={()=>RESETGAME()}>RESET</button>
    </div>
  )
}

export default ButtonArea