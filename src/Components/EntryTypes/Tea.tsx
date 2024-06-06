import React from 'react'
import { TeaIcon } from '../SVGs/TeaSVG'

interface TeaProps {}
   

const Tea: React.FC<TeaProps> = ({ }) => {
    const handleChildClick = () => {
        const clickedComponent = <div></div>; 
    };


    return (
        <div onClick={handleChildClick}>
            <button className="entry-buttons" id='Tea'><TeaIcon /></button>
        </div>
    )
}

export default Tea