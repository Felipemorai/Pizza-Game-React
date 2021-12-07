import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


export default function Checkout({ ingredients }) {
    const history = useHistory();
    const [ success, setSuccess ] = useState(false);

    return (
    <div style={{ display: "flex" }}>
        <div>
            <div>
                <h1>My Ingredients</h1>
                {Object.keys(ingredients).map((ingredient)=>{
                  return (
                      ingredients[ingredient] && (
                    <p>
                        {ingredient[0].toUpperCase()} 
                        {ingredient.substring(1)}
                    </p>
                    )
                  );
                })}
                <button onClick={()=>setSuccess(true)}>
                    Confirm
                </button>
                <button onClick={()=>history.push("/")}>
                    Go Back
                </button>
            </div>
        </div>
        <div>
            {success && (
                <div style={{ textAlign: "center" }}>
                    <img src={Pizzaman} alt="pizzaman" height="300px" />
                    <div style={{ fontFamily: "Open Sans Condensed", fontsize: 35}}>
                        We have received your order, Thank you
                    </div>
                    <div style={{ fontFamily: "Comfortaa "}}>
                        
                    </div>
                </div>
            )}
        </div>
    </div>
  );
}