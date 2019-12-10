import React from 'react'

export default function Cart(props) {
    console.log(props);

    let cartList = [];

    Object.keys(props.productData.cartCountMap).forEach(productId => {
        
        
        let product = {
            name: props.productData.products[productId-1].name,
            price: props.productData.products[productId-1].price,
            quantity: props.productData.cartCountMap[productId]
        };
         cartList.push(product);
    })


    return (
        <div>
            <h1 className = "cartHeading">Cart Details:</h1>
            {
                cartList.map((item => {
                    return <div className= "card">
                                Item Name:{item.name} <br/>
                                Quantity:{item.quantity} <br/>
                                Price: {item.price * item.quantity}

                            </div>
                }))
            }
        </div>
    )
}


// Life Cycle mthds
// Redux basics 

