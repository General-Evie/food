import React from 'react'
import { EnergyIcon } from '../SVGs/EnergySVG'

interface EnergyProps {}

const Energy: React.FC<EnergyProps> = ({}) => {
    const handleChildClick = () => {
        const clickedComponent = <div></div>; 
    };


    return (
        <div onClick={handleChildClick}>
            <button className="entry-buttons" id='Energy'><EnergyIcon /></button>
        </div>
    )
}

export default Energy