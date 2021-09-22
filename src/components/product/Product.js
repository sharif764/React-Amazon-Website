import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {

    const { img, name, key, price, priceFraction, seller, shipping, start, stock, url } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <div><img src={img} alt="nothing" /></div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by :{seller}</small></p>
                <p>Price : {price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={() => props.handleAddToCart(props.product)} className="btn-regular">{element}add to cart</button>
            </div>
        </div>
    );
};

export default Product;