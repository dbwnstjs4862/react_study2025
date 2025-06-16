import React from 'react'
import { Link } from 'react-router'

const Mypage = () => {
  return (
    <div>
        <h1>Mypage</h1>
        <p>내 정보 보기</p>
        <Link to={"/"}>Home 이동</Link>
    </div>
  )
}

export default Mypage