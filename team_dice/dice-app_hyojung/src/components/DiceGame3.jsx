import React, { useState } from 'react'
import ButtonArea2 from './ButtonArea2';
import BoardArea2 from './BoardArea2';


const DiceGame3 = () => {
    const imgPath = 'src/assets/img/dice';

    const [ user, setUser ] = useState({imgPath:`${imgPath}1.png`, score:0});

    const [ com, setCom ] = useState({imgPath:`${imgPath}1.png`, score:0});
    
    // 주사위 던지기 기능
    const throwDice = () => {
        alert('던지기 실행');

        // 주사위 눈 생성
        let userIndex = parseInt(Math.random()*6)+1;
        let comIndex = parseInt(Math.random()*6)+1;

        // setState()로 바로 변경이 안되기 때문에 변수에 저장해서 활용해야 함
        let userScore = user.score;
        let comScore = com.score;

        // 주사위 눈 비교 -> 이긴 쪽 +1 증가
        if (userIndex > comIndex) {
            // setUserScore(userScore+1);
            userScore += 1;
        } else if (userIndex < comIndex) {
            // setComScore(comScore+1);
            comScore += 1;
        }

        // 주사위 눈 이미지, 점수 초기화
        // ...(전개연산자)
        // ex) let user = {imgPath:"~", score:0}
        //     console.log(...user);
        //     출력) imgPath:"~", score:0
        //     변경) imgPath:"새로운 경로", score:0
        setUser({ imgPath: `${imgPath}${userIndex}.png`, score:userScore});
        setCom({ imgPath: `${imgPath}${comIndex}.png`, score:comScore});
    }

    // 초기화 기능
    const initDice = () => {
        alert('초기화 실행');
    }


    return (
        <div>
            <ButtonArea2 throwDice={throwDice} initDice={initDice}/>
            <BoardArea2 user={user} com={com}/>
        </div>
    )
}

export default DiceGame3