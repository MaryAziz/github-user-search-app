import React from 'react';
import './Links.css';
import pin from '../../../public/003-pin dark.svg';
import pinDark from '../../../public/003-pin.svg';
import twitt from '../../../public/Path.svg';
import url from '../../../public/002-url dark.svg';
import urlDark from '../../../public/002-url.svg';
import building from '../../../public/001-office-building dark.svg';
import buildingDark from '../../../public/001-office-building.svg';
import { Themecontext } from '../../App'
import { useContext } from 'react'

    const lightThemeLinks = [
        {
            img: pin,
            name: "San Francisco",
            id: 1
        },
        {
            img: twitt,
            name: "Twitter",
            id: 2
        },
        {
            img: url,
            name: "https://github.blog",
            id: 3
        },
        {
            img: building,
            name: "Building",
            id: 4
        },
    ];
    const darkThemeLinks = [
        {
            img: pinDark,
            name: "San Francisco",
            id: 1
        },
        {
            img: twitt,
            name: "Twitter",
            id: 2
        },
        {
            img: urlDark,
            name: "https://github.blog",
            id: 3
        },
        {
            img: buildingDark,
            name: "Building",
            id: 4
        },
    ];
    
    function Links() {
        const { theme } = useContext(Themecontext);
        
        // Choose the correct array based on the theme
        const linksArray = theme === 'light' ? lightThemeLinks : darkThemeLinks;
    
        return (
            <div id='links'>
                {linksArray.map((link) => (
                    <label className='singllink' key={link.id}>
                        <img className='logo' src={link.img} alt={link.name} />
                        {link.name.startsWith('http') ? (
                            <a href={link.name} className='appname' target='_blank' rel='noopener noreferrer'>
                                {link.name}
                            </a>
                        ) : (
                            <span className='appname'>{link.name}</span>
                        )}
                    </label>
                ))}
            </div>
        );
    }
export default Links;
