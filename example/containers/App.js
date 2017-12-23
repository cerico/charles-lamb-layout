import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
const classNames = require('classnames');

import Layout from 'thornton-road';
import Application from '../components/Application';
import Applications from '../components/Applications';
import About from '../components/About';
import { getApplications } from '../actions/applications';

class App extends React.Component  {

  componentWillMount () {
    this.props.getApplications()
  }
  
  render(){


    return (
      <Router>
        <main>
          <Route component={Lsayout}/>
          <div>
            <Switch>
              <Route exact path="/" />
              <Route exact path="/about" />
              <Route path="/applications/:id"/>
            </Switch>
          </div>
        </main>
      </Router>
    );
  }
}

export default connect(null, {getApplications})(App);

