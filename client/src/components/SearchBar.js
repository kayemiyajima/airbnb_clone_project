import React, { useState } from 'react';
import './SearchBar.css';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

function SearchBar() {
    const history = useHistory();

    const [showDatePicker, setShowDatePicker] = useState(false);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    };

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const handleClick = () => {
        history.push('/explore');
    }

    return (
        <div className='searchBar'>
            <div className='searchBar__cotaniner'>
                <div className='searchBar__container__item'>
                    <p className='searchBar__container__item__title location'>Location</p>
                    <input type='text' placeholder='Where are you going?' />
                </div>
                <div className='searchBar__container__item datepicker' onClick={()=> setShowDatePicker(!showDatePicker)}>
                    <p className='searchBar__container__item__title'>Date</p>
                    <p className='searchBar__container__item__text'>Add date</p>
                </div>
                <div className='searchBar__container__item guest'>
                    <p className='searchBar__container__item__title'>Guests</p>
                    <input 
                        min={0} 
                        type='number'
                        placeholder='Add guests'
                    />
                </div>
                <Button onClick={handleClick}>
                    <SearchIcon />
                    Search
                </Button>
            </div>
            {showDatePicker && 
                <div className='searchBar__datePicker'>
                    <DateRangePicker 
                        ranges={[selectionRange]}
                        onChange={handleSelect} 
                    />
                </div>
            }
        </div>
    )
}

export default SearchBar
