import React from 'react';
import './ExperienceCard.css';

function ExperienceCard({ src, title }) {
    return (
        <div className='experienceCard'>
            <div className='experienceCard__image'>
                <img src={src} alt='' />
            </div>
            <div className='experienceCard__info'>
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default ExperienceCard
