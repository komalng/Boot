import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';
import ProductList from './ProductList';
import EditProduct from './EditProduct';
import AddProduct from './AddProduct';


export default class Product extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/add:id' component={EditProduct} />
          <Route path='/add' component={AddProduct} />
          <Route path='/' component={ProductList} />
        </Switch>

      </div>
    );
  }
}