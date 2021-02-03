import React from 'react';
import './Explore.css';
import { Button } from '@material-ui/core';
import ExploreResult from './ExploreResult';

function Explore() {
    return (
        <div className='explore'>
            <div className='explore__info'>
                <p>62 stays · 26 august to 30 august · 2 guests</p>
                <h1>Place to stay nearby</h1>
                <Button variant='outlined'>Type pf place</Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>Rooms and beds</Button>
                <Button variant='outlined'>Cancellation Flexibility</Button>
                <Button variant='outlined'>More filters</Button>
            </div>
            <ExploreResult 
                img='http://silvapeakresidences.com/sites/default/files/2018-08/silvapeak-residences-apartment.jpg'
                location='Private room in center of London'
                title='Stay at this spacious Edwardian House'
                description='2 guests · 3 bedroom · 4 bed · 2 shared bathrooms · Wifi · Kitchen · Free parking · Washing machine'
                star={4.73}
                price='€210 / night'
                total='€630 total'
                />
            <ExploreResult 
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCTaoozKE_kom0E4NCM-Qi_WfuE29BnnmE2Q&usqp=CAU'
                location='Private room in Barcelona'
                title='Learge room for 4 people near Rambla'
                description='4 guests · 1 bedroom · 2 beds · 2 shared bathroom · Wifi · Kitchen · Air conditioning · Dryer'
                star={4.02}
                price='€107 / night'
                total='€214 total'
                />
            <ExploreResult 
                img='https://static.apartmentbarcelona.com/mobile/imageWeb/Apartamentos/ID2453/barcelona-apartments-2453-0.jpg'
                location='Entire apartment in center of Barcelona'
                title='Apartment for large groups and families'
                description='6 guests · 3 bedroom · 5 bed · 2 shared bathrooms · Wifi · Kitchen · Washing machine'
                star={4.55}
                price='€210 / night'
                total='€630 total'
                />
            <ExploreResult 
                img='https://gh.serveishabitatge.com/inmuebles/imagenes/75/tn/c7610990f9c4499cae679e8cfe83c39b.jpg'
                location='Entire apartment in Barcelona'
                title='One bedroom apartment in the gothic of BCN'
                description='2 guests · 1 bedroom · 1 bed · 1 bathroom · Wifi · Kitchen · Washer'
                star={3.99}
                price='€115 / night'
                total='€345 total'
                />
            <ExploreResult 
                img='https://www.sunsetbeachclub.com/cache/imgcache.16_9.d01ae642bf857d29483f56675b0784a2.jpg'
                location='Private room in el Masnou'
                title='Bright room for 2 guests near Barcelona'
                description='2 guests · 1 bedroom · 2 bed · 1 bathroom · Wifi · Kitchen · Free parking · Washing machine'
                star={4.02}
                price='€120 / night'
                total='€360 total'
                />
            <ExploreResult 
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKiTKLCp9jE83G83m3lpzpSN1kdqbviq9wmQ&usqp=CAU'
                location='Entire gusthouse in Sant Cugat de Valles'
                title='Healthy Environment close to Barcelona'
                description='2 guests · 1 bedroom · 2 bed · 1 bathroom · Wifi · Free parking · Pet allowed · Washing machine'
                star={4.90}
                price='€99 / night'
                total='€297 total'
                />
            <ExploreResult 
                img='https://cf.bstatic.com/images/hotel/max1024x768/120/120995031.jpg'
                location='Modern 2 bedroom apartment in Valencia'
                title='Stay at this spacious Edwardian House'
                description='2 guests · 2 bedroom · 2 bed · 1 bathroom · Wifi · Kitchen · Washing machine'
                star={3.88}
                price='€79 / night'
                total='€237 total'
                />
        </div>
    )
}

export default Explore
