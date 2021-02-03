import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';
import Category from './Category';
import Experiences from './Experiences';

function Home() {
    return (
        <div className='home'>
            <Banner />
            <Category />
            
            <div className='home__section'>
                <Card 
                    src='https://q-xx.bstatic.com/images/hotel/max1024x768/221/221343627.jpg'
                    title='Penthouse in Barcelona'
                    description='Enjoy the amazing sight of Barcelona with this stunning penthouse'
                    price='€350/night' />
                <Card 
                    src='https://cf.bstatic.com/images/hotel/max1024x768/925/92583659.jpg'
                    title='Loft in Gracia'
                    description='Bright Studio with a lot of caharacter in the center of Vila de Gracia'
                    price='€79/night' />
                <Card 
                    src='https://cf.bstatic.com/images/hotel/max1024x768/141/141630875.jpg'
                    title='3 Bedroom Apartment'
                    description='Enjoy the amazing sight of Barcelona with this stunning penthouse'
                    price='€210/night' />
                <Card 
                    src='https://cf.bstatic.com/images/hotel/max1024x768/141/141630875.jpg'
                    title='3 Bedroom Apartment'
                    description='Enjoy the amazing sight of Barcelona with this stunning penthouse'
                    price='€210/night' />
            </div>

            <Experiences />
        </div>
        
    )
}

export default Home
