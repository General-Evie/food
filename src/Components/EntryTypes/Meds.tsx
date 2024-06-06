import React from 'react'
import { MedsIcon } from '../SVGs/MedsSVG'

interface MedsProps {}

const Meds: React.FC<MedsProps> = ({}) => {
    const handleChildClick = () => {
        const clickedComponent = <div></div>; 
    };


    return (
        <div onClick={handleChildClick}>
            <button className="entry-buttons" id='Meds'><MedsIcon /></button>
        </div>
    )
}

export default Meds