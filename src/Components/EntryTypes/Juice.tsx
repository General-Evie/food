import React from 'react'
import { WineIcon } from '../SVGs/WineSVG'

interface JuiceProps {}

const Juice: React.FC<JuiceProps> = ({}) => {
    const handleChildClick = () => {
        const clickedComponent = <div></div>; 
    };


    return (
        <div onClick={handleChildClick}>
            <button className="entry-buttons" id='Juice'><WineIcon /></button>
        </div>
    )
}

export default Juice