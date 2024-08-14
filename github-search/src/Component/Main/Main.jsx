import React, { useContext } from 'react';
import './Main.css';
import pic from '../../../public/Bitmap.svg';
import Links from '../Links/Links';
import { Themecontext } from '../../App';

function Main() {
    const { theme } = useContext(Themecontext);

    return (
        <main className={theme + "main"}>
            <img src={pic} alt="User Avatar" />
            <div id='user'>
                <div id='username'>
                    <h3 className={theme + "h3"}>The Octocat</h3>
                    <label id='app'>@octocat</label>
                </div>
                <h6>Joined 25 Jan 2011</h6>
            </div>
            <div id='userdata'>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
                <div id='accountnu' className={theme + "nudiv"}>
                    <label className='nu'>
                        <h6>Repos</h6>
                        <h3>8</h3>
                    </label>
                    <label className='nu'>
                        <h6>Followers</h6>
                        <h3>3938</h3>
                    </label>
                    <label className='nu'>
                        <h6>Following</h6>
                        <h3>9</h3>
                    </label>
                </div>
                <Links />
            </div>
        </main>
    );
}

export default Main;
