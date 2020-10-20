import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                {
                    this.props.products.map(product=>(
                        <li key={product._id}>
                            <div className="product">
                            <a href={'#'+product._id}>
                                <img src={product.image} alt="Product Image"></img>
                                <p>
                                    {product.title}    
                                </p>
                            </a>
                            <div className="product-price">
                                {product.price}
                            </div>
                            <button className="button primary">
                                Add to cart
                            </button>
                            </div>
                        </li>
                    ))
                }
                </ul>
            </div>
        )
    }
}
