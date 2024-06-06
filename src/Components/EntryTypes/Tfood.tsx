import React from 'react'
import { UtensilsIcon } from '../SVGs/UtensilsSVG';

interface TfoodProps {}

const Tfood: React.FC<TfoodProps> = ({}) => {
    const handleChildClick = () => {
    };

    return (
        <div onClick={handleChildClick}>
            <button className="entry-buttons" id='Food'><UtensilsIcon /></button>
        </div>
    )
}

export default Tfood