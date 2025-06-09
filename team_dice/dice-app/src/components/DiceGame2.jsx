import React, { useState } from 'react'
import ButtonArea from './ButtonArea'
import Board from './Board'
import BoardArea from './BoardArea'

/* 
  1. 사용자가 "던지기" 버튼을 눌렀을 때, 랜덤으로 숫자가 생성된다. (1~6)

  2. 생성된 숫자로 주사위 눈 이미지를 화면에 출력한다.

  3. 사용자와 컴퓨터의 주사위 눈을 비교한다.
      - 사용자가 이겼을 경우: 사용자의 스코어 +1
      - 컴퓨터가 이겼을 경우: 컴퓨터의 스코어 +1
  
  4. "초기화" 버튼을 눌렀을 때, 스코어와 주사위 눈이 초기설정값으로 바뀐다.
      - 주사위 눈 : 1
      - 스코어 : 0

*/
const DiceGame = () => {

  const imgPath = 'src/assets/img/dice';

  const [user, setUser] = useState({imgPath:`${imgPath}1.png`, score :0});

  const [com, setCom] = useState({imgPath:`${imgPath}1.png`,score: 0});

  //주사위 기능
  const throwDice = () => {

    // 주사위 눈 생성
    let userIndex = parseInt(Math.random()*6)+1;
    let comIndex = parseInt(Math.random()*6)+1;
    
    let userScore = user.score;
    let comScore = com.score;
    
    // 실습) 주사위 눈 비교 -> 이긴 쪽 +1 증가
    if(userIndex > comIndex){
      userScore += 1
    }
    else if(userIndex < comIndex){
      comScore += 1
    }
    
    // 주사위 눈 이미지, 점수 초기화
    // ...(전개연산자)
    // setUserDiceImg(`${imgPath}${userIndex}.png`)
    setUser({
      ...user,
      imgPath:`${imgPath}${userIndex}.png`,
      score: userScore
    });
    setCom({
      ...com,
      imgPath:`${imgPath}${comIndex}.png`,
      score: comScore
    });    
    
  }
  

  //초기화 기능
  const initDice = () => {
    alert('초기화 실행');
    
    // setUserDiceImg(`${imgPath}1.png`)
    // setCom({...com , imgPath: `${com}.${imgPath}1.png`});
  }
  
  return (
    <div className='container'>
        <h1>주사위 게임</h1>
        <ButtonArea throwDice={throwDice} initDice={initDice}/>
        <BoardArea user={user} com={com}/>
    </div>
  )
}

export default DiceGame