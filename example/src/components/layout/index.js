import React, { Component } from 'react';
import Sidebar from './sidebar';
import styles from './layout.css';
import Header from './header';



const classNames = require('classnames');

class Layout extends Component {



  showContent() {

    
    return (
      <div className={styles.container}>
          <Header/>
      </div>
    )
  }

  render() {
    return (
      this.showContent()
    )
  }
}



export default Layout;


