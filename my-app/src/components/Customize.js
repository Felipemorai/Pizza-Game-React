import React from 'react';
import Cheese from "../assets/BaseCheese.png";
import Base from "../assets/PizzaBase.png";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/Tomato.png";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

export default function Customize({ingredients,setIngredients}) {

    let history = useHistory();
        
    const changeIngredients = (event,name) => {
        /* Console.log(localStorage); */
        let newIngredients = JSON.parse(JSON.stringify(ingredients));
        /* Toggle that ingredient */
        newIngredients[name] = event;
        setIngredients(newIngredients);
    };

    return(
        <div style={{display: "flex" }}>
            
            <div style={{border: "2px solid black", flex: 1}}>
                <div style={{maxHeight: 500, maxWidth: 500, position:"relative"}}>
                    <motion.div
                        initial={{scale: 0}}
                        animate={{
                            //y: ingredients["cheese"] ? 100 : -100,
                            //opacity: ingredients["cheese"] ? 1 : 0,
                            scale: ingredients["cheese"] ? 1 : 0,
                        }}
                        transition={{duration: 0.3 }}
                        className="cheese z1"
                    >
                    <img src={Cheese} alt="Pizza Base" height="100%" width="100%" />
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{
                            y: ingredients["olive"] ? 100 : -100,
                            opacity: ingredients["olive"] ? 1 : 0,
                        }}
                        transition={{duration: 1 }}
                        className="ingredients z4"
                    >
                    <img src={Olive} alt="Pizza Base" height="100%" width="100%" />
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{
                            y: ingredients["pineapple"] ? 100 : -100,
                            opacity: ingredients["pineapple"] ? 1 : 0,
                        }}
                        transition={{duration: 1 }}
                        className="ingredients z3"
                    >
                    <img src={Pineapple} alt="Pizza Base" height="100%" width="100%" />
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{
                            y: ingredients["mushroom"] ? 100 : -100,
                            opacity: ingredients["mushroom"] ? 1 : 0,
                        }}
                        transition={{duration: 1 }}
                        className="ingredients z4"
                    >
                    <img src={Mushroom} alt="Pizza Base" height="100%" width="100%" />
                    </motion.div>
                     <motion.div
                        initial={{opacity: 0}}
                        animate={{
                            y: ingredients["basil"] ? 100 : -100,
                            opacity: ingredients["basil"] ? 1 : 0,
                        }}
                        transition={{duration: 1 }}
                        className="ingredients z4"
                    >
                      <img src={Basil} alt="Pizza Base" height="100%" width="100%" />
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{
                            y: ingredients["tomato"] ? 100 : -100,
                            opacity: ingredients["tomato"] ? 1 : 0,
                        }}
                        transition={{duration: 0.5 }}
                        className="ingredients z4"
                    >
                      <img src={Tomato} alt="Pizza Base" height="100%" width="100%"  />
                    </motion.div>
                    <img
                      src={Base}
                      alt="Pizza Base" 
                      height="100%" 
                      width="100%" 
                    />
                </div>
            </div>
            <div style={{border: "2px solid black", flex: 1}}>
            <label class="container-checkbox">
                Pineapple
                <input
                  type="checkbox"
                  checked={ingredients["pineapple"]}
                  onChange={(event) => changeIngredients(event.currentTarget.checked, "pineapple")
                }
                />
                <span className="checkmark"></span>
            </label>
            <label class="container-checkbox">
                Basil
                <input
                  type="checkbox"
                  checked={ingredients["basil"]}
                  onChange={(event) => changeIngredients(event.currentTarget.checked, "basil")
                }
                />
                <span className="checkmark"></span>
            </label>
            <label class="container-checkbox">
                Olive
                <input
                  type="checkbox"
                  checked={ingredients["olive"]}
                  onChange={(event) => changeIngredients(event.currentTarget.checked, "olive")
                }
                />
                <span className="checkmark"></span>
            </label>
            <label class="container-checkbox">
                Tomato
                <input
                  type="checkbox"
                  checked={ingredients["tomato"]}
                  onChange={(event) => changeIngredients(event.currentTarget.checked, "tomato")
                }
                />
                <span className="checkmark"></span>
            </label>
            <label class="container-checkbox">
                Mushroom
                <input
                  type="checkbox"
                  checked={ingredients["mushroom"]}
                  onChange={(event) => changeIngredients(event.currentTarget.checked, "mushroom")
                }
                />
                <span className="checkmark"></span>
            </label>
            <label className="container-checkbox">
              Cheese
              <input
                type="checkbox"
                checked={ingredients["cheese"]}
                onChange={(event) => changeIngredients(event.currentTarget.checked, "cheese")
              }
              />
              <span className="checkmark"></span>
            </label>
            <button onClick={()=>history.push('/checkout')}>
                Proceed to Checkout
            </button>
            </div>
          
            
        </div>
    );
}