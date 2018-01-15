import React from 'react';
import { connect } from 'react-redux';
const classNames = require('classnames');
import styles from './products.css';
import Card from 'hello-cards';

import ProductItem from './ProductItem';

class Products extends React.Component  {

  render (){
    
    const style = {
      general: {
        display: 'flex',
        background:'#323132',
        paddingTop: '5%'
      }
    }
  
    return(
      <div className={styles.grid} style={style.general}>
        {this.props.products.length > 0 ? 
          this.props.products.map((product, i) =>
            <Card 
              product={product}
              key = {i}
            />
          ) 
          : null
        }
      </div> 
    )
  }
}

const mapStateToProps = (state) => {
  return ({
      products: state.products,
    })
}

export default connect(mapStateToProps, null )(Products);


