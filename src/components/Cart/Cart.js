import React from 'react';
import './Cart.css';
const Cart = (props) => {
    console.log(props.cart);
    const { cart } = props
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Order : {props.cart.length}</h5>
        </div>
    );
};

export default Cart;