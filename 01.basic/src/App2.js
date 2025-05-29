import React from 'react'

const App2 = () => {
  
    let name = prompt("이름을 입력하세요");
    let now = new Date();
    let month = now.getMonth();
    let season = "";

    if (month >= 3 && month <= 5) {
        season = "봄";
    } else if (month >= 6 && month <= 8) {
        season = "여름";
    } else if (month >= 9 && month <= 11) {
        season ="가을";
    } else if (month === 12 || month === 1 || month === 2) {
        season ="겨울";
    } else {
        season = "유효하지 않은 월입니다";
    }
    
    // console.log(now)
    // console.log(now.toLocaleDateString())
    return (
        <div className='App2'>
            <h1>{now.toLocaleDateString()}</h1> <br/>
            <hr></hr>
            {name}님 지금은 {season}입니다. 좋은 하루 보내세요:)
            
        </div>
    )
}

export default App2