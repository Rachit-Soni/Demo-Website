import React, { Component } from 'react';
import Nav from './Components/Nav';
import Accessories from './Components/Accessories'
import './App.css';
import About from './Components/About';
import Cart from './Components/Cart'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
      super(props)

      this.state = {
          loading: true,
          products: {},
          cartCountMap: {},
          itemQuantityMap: {},
          cartCount: 0
      }
  }

  async componentDidMount() {
    const url = 'https://api.myjson.com/bins/1hj9cq';
    const response = await fetch(url)
    const data = await response.json();
    
    let itemQuantityMap = {};

    data.products.map((product) => {
        itemQuantityMap[product.id] = 1; 
    });

    let newState = {
        ...this.state,
        loading: false,
        products: data.products,
        itemQuantityMap: itemQuantityMap
    };

    this.setState(newState);
    console.log(newState);
}

  handleQuantityChange = (productId) => {
    let itemQuantityMap = this.state.itemQuantityMap;
    
    let currentItemCount = itemQuantityMap[productId];
    itemQuantityMap[productId] = currentItemCount + 1;

    let newState = {
        ...this.state,
        itemQuantityMap : itemQuantityMap
    };
    this.setState(newState);
}

//Add to Cart Buttons
  addToCartHandler = (productId) => {
      let itemQuantityMap = this.state.itemQuantityMap;
      let cartCountMap = this.state.cartCountMap;
      let cartCount = this.state.cartCount;

      let currentItemCount = itemQuantityMap[productId] || 0;
      let currentItemCountInCart = cartCountMap[productId] || 0;

      cartCountMap[productId] =  currentItemCount + currentItemCountInCart;
      cartCount += currentItemCount;
      let newState = {
          ...this.state,
          cartCountMap,
          cartCount
      };

      this.setState(newState);
      console.log(newState);
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Nav cartCount={this.state.cartCount}/>
          <div className="container">
            <Switch>       
              <Route path = "/About" exact component = {About} />
              <Route path = "/Cart" exact component = {() => {
                return <Cart
                  productData={this.state}
                />
              }} />
              <Route path = "/" component = {() => {
                return <Accessories 
                addToCartHandler = {this.addToCartHandler}
                handleQuantityChange={this.handleQuantityChange}
                productData={this.state}
              />
              }} />  
            </Switch>

          </div>

        </div>
      </Router>
  );
  }
}
