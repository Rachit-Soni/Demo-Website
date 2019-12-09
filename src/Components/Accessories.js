import React, { Component } from 'react'



export default class Accessories extends Component {
    render() {
        return (
            <div>
                {this.props.productData.loading ? (<div>loading...</div>) :
                    (
                        <div className="container c1">
                            <h1 className="accessoriesHeading">Invisalign® Accssories</h1>
                            <hr />

                            {this.props.productData.products.map((product) => {
                                return <div className="row" key={product.id}>
                                <div className="col-md-3">
                                    <img src={product.master.images[0]["product_url"]} alt="Image1" />
                                </div>
                                <div className="col-md-5">
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                </div>
                                <div className="col-md-1">
                                    <div className="vl"></div>
                                </div>
                                <div className="col-md-3">
                                    <b>Price: ${product.price}</b>
                                    <input
                                        type="number"
                                        className="inputNumber"
                                        min="1"
                                        value={this.props.productData.itemQuantityMap[product.id]}
                                        onChange={() => this.props.handleQuantityChange(product.id)} 
                                    />
                                    <br />
                                    <button className="btn btn-primary addToCartButton" onClick={() => this.props.addToCartHandler(product.id)}>Add to Cart</button>
                                </div>
                            </div> 
                            })}
                        </div>
                    )
                }
            </div>
        )
    }
}
