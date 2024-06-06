import React from 'react'
import { WheatIcon } from '../SVGs/WheatSVG'

interface HerbalProps {}

const Herbal: React.FC<HerbalProps> = ({}) => {
    const handleChildClick = () => {
        const clickedComponent = <div></div>; 
    };


    return (
        <div onClick={handleChildClick}>
            <button className="entry-buttons" id='Herbal'><WheatIcon /></button>
        </div>
    )
}

export default Herbal