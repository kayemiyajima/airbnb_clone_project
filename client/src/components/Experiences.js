import React from 'react';
import './Experiences.css';
import { Button } from '@material-ui/core';

function Experiences() {
    return (
        <div className='experiences'>
            <h1>Online Experiences</h1>
            <Button variant='outlined'>Explore all</Button>
            <p>Interactive activities you can do together, led by expert hosts.</p>
            <div className='experiences__card'>
                <img src='https://www.rd.com/wp-content/uploads/2020/03/Nonna-Live-Cooking-class-feature-1200x1200.jpg' alt='' />
                <div className='experiences__card__info'>
                    <h3>Make handmade pasta with Italian grandmas</h3>
                </div>
            </div>
        </div>
    )
}

export default Experiences
