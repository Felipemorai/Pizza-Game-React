import React from 'react';
import Cheese from "../assets/BaseCheese.png";
import Base from "../assets/PizzaBase.png";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/Tomato.png";

export default function Customize() {
    return(
        <div style={{display: "flex"}}>
            <div style={{border: "2px solid black", flex: 1}}>
                <div style={{minHeight: 500}}>
                    <img src={Base} alt="Pizza Base" />
                </div>
            </div>
            <div style={{border: "2px solid black", flex: 1}}>
                Checkbox
            </div>
        </div>
    )
}