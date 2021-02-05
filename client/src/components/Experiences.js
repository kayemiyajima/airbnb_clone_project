import React from 'react';
import './Experiences.css';
import { Button } from '@material-ui/core';
import ExperienceCard from './ExperienceCard';

function Experiences() {
    return (
        <div className='experiences'>
            <h1>Online Experiences</h1>
            <Button variant='outlined'>Explore all</Button>
            <p>Interactive activities you can do together, led by expert hosts.</p>
            <div className='experiences__cardCotainer'>
                <div className='experiences__container1'>
                    <ExperienceCard 
                        src='https://www.rd.com/wp-content/uploads/2020/03/Nonna-Live-Cooking-class-feature-1200x1200.jpg'
                        title='Make handmade pasta with Italian grandmas' 
                    />
                </div>
                <div className='experiences__container2'>
                    <ExperienceCard 
                        src='https://www.winestyletravel.com/wp-content/uploads/2020/01/tomar-yerba-mate-argentina-1.jpg'
                        title='Get to know the famous Yerba Mate from Argentina'
                    />
                </div>
                <div className='experiences__container3'>
                    <ExperienceCard 
                        src='https://archive.triblive.com/wp-content/uploads/2018/11/ptrfdclass12080215-2.jpg'
                        title='Make Mexican Sterrt Tacos with a pro chef' 
                    />
                </div>
                <div className='experiences__container4'>
                    <ExperienceCard 
                        src='https://www.postmatric.co.za/wp-content/uploads/2015/09/Magician-1.jpg'
                        title='Magic classes with a television magician' 
                    />
                </div>
            </div>
        </div>
    )
}

export default Experiences
