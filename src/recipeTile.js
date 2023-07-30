import React from 'react';
import './recipeTile.css'

const recipeTile = ({ recipe }) => {
    return (

        <div className='recipeTile'>
            <img className='recipeTile__img' src={recipe['recipe']['image']} />
            <p className='recipeTile__name'>{recipe['recipe']['label']}</p>

        </div>


    )
}

export default recipeTile
