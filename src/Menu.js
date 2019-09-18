import React from 'react'

function Menu(props) {
  console.log(props.handleToggleDarkMode)

  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input onChange={props.handleToggleDarkMode} type="checkbox" name="public" />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu