import React, { useState } from 'react'
import img from '../assets/img/cat.jpg';
const LikeCount2 = () => {
const [like, setLike] = useState(0);

const decrease = () => {
  if(like > 0){
    setLike(like-1);
  }
}

  return (
    <div>
      <p>
        <img 
            style={{width:300, height:150}}
            src={"src/assets/img/cat.jpg"}
            alt={"고양이 이미지"} />
      </p>
      <p>좋아요 {like}</p>
      <p>
        {/* onClick 속성에 함수 실행문을 넣을 때 {() => 함수명} 형태로 정의해야 한다. */}
        <button onClick={()=>setLike(like+1)}>💖</button>
        <button onClick={decrease}>💔</button>
      </p>
    </div>
  )

}

export default LikeCount2