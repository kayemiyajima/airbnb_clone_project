import React from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Banner() {
    const history = useHistory();

    const handleClick = () => {
        history.push('/explore');
    }
    
    return (
        <div className='banner'>
            <div className='banner__info'>
                <img 
                    className='banner__info__logo'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToYEqoDS4Uo2fnuyp96uTOfek9Xaeeb6BoEQ&usqp=CAU' 
                    alt='white logo'/>
                <br />
                <br />
                <h1>Get out and stretch your imagination</h1>
                <br />
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <br />
                <Button 
                    variant='contained'
                    onClick={handleClick}
                >
                        Explore nearby stays
                </Button>
            </div>
        </div>
    )
}

export default Banner
