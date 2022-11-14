import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div>
            <div className='box'>
                <h4>{localStorage.getItem('category')}</h4>
                <h4>{localStorage.getItem('url')}</h4>
                <h4>{localStorage.getItem('title')}</h4>
            </div>
        </div>
    );
};

export default Card;