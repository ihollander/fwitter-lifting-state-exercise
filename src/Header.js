import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

function Header({ darkMode, handleToggleDarkMode }) {
  return (
    <div className={`ui fixed menu ${darkMode ? "inverted" : ""}`}>
      <Logo />
      <div className="right menu">
        <Menu handleToggleDarkMode={handleToggleDarkMode} />
      </div>
    </div>
  )
}

export default Header