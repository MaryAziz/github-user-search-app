import React, { useContext } from 'react';
import './Search.css';
import Combined from '../../../public/Combined Shape.svg';
import { Themecontext } from '../../App';

function Search() {
  const passvalues = useContext(Themecontext);
  console.log(passvalues.theme)

  return (
    <div id='search' className={passvalues.theme + "div"}>
        <img src={Combined} alt="Search Icon" />
        <input type="text" placeholder="Search GitHub username..." />
        <button id='searchbtn'>Search</button>
    </div>
  );
}

export default Search;
