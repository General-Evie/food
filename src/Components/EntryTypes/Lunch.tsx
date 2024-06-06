import React from 'react'
import { BowlIcon } from '../SVGs/BowlSVG'

interface LunchProps {}

const Lunch: React.FC<LunchProps> = ({}) => {
    const handleChildClick = () => {};


    return (
        <div onClick={handleChildClick}>
            <button className="entry-buttons" id="Lunch"><BowlIcon /></button>
        </div>
    )
}

export default Lunch