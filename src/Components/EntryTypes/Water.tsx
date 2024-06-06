import React from 'react'
import { WaterIcon } from '../SVGs/WaterSVG'

interface WaterProps {}

const Water: React.FC<WaterProps> = ({ }) => {
    const handleChildClick = () => {
        const clickedComponent = <div></div>; 
    };


    return (
        <div onClick={handleChildClick}>
            <button className="entry-buttons" id='Water'><WaterIcon /></button>
        </div>
    )
}

export default Water