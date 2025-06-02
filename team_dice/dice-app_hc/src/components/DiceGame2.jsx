import React, { useState } from 'react'
import BoardArea from './BoardArea'
import ButtonArea from './ButtonArea'


/*
  1. 사용자가 "던지기" 버튼을 눌렀을 때, 랜덤으로 숫자가 생성된다.(1~6)

  2. 생성된 숫자로 주사위 눈 이미지를 화면에 출력한다

  3. 사용자와 컴튜터의 주사위 눈을 비교한다
    - 사용자가 이겼을 경우 : 사용자의 스코어 +1
    - 컴퓨터가 이겼을 경우 : 컴퓨터의 스코어 +1

  4. "초기화 버튼을 눌렀을 때, 스코어와 주사위 눈이 초기설정값으로 바뀐다."
    - 주사위 눈 : 1
    - 스코어 : 0

*/
const DiceGame2 = () => {

  const imgPath = 'src/assets/img/img/img/dice';

  const [user, setUser] = useState({imgPath:`${imgPath}1.png`, score:0})
  const [com, setCom] = useState({imgPath: `${imgPath}1.png`, score:0})

  // const [userDice,setUserDice] = useState(1);
  // const[userScore,setUserScore] = useState(0);
  // const[userDiceImg, setUserDiceImg] = useState(`${imgPath}1.png`);
  // const [comDice,setComDice] = useState(1);
  // const[comScore,setComScore] = useState(0);
  // const[comDiceImg, setComDiceImg] = useState(`${imgPath}1.png`);
  
  

  const diceRoll = () => {
    // alert('던지기 실행')

    // 주사위 눈
    let userIndex = parseInt(Math.random() * 6)+1;
    let comIndex = parseInt(Math.random() * 6)+1;

    let userScore = user.score;
    let comScore = com.score;

    
    // 주사위 눈 비교
    
    if(userIndex > comIndex){
      userScore += 1;
    } else if(comIndex > userIndex){
      comScore += 1;
    } else{
      alert('비겼습니다.');
    }
    // 주사위 눈 이미지 초기화
    // ...(전개연산자) 
    // ex) let user = {imgPath:"~", score:0}

    // 출력 ) imgPath:"~", score:0
    // 변경 ) imgPath:"새로운 경로" , score:0
    
    console.log(...user);
    
    setUser({
      ...user,
      imgPath: `${imgPath}${userIndex}.png`,
      score: userScore
    });
    
    setCom({
      ...com,
      imgPath: `${imgPath}${comIndex}.png`,
      score: comScore
    })
  }



  const RESETGAME = () => {
    alert('초기화 실행')
    // setUserDice(0);
    // setUserScore(0);
    // setUserDiceImg(`${imgPath}1.png`)
    // setComDice(0);
    // setComScore(0);
    // setComDiceImg(`${imgPath}1.png`)
    // setResult('');
  }

  
  return (
    <div className='container'>
        <h1>주사위 게임</h1>
        <ButtonArea diceRoll={diceRoll} RESETGAME={RESETGAME}/>
        <BoardArea user = {user} com={com}/>
    </div>
  )
}

export default DiceGame2