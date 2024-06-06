import React from 'react'
import { DumbBellIcon } from '../SVGs/DumbBellSVG'

interface ExerciseProps {}

const Exercise: React.FC<ExerciseProps> = ({}) => {
    const handleChildClick = () => {
        const clickedComponent = <div></div>; 
    };


    return (
        <div onClick={handleChildClick}>
            <button className="entry-buttons" id='Exercise'><DumbBellIcon /></button>
        </div>
    )
}

export default Exercise