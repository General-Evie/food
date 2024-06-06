import React from "react";
import { PizzaIcon } from "../SVGs/PizzaSVG";

interface SnacksProps {}

const Snacks: React.FC<SnacksProps> = ({}) => {
    const handleChildClick = () => {};

    return (
        <div onClick={handleChildClick}>
            <button className="entry-buttons" id="Snacks"><PizzaIcon /></button>
        </div>
    )
}

export default Snacks