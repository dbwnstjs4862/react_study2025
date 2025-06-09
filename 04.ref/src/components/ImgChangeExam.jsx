import React, { useRef, useState } from 'react';
import 고양이 from '../assets/img/고양이.webp';
import 강쥐 from '../assets/img/강쥐.jpg';

const ImgChangeExam = () => {
  const img = useRef("");
  const [imgSrc, setImgSrc] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = img.current.value.trim();  // 공백 제거

    if (value === "고양이") {
      setImgSrc(고양이);
    } else if (value === "강아지") {
      setImgSrc(강쥐);
    } else {
      alert("이미지를 찾을 수 없습니다.");
      setImgSrc(null);
    }

    img.current.value = '';
  };

  return (
    <div>
      <p>희망하는 사진이 있으신가요?</p>
      <input type="text" ref={img} />
      <input type="submit" value="변경!" onClick={handleSubmit} />
      <div style={{ marginTop: '20px' }}>
        {imgSrc && <img src={imgSrc} alt="animal" width="200" />}
      </div>
    </div>
  );
};

export default ImgChangeExam;
