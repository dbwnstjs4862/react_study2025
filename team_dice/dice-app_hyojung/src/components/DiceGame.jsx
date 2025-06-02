import React, { useState } from 'react'
import ButtonArea from './ButtonArea'
import BoardArea from './BoardArea'
import dice1 from '../assets/img/dice1.png';
import dice2 from '../assets/img/dice2.png';
import dice3 from '../assets/img/dice3.png';
import dice4 from '../assets/img/dice4.png';
import dice5 from '../assets/img/dice5.png';
import dice6 from '../assets/img/dice6.png';

/*
    1. 사용자 "던지기" 버튼을 눌렀을 때, 랜덤으로 숫자가 생성된다. (1~6)

    2. 생성된 숫자로 주사위 눈 이미지를 화면에 출력한다.

    3. 사용자와 컴퓨터의 주사위 눈을 비교한다.
        - 사용자가 이겼을 경우: 사용자의 스코어 +1
        - 컴퓨터가 이겼을 경우: 컴퓨터의 스코어 +1

    4. "초기화" 버튼을 눌렀을 때, 스코어와 주사위 눈이 초기설정값으로 바뀐다.
        - 주사위 눈 : 1
        - 스코어 : 0
*/
const DiceGame = () => {
    const [userScore, setUserScore] = useState(0);
    const [comScore, setComScore] = useState(0);
    const [userImg, setUserImg] = useState(dice1);
    const [comImg, setComImg] = useState(dice1);

    const diceImgs = [dice1,dice2,dice3,dice4,dice5,dice6];

    const handleStart = () => {
        // alert('던지기 실행');
        // 랜덤하게 나올 인덱스 번호
        const userRdIdx = parseInt(Math.random()*diceImgs.length);
        const comRdIdx = parseInt(Math.random()*diceImgs.length);
    
        setUserImg(diceImgs[userRdIdx]);
        setComImg(diceImgs[comRdIdx]);

        if(userRdIdx === comRdIdx){
        } else if (userRdIdx > comRdIdx) {
            setUserScore(userScore + 1);
        } else if (userRdIdx < comRdIdx) {
            setComScore(comScore + 1);
        }
    }

    const handleReset = () => {
        setUserImg(dice1);
        setComImg(dice1);
        setUserScore(0);
        setComScore(0);
    }

    return (
        <div className='box'>
            <h1>주사위 게임</h1>
            <ButtonArea handleStart={handleStart} handleReset={handleReset}/>
            <BoardArea  userRdImage={userImg} comRdImage={comImg}
                        userName={"나"} comName={"컴퓨터"} 
                        userScore={userScore} comScore={comScore}/>
        </div>
    )
}

export default DiceGame