import React, { useState } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, Button } from '@material-ui/core';
import SearchBar from './SearchBar';

function Header() {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='header'>
            <div className='header__top'>
                <div className='header__left'>
                    <img 
                        className='header__left__logo'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJwlrSk-L2PTJLgKmKZ4FH-4_LYRqGkwjJBw&usqp=CAU'
                        alt='airbnb logo'/>
                </div>
                <div className='header__center'>
                    {/* <input type='text' placeholder='Start your search' /> */}
                    <div className='header__center__searchButton' onClick={()=> setShowSearch(!showSearch)}>
                        <p>Start your search</p>
                        <SearchIcon />
                    </div>
                </div>
                <div className='header__right'>
                    <Button>
                        <p>Become a host</p>
                    </Button>
                    <Button>
                        <LanguageIcon />
                    </Button>
                    <Button>
                        <MenuIcon />
                        <Avatar className='header__right__avatar'/>
                    </Button>
                </div>
            </div>
            <div>
                {showSearch && <SearchBar />}
            </div>
        </div>
    )
}

export default Header
