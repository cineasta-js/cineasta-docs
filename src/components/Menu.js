import React from 'react'
import { IndexLink, Link } from 'react-router'
import * as styles from 'components/Menu.styles'

const links = [
  { to: '/framework', text: 'Framework' },
  { to: '/cli', text: 'CLI' },
  { to: '/cli/generators', text: 'Generating' },
]

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
      { links.map((link, index) => (
        <li key={ index } className={ styles.menuItem }>
          <Link
            to={ link.to}
            className={ styles.link }
            activeClassName={ `${ styles.linkActive }` }>
            { link.text }
          </Link>
        </li>
      )) }
    </ul>
  </nav>
)

export default Menu
