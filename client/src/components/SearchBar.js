import React from 'react';
import './SearchBar.css';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function SearchBar() {
    return (
        <div className='searchBar'>
            <div className='searchBar__cotaniner'>
                <div className='searchBar__container__item'>
                    <p className='searchBar__container__item__title'>Location</p>
                    <p className='searchBar__container__item__text'>Where are you going?</p>
                </div>
                <div className='searchBar__container__item'>
                    <p className='searchBar__container__item__title'>Date</p>
                    <p className='searchBar__container__item__text'>Add date</p>
                </div>
                <div className='searchBar__container__item'>
                    <p className='searchBar__container__item__title'>Guests</p>
                    <p className='searchBar__container__item__text'>Add guests</p>
                </div>
                <Button>
                    <SearchIcon />
                    Search
                </Button>
            </div>
        </div>
    )
}

export default SearchBar
