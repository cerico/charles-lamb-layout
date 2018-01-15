
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.css';

const classNames = require('classnames');

const Header = ({links,scheme}) => {

	const leftCorner = classNames(styles.leftCorner, styles.box)
  const rightCorner = classNames(styles.rightCorner, styles.box)
  
  const yes = {
    "padding": "36px 120px 120px"
  }
  const navItem = {
    fontFamily: scheme.font,
    display: 'inline-block',
    paddingLeft: '1.38889%',
    paddingRight: '1.38889%',
  }

  const navItems = {
    textAlign: 'right',
    marginLeft: '-1.38889%',
    marginRight:'-1.38889%',
  }

  const colHeader = {
    width: '83.33333%',
  }

  const flex = {
    display:'flex',
    backgroundColor: scheme.bg
  }
  const bar = {
    width:'90%'
  }
  const fg = {
    color:scheme.fg
  }
 
 

	return (
		<header style={flex}>
        <div style={bar}>
          <nav>
            <ul style={navItems}>
            {links.map((link,i) => {
              return <li key={i} style={navItem}>
                <Link style={fg} to={link.path}>{link.title}</Link>
              </li>
            })}
            </ul>
          </nav>
        </div>
    </header>
	);

}

export default Header;