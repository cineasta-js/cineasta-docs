import React from 'react'
import { Link } from 'react-router'
import * as styles from 'components/menu.styles'

const Menu = (props) => (
  <div className={ styles.menu }>
    <Link to='/what' className={ styles.link }>
      What?
    </Link>
    <Link to='/how' className={ styles.link }>
      How?
    </Link>
    <Link to='/generating' className={ styles.link }>
      Generating
    </Link>
  </div>
)

export default Menu
