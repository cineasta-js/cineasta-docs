import React from 'react'
import { IndexLink, Link } from 'react-router'
import * as styles from 'components/Menu.styles'

const Menu = (props) => (
  <nav role='navigation'>
    <ul className={ styles.menu }>
      <li className={ styles.menuItem }>
        <IndexLink to='/' className={ styles.link }>
          <img alt='cineastaJS Logo'
            className={ styles.logo }
            src='https://github.com/cineasta-js/brand/raw/master/logos/logo-transparent.png' />
        </IndexLink>
      </li>
      <li className={ styles.menuItem }>
        <Link to='/what' className={ styles.link }>
          What?
        </Link>
      </li>
      <li className={ styles.menuItem }>
        <Link to='/how' className={ styles.link }>
          How?
        </Link>
      </li>
      <li className={ styles.menuItem }>
        <Link to='/generating' className={ styles.link }>
          Generating
        </Link>
      </li>
    </ul>
  </nav>
)

export default Menu
