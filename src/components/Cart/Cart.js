import React from 'react';
import './Cart.css';
const Cart = (props) => {
    console.log(props.cart);
    const { cart } = props
    let total = 0;
    for (const product of cart) {
        total += product.price;
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Order : {props.cart.length}</h5>
            <p>Total:{total}</p>
        </div>
    );
};

export default Cart;