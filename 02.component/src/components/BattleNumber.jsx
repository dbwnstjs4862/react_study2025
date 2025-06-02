import React, { useState } from 'react'

/* 
    실습) 숫자 맞추기
    1. 버튼을 클릭했을 때, 랜덤한 숫자 생성하기(1~3)
      - parseInt(Math.random() + 3) + 1

    2. 사용자가 누른 버튼의 값과 랜덤한 숫자 비교하기
      - 정답인 경우 -> "정답입니다~!"
      - 틀린 경우 -> "땡~!"
      * 누른 버튼의 값 가져오는 방법 -> event객체.target

*/

const BattleNumber = () => {
  const [inputNum, setInputNum] = useState(null);
  const [comNum, setComNum] = useState(null);
  const [result, setResult] = useState('');

  const handleClick = (event) => {
    const userNum = parseInt(event.target.textContent); // 사용자가 누른 숫자
    const randomNum = parseInt(Math.random() * 3) + 1;   // 1~3 사이 랜덤 숫자

    setInputNum(userNum);
    setComNum(randomNum);

    if (userNum === randomNum) {
      setResult('정답입니다~!');
    } else {
      setResult('땡~!');
    }
  };
  
  return (
    <div>
      <h2>숫자 맞추기 게임</h2>
      <button onClick={handleClick}>1</button>
      <button onClick={handleClick}>2</button>
      <button onClick={handleClick}>3</button>
      <p>당신의 선택: {inputNum}</p>
      <p>컴퓨터 숫자: {comNum}</p>
      <p>결과: {result}</p>
    </div>
  );
};

export default BattleNumber;
