import React from 'react';
import CardBody from './body';
import Header from './header';
import Footer from './footer';
import styles from './card.css'


const Cardu = (props) => {

  const internalExternal = () => {
    

    console.log(props.product)
    const cardStyle = {
      background: props.product.background,
      color: props.product.color,
      opacity: props.product.opacity || 0.88
    };

    if (props.product.mini){
      cardStyle.height = '190px'
    }

    console.log(cardStyle)

    if (props.product.url) {
      return <a href={props.product.url} className={styles.card} style={cardStyle}>{innerCard()}</a>
    }
    return <a href={props.product.url} className={styles.card} style={cardStyle}>{innerCard()}</a>
  }

  const innerCard = () => {
    const inner = {
      paddingBottom: '1.25rem',
      paddingTop: '2.25rem',
      position: 'relative'
    };
    return <div style={inner}>
      <Header {...props}/>
      {showData()}
      {!props.product.mini ? <Footer {...props}/> : null}
    </div>
  }

  const showData = () =>{
    return (<CardBody {...props}/>)
  }

  return internalExternal()
}

export default Cardu
