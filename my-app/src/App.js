import React from "react";
import Header from "./components/Header";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Customize from "./components/Customize";

function App() {
    return (
    <div>
        <Header />
        <Router>
            <Switch>
                <Route exact path="/">
                    <Customize />
                </Route>
                <Route path="/checkout">
                    <h1>Checkout</h1>
                </Route>
            </Switch>
        </Router>
    </div>
    );
}

export default App;