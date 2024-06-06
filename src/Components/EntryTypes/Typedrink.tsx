import React from 'react'
import { WaterIcon } from '../SVGs/WaterSVG'

interface TypedrinkProps {}

const Typedrink: React.FC<TypedrinkProps> = ({}) => {
    const handleChildClick = () => {
        const clickedComponent = <div></div>; 
    };


    return (
        <div onClick={handleChildClick}>
            <button className="entry-buttons" id='Drink'><WaterIcon /></button>
        </div>
    )
}

export default Typedrink