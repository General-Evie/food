import React from 'react'
import { DumbBellIcon } from './SVGs/DumbBellSVG'
import { MedsIcon } from './SVGs/MedsSVG'
import { WheatIcon } from './SVGs/WheatSVG'
import { PillsIcon } from './SVGs/PillsSVG'
import Exercise from './EntryTypes/Exercise'
import Meds from './EntryTypes/Meds'
import Herbal from './EntryTypes/Herbal'
import Supplements from './EntryTypes/Supplements'

interface OtherProps {
    other: (isOpen: boolean) => void;
    renderType: (type: string) => void;
}

const Other: React.FC<OtherProps> = ({ other, renderType }) => {

    const handleType = (type: string) => {
        other(true);
        renderType(type)
    };


    return (
        <div>
            <div className="others">
                <div className='entry-type' onClick={() => handleType('Exercise')}>
                    <Exercise />
                    <div className='entry-type-name'>Exercise</div>
                </div>
                <div className='entry-type' onClick={() => handleType('Meds')}>
                    <Meds />
                    <div className='entry-type-name'>Meds</div>
                </div>
                <div className='entry-type' onClick={() => handleType('Herbal')}>
                    <Herbal />
                    <div className='entry-type-name'>Herbal</div>
                </div>
                <div className='entry-type' onClick={() => handleType('Supplements')}>
                    <Supplements />
                    <div className='entry-type-name'>Supplements</div>
                </div>
            </div>
        </div>
    )
}

export default Other