import React, { useState } from 'react'
import menuData from '../assets/data/coffee_menu.json'
import MenuItem from './MenuItem'
import MenuNav from './MenuNav'

const MenuBoard = () => {
  const [menuDatas] = useState(menuData)
  const [selectedCategory, setSelectedCategory] = useState('All')

  // 🔥 필터링 함수
  const filteredMenus = selectedCategory === 'All'
    ? menuDatas
    : menuDatas.filter(item => item.category === selectedCategory)

  const menuFilter = (category) => {
    setSelectedCategory(category)
  }

  return (
    <div className='menu-board'>
      <h1>메뉴판</h1>

      {/* 카테고리 버튼 영역 */}
      <MenuNav onFilter={menuFilter} />

      {/* 메뉴 리스트 */}
      <div className='menu-list'>
        {filteredMenus.map(item => (
          <MenuItem
            key={item.id}
            name={item.name}
            price={item.price}
            img={item.img}
            category={item.category}
          />
        ))}
      </div>
    </div>
  )
}

export default MenuBoard
