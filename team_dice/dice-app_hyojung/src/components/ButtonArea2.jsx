import React from 'react'

const ButtonArea2 = ({throwDice, initDice}) => {
    return (
        <div>
            <button onClick={() => throwDice()}>던지기!</button>
            <button onClick={() => initDice()}>RESET</button>
        </div>
    )
}

export default ButtonArea2