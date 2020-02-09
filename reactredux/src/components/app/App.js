import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';

import './app.css';
import {connect} from "react-redux";

const App = ({total,itemsCount}) => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={itemsCount} total={total}/>
            <Switch>
                <Route
                    path="/"
                    component={HomePage}
                    exact />

                <Route
                    path="/cart"
                    component={CartPage}
                />
            </Switch>
        </main>
    );
};

const mapStateToProps = (state) => {
  return {
      total : state.shoppingCart.orderTotal,
      itemsCount : state.shoppingCart.cartItems.count
  }
};

export default connect(mapStateToProps)(App);