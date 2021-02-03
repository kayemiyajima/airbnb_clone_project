import React from 'react';
import './ExploreResult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star'


function ExploreResult({ img, location, title, description, price, star, total }) {
    return (
        <div className='exploreResult'>
            <img src={img} alt='' />
            <FavoriteBorderIcon className='exploreResult__heart' />
            <div className='exploreResult__info'>
                <div className='exploreResult__infoTop'>
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>_____</p>
                    <p>{description}</p>
                </div>
                <div className='exploreResult__infoBottom'>
                    <div className='exploreResult__stars'>
                        <StarIcon className='exploreResult__star'/>
                        <p><strong>{star}</strong></p>
                    </div>
                    <div className='exploreResult__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreResult
