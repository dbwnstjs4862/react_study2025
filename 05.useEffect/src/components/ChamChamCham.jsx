import React, { useState } from 'react'

/* 
    실습) 참참참 게임
    1. 사용자는 공격, 컴퓨터는 수비 역할입니다.
    2. '좌','정면,'우' 중 하나를 클릭했을 때, 사용자와 컴퓨터의 선택을 비교합니다.
     - 같은 선택일 경우: 사용자의 승리!
     - 다른 선택일 경우: 컴퓨터의 승리!
    3. 승리에 대한 결과를 화면에 출력합니다.  

    * '좌','정면','우' 값은 배열로 만들어서 활용할 것!
    * 사용자, 컴퓨터, 결과값 총 3개의 state 생성할 것!

*/

const ChamChamCham = () => {
  const directions = ['좌', '정면', '우']; 

  const [ user, setUser] = useState('');
  const [ com, setCom] = useState('');
  const [ result, setResult] = useState(null);

  const handleClick = (userChoice) => {
    const comChoice = directions[Math.floor(Math.random() * directions.length)];

    setUser(userChoice);
    setCom(comChoice);

    if (userChoice === comChoice) {
      setResult('승리');
    } else {
      setResult('패배');
    }
  };

  return (
    <div>
      <h1>참참참 게임!</h1>

      <div>
        <h3>나의 선택 : {user}</h3>
        <h3>컴퓨터의 선택 : {com}</h3>
        {result && <h3>게임 결과 : {result}</h3>}
      </div>
      <div>
        {directions.map((dir) => (
          <button
            key={dir}
            onClick={() => handleClick(dir)}
          >
            {dir}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ChamChamCham