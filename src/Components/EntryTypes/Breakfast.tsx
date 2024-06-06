import React from 'react'
import { BaconIcon } from '../SVGs/BaconSVG'

interface BreakfastProps {
}

const Breakfast: React.FC<BreakfastProps> = ({}) => {
    const handleChildClick = () => {
    };


    return (
        <div onClick={handleChildClick}>
            <button className="entry-buttons" id='Breakfast'><BaconIcon /></button>
        </div>
    )
}

export default Breakfast