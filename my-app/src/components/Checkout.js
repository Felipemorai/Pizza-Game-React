import React from 'react';

export default function Checkout({ ingredients }) {
    return (
    <div style={{ display: "flex" }}>
        <div>
            <div>
                <h1>My Ingredients</h1>
                {Object.keys(ingredients).map((ingredients)=>{
                    return <p>
                        {ingredients[0].toUpperCase()} 
                        {ingredients.substring(1)}
                    </p>;
                })}
            </div>
        </div>
        <div>Success</div>
    </div>
  );
}