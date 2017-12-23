import React from 'react';
import { connect } from 'react-redux';
const classNames = require('classnames');
import styles from './about.css';


class About extends React.Component  {

  render (){

    let display
    this.props.location.pathname === '/' ?
      display = 'flex' :
      display = 'flex'
    
    const style = {
      general: {
        display: display,
        width:'50%',
        fontFamily: 'Inconsolata',
        justifyContent: 'left',
        marginLeft:'25%',
        color: '#484AB3',
        backgroundColor: 'F9F7EE',
        marginBottom:'5%'
      },
      header: {
        fontFamily: 'Raleway',
        width:'100%',
        color: '#549fb8',
        fontSize: '4rem'
      },
      blurb:{
        color:'#484AB3',
        fontSize: '1.5rem',
        lineHeight: '2rem',
        letterSpacing: '0.05rem',
        display:'block',
        marginBottom:'50px',
        fontFamily: 'archivo narrow',
        fontWeight:200
      },
      link: {
        color: '#484AB3'
      },
      img: {
       marginTop:'10px',
       width:'528px'
      },
      code: {
        width: '100%',
        fontSize: '21px',
        color: 'rgb(249, 247, 238)',
        fontFamily: 'archivo narrow',
        fontWeight: '100',
        minWidth:'520px',
        background:'rgb(84, 159, 184)'
      },
      outerCode: {
        padding:'4%',
        width:'524px',
        background:'rgb(84, 159, 184)'
      },
      innerCode :{
        width: '100%',
        fontSize: '21px',
        padding: '5%',
        color: 'rgb(249, 247, 238)',
        fontFamily: 'archivo narrow',
        fontWeight: '100',
        minWidth:'520px',
        background:'rgb(84, 159, 184)'
      }
    }

    return(
      <div className={styles.grid} style={style.general}>
      
      

        <h1 style={style.header}>How To Use</h1>

        <div style={style.blurb}>
        Firstly, install the package<br/>
        <pre style={style.innerCode}>➜  musicali git:(dev) ✗ npm install hello-cards</pre>
       </div>

        <div style={style.blurb}>Secondly import into your project<br/>

        <pre style={style.innerCode}>import Card from 'hello-cards';</pre>
        </div>

        <div style={style.blurb}>Thirdly, include the Card component in your render method<br/>
        <pre style={style.innerCode}>{`<Card product={product}/>`}</pre></div>
        {/* <img style={style.img} src="https://s3.eu-west-2.amazonaws.com/io1937/screenshots/include.jpeg"/><br/></div> */}

        <div style={style.blurb}>Fourth, pass it a product object, here is an example product object<br/>
        <pre style={style.outerCode}>
          <code style={style.code}>{`const product = {`}</code><br/>
          <code style={style.code}>{`  name: "Musico",`}</code><br/>
          <code style={style.code}>{`  page:  '/rocogo',`}</code><br/>
          <code style={style.code}>{`  description: "A music player",`}</code><br/>
          <code style={style.code}>{`  color:  "rgb(246, 235, 213)",`}</code><br/>
          <code style={style.code}>{`  cols:  "2",`}</code><br/>
          <code style={style.code}>{`  direction:  'row',`}</code><br/>
          <code style={style.code}>{`  background:  'rgb(79, 92, 191)',`}</code><br/>
          <code style={style.code}>{`  url:  "http://musico.malham.io",`}</code><br/>
          <code style={style.code}>{`  logo: 'http://malham.io/roco-wide.png',`}</code><br/>
          <code style={style.code}>{`  textOne: "React",`}</code><br/>
          <code style={style.code}>{`  textTwo: "Redux",`}</code><br/>
          <code style={style.code}>{`  number: 12`}</code><br/>
          <code style={style.code}>{`}`}</code>
        </pre>
        
        </div>

        <div style={style.blurb}>Full example code at <a href="https://github.com/cerico/hello-cards">https://github.com/cerico/hello-cards</a><br/>
        <div style={style.blurb}>GitHub README is  <a href="https://github.com/cerico/hello-cards/blob/master/README.md">here</a></div>
        </div>
      </div> 
    )
  }
}


export default About
