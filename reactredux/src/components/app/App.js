import React, {Component} from "react";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import ErrorBoundry from "../error-boundry/error-boundry";
import {withBookstoreService} from "../hoc";
import {Route,Switch} from 'react-router-dom';
import {CartPage, HomePage} from "../pages";

const App = () =>{
    return (
        <Switch>
            <Route path ="/"
                   component ={HomePage}
                   exact/>
            <Route
                   path = "/cart"
                   component={CartPage}
            />
        </Switch>
    )
};
export default App;