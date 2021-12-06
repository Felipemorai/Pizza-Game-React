import React, { useState } from "react";
import Header from "./components/Header";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Customize from "./components/Customize";
import Checkout from "./components/Checkout";

function App() {
    const [ingredients, setIngredients] = useState ({
        basil: false,
        cheese: false,
        mushroom: false,
        olive: false,
        pineapple: false,
        tomato: false,
    });

    return (
    <div>
        <Header />
        <Router>
            <Switch>
                <Route exact path="/">
                    <Customize
                      ingredients={ingredients}
                      setIngredients={setIngredients}
                      />
                </Route>
                <Route path="/checkout">
                    <Checkout ingredients={ingredients} />
                </Route>
            </Switch>
        </Router>
    </div>
    );
}

export default App;