import React from 'react'
import { WheatPlateIcon } from '../SVGs/WheatPlateSVG'

interface DinnerProps {}

const Dinner: React.FC<DinnerProps> = ({}) => {
    const handleChildClick = () => {};


    return (
        <div onClick={handleChildClick}>
            <button className="entry-buttons" id='Dinner'><WheatPlateIcon /></button>
        </div>
    )
}

export default Dinner