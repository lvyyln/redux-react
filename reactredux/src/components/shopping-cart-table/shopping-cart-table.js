import React from 'react';
import './shopping-cart-table.css';
import {connect} from 'react-redux';
import {bookDecreaseFromCart, bookIncreaseFromCart, bookDeleteFromCart, bookAddedToCart} from "../../actions";

const ShoppingCartTable = ({items, total, bookIncreaseFromCart, bookDecreaseFromCart, bookDeleteFromCart}) => {
    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                <th>#</th>
                <th>Item</th>
                <th>Count</th>
                <th>Price</th>
                <th>Action</th>
                </thead>

                <tbody>
                {
                    items.map((item, idx) => {
                        return (
                            <tr key={item.id}>
                                <td>{idx + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.count}</td>
                                <td>${item.total}</td>
                                <td>
                                    <button
                                        onClick={() => bookDeleteFromCart(item.id)}
                                        className="btn btn-outline-danger btn-sm float-right">
                                        <i className="fa fa-trash-o"/>
                                    </button>
                                    <button
                                        onClick={() => bookIncreaseFromCart(item.id)}
                                        className="btn btn-outline-success btn-sm float-right">
                                        <i className="fa fa-plus-circle"/>
                                    </button>
                                    <button
                                        onClick={() => bookDecreaseFromCart(item.id)}
                                        className="btn btn-outline-warning btn-sm float-right">
                                        <i className="fa fa-minus-circle"/>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>

            <div className="total">
                Total: ${total}
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        items : state.shoppingCart.cartItems,
        total: state.shoppingCart.orderTotal
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        bookIncreaseFromCart: (id) => {
            dispatch(bookAddedToCart(id))
        },
        bookDeleteFromCart: (id) => {
            dispatch(bookDeleteFromCart(id))
        },
        bookDecreaseFromCart: (id) => {
            dispatch(bookDecreaseFromCart(id))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
