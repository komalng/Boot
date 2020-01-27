import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About'
import Product from './components/products/Product';
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Link to='/'>Home</Link>
          <Link to='/about'>
            About</Link>
            <Link to = "/product">
            Product
            </Link>
          <Switch>
            <Route path = '/product' component = {Product}/>
            <Route path='/about' component={About} />
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}