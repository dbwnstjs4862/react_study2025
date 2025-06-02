const Board = ({rdImg, name, score}) => {

    return (
        <div className='board-box'>
            <h4>{name}</h4>
            <img className="dice-style" src={rdImg}/>
            <div>
                <p>현재 점수는?</p>
                <p>{score}</p>
            </div>
        </div>
    )
}

export default Board