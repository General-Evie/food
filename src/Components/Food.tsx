import React, { useState } from 'react'
import Lunch from './EntryTypes/Lunch'
import Tfood from './EntryTypes/Tfood'
import Junk from './EntryTypes/Junk'
import Snacks from './EntryTypes/Snacks'
import Dinner from './EntryTypes/Dinner'
import Breakfast from './EntryTypes/Breakfast'

interface FoodProps {
    food: (isOpen: boolean) => void;
    renderType: (type: string) => void;
}


const Food: React.FC<FoodProps> = ({ food, renderType }) => {
    const [activeComponent, setActiveComponent] = useState<string | null>(null);

    const handleType = (type: string, ) => {
        food(true);
        renderType(type)
        
    };

    return (
        <div>
            <div className="food">
                <div className='entry-type' onClick={() => handleType('Lunch')}>
                    <Lunch />
                    <div className="entry-type-name">Lunch</div>
                </div>
                <div className='entry-type' onClick={() => handleType('Food')}>
                    <Tfood />
                    <div className="entry-type-name">Food</div>
                </div>
                <div className='entry-type' onClick={() => handleType('Junk')}>
                    <Junk />
                    <div className="entry-type-name">Junk</div>
                </div>
                <div className='entry-type' onClick={() => handleType('Snacks')}>
                    <Snacks />
                    <div className="entry-type-name">Snacks</div>
                </div>
                <div className='entry-type' onClick={() => handleType('Dinner')}>
                    <Dinner />
                    <div className="entry-type-name">Dinner</div>
                </div>
                <div className='entry-type' onClick={() => handleType('Breakfast')}>
                    <Breakfast />
                    <div className="entry-type-name">Breakfast</div>
                </div>
            </div>
        </div>
    )
}

export default Food