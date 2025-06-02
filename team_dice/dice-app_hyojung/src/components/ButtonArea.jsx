import React from 'react'


const ButtonArea = ({handleStart, handleReset}) => {
    
    return (
        <div className='btn-box'>
            <button onClick={handleStart}>던지기!</button>
            <button onClick={handleReset}>RESET</button>
        </div>
    )
}

export default ButtonArea