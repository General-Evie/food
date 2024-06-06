import React from "react";
import { BurgerIcon } from "../SVGs/BurgerSVG";

interface JunkProps {}

const Junk: React.FC<JunkProps> = ({}) => {
    const handleChildClick = () => {
    };

    return (
        <div onClick={handleChildClick}>
            <button className="entry-buttons" id="Junk"><BurgerIcon /></button>
        </div>
    )
}

export default Junk