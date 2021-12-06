import React from 'react';
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
                <button onClick={()=>}>
                    Go Back
                </button>
            </div>
        </div>
        <div>Success</div>
    </div>
  );
}