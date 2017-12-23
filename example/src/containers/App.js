import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
const classNames = require('classnames');

import Layout from 'charles-lamb';
import Products from '../components/Products';
import About from '../components/About';
import { getProducts } from '../actions/Products';

class App extends React.Component  {
  
  render(){

    return (
      <Router>
        <main>
          <Route component={Layout}/>
          <div>
            <Switch>
              <Route exact path="/" component={Products} />
              <Route exact path="/about" component={About}/>
            </Switch>
          </div>
        </main>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
      products: state.products
    })
}

export default connect(mapStateToProps, {getProducts})(App);

