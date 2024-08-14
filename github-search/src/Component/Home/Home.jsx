import React, { useContext } from 'react';
import './Home.css';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Main from '../Main/Main';
import { Themecontext } from '../../App';

function Home() {
    const { theme } = useContext(Themecontext);
    console.log(theme)
    return (
        <div id='main' className={theme + "head"}>
            <Header />
            <Search />
            <Main />
        </div>
    );
}

export default Home;
