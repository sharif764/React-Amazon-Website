import React from 'react';
import './Product.css';
const Product = (props) => {

    const { img, name, key, price, priceFraction, seller, shipping, start, stock, url } = props.product;
    return (
        <div className="product">
            <div><img src={img} alt="nothing" /></div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by :{seller}</small></p>
                <p>Price : {price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={() => props.handleAddToCart(props.product)} className="btn-regular">add to cart</button>
            </div>
        </div>
    );
};

export default Product;