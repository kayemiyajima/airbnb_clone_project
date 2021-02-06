import React from 'react';
import './Experiences.css';
import { Button } from '@material-ui/core';

function Experiences() {
    return (
        <div className='experiences'>
            <h1>Online Experiences</h1>
            <Button variant='outlined'>Explore all</Button>
            <p>Interactive activities you can do together, led by expert hosts.</p>
            <div className='experiences__cardCotainer'>
                <div className='experiences__card container1'>
                    <img src='https://www.rd.com/wp-content/uploads/2020/03/Nonna-Live-Cooking-class-feature-1200x1200.jpg' alt='' />
                    <div className='experiences__info'>
                        <h3>Make handmade pasta with Italian grandmas</h3>
                    </div>
                </div>

                <div className='experiences__card container2'>
                    <img src='https://www.winestyletravel.com/wp-content/uploads/2020/01/tomar-yerba-mate-argentina-1.jpg' alt='' />
                    <div className='experiences__info'>
                        <h3>Get to know the famous Yerba Mate from Argentina</h3>
                    </div>
                </div>

                <div className='experiences__card container3'>
                    <img src='https://archive.triblive.com/wp-content/uploads/2018/11/ptrfdclass12080215-2.jpg' alt='' />
                    <div className='experiences__info'>
                        <h3>Make Mexican Sterrt Tacos with a pro chef</h3>
                    </div>
                </div>
                
                <div className='experiences__card container4'>
                    <img src='https://www.postmatric.co.za/wp-content/uploads/2015/09/Magician-1.jpg' alt='' />
                    <div className='experiences__info'>
                        <h3>Magic classes with a television magician</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences
