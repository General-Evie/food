import React from 'react'
import { BeerIcon } from '../SVGs/BeerSVG'

interface AlcoholProps {}

const Alcohol: React.FC<AlcoholProps> = ({}) => {
    const handleChildClick = () => {
        const clickedComponent = <div></div>; 
    };


    return (
        <div onClick={handleChildClick}>
            <button className="entry-buttons" id='Alcohol'><BeerIcon /></button>
        </div>
    )
}

export default Alcohol