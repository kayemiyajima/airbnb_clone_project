import React from 'react';
import './Category.css';

function Category() {
    return (
        <div className='category'>
            <h1>Live Anywhere</h1>
            <div className='category__container'>
                <div className='category__container__card'>
                    <img src='https://archello.s3.eu-central-1.amazonaws.com/images/2020/04/18/Modern-House-Design-1.1587212339.6759.jpg' alt='home' />
                    <h3>Entire homes</h3>
                </div>
                <div className='category__container__card'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_A8UH2sqs-BZhB4ncaqng0Y1adPcnZfm9Pg&usqp=CAU' alt='Cabin and cottage' />
                    <h3>Cabins and cottages</h3>
                </div>
                <div className='category__container__card'>
                    <img src='https://i.pinimg.com/originals/9b/e1/b1/9be1b1c32b40a38f10801b568b1c896b.jpg' alt='Unique stay' />
                    <h3>Unique stays</h3>
                </div>
                <div className='category__container__card'>
                    <img src='https://www.shbarcelona.com/blog/en/wp-content/uploads/2013/11/bruno-cervera-azsk_6IMT3I-unsplash-1-810x540.jpg' alt='Pets friendly' />
                    <h3>Pets welcome</h3>
                </div>
            </div>
        </div>
    )
}

export default Category
