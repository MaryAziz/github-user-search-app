import React, { useContext } from 'react';
import './Header.css';
import moon from '../../../public/moon.svg';
import sun from '../../../public/002-sun.svg'
import { Themecontext } from '../../App';

function Header() {
  const { theme, toggleTheme } = useContext(Themecontext);

  function onhandlchange() {
    toggleTheme();
  }

  return (
    <div id='header'>
      <h3>devfinder</h3>
      <button id='mood' onClick={onhandlchange}>
        <p className={theme + "p"}>{theme === 'light' ? 'DARK' : 'LIGHT'}</p>
        <img src={theme === 'light' ? moon : sun} alt="Theme Icon" />
      </button>
    </div>
  );
}

export default Header;
