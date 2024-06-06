import React from 'react'
import { PillsIcon } from '../SVGs/PillsSVG'

interface SupplementsProps {}

const Supplements: React.FC<SupplementsProps> = ({}) => {
    const handleChildClick = () => {
        const clickedComponent = <div></div>; 
    };


    return (
        <div onClick={handleChildClick}>
            <button className="entry-buttons" id='Supplements'><PillsIcon /></button>
        </div>
    )
}

export default Supplements