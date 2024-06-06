import React from 'react'
import { CoffeeIcon } from '../SVGs/CoffeeSVG'

interface CoffeeProps {}

const Coffee: React.FC<CoffeeProps> = ({}) => {
    const handleChildClick = () => {
        const clickedComponent = <div></div>; 
    };


    return (
        <div onClick={handleChildClick}>
            <button className="entry-buttons" id='Coffee'><CoffeeIcon /></button>
        </div>
    )
}

export default Coffee